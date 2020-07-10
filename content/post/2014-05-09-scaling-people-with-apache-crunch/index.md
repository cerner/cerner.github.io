---
title:  "Scaling People with Apache Crunch"
authors: []
author:  Micah Whitacre
date:   2014-05-09
tags: [design, engineering, bigdata]
thumbnail: "team_bigdata.png"
---

Starting the Big Data Journey
---------------

When a company first starts to play with Big Data it typically involves a small team of engineers trying to solve a specific problem.  The team decides to experiment with scalable technologies either due to outside guidance or research which makes it applicable to their problem.  The team begins with the basics of Big Data spending time learning and prototyping.  They learn about [HDFS](http://hadoop.apache.org/), flirt with [HBase](http://hbase.apache.org/) or other NoSQL, write the required WordCount example, and start to figure out how the technologies can fit their needs.  The group's immersion into Big Data deepens as they start to move beyond a prototype into a real product.

{{< figure src="team_bigdata.png" alt="Team using Big Data" >}}

The company sees the success of using Big Data technologies and the possibilities to solve difficult problems, tackle new endeavors, and open new doors.  The company has now shifted its scalability problem out from the technical architecture into a people problem.  The small team of experts cannot satisfy the demand and transferring their accumulated knowledge to new teams is a significant investment.  Both new and experienced engineers face a steep learning curve to get up to speed.  Learning the API is not difficult but challenges typically oocur when applying the WordCount example to complex problems.   Making the mental jump from processing homogeneous data which produce a single output to a complex processing pipeline involving heterogeneous inputs, joins, and multiple outputs is difficult for even a skilled engineer.

Cerner has developed a number of Big Data solutions each demonstrating the 3 V's of data (variety, velocity, and volume).  The complexity of the problems being solved, evolving functionality, and required integration across teams led Cerner to look beyond simple MapReduce.  Cerner began to focus on how to construct a processing infrastructure that naturally aligned with the way the processing is described.  Looking through the options available for processing pipelines including [Hive](http://hive.apache.org/), [Pig](http://pig.apache.org/), and [Cascading](http://www.cascading.org/), Cerner finally arrived at using [Apache Crunch](http://crunch.apache.org/).  Using Crunch's concepts, we found that we were easily able to translate how we described a problem into concepts we can code.  Additionally the API was well suited for our complicated data models and building integration contracts between teams.

When we describe a problem we often talk about its flow through the various processing steps.  The processing flow is comprised of data from multiple sources, several transformations, various joins, and finally the persistence of the data.  Looking at an example problem of transforming raw data into a normalized object for downstream consumers we might encounter a problem similar to the diagram below.

{{< figure src="example_processing_pipeline.png" alt="Example Processing Problem" >}}

If we apply this problem to the raw MapReduce framework we begin to see problems absent in the standard WordCount example.  The heterogeneous data and models, the custom join logic, and follow up grouping by key all could result in extra code or difficulty fitting this processing into a single MapReduce job.  When our problem expands to multiple MapReduce jobs we now have to write custom driver code or bring in another system like [Oozie](http://oozie.apache.org/) to chain the workflow together.  Additionally while we could fit the steps neatly into 1-2 MapReduce jobs that careful orchestration and arrangement could become imbalanced as we introduce new processing needs into the workflow.

{{< figure src="example_processing_pipeline_new_functionality.png" alt="Example Processing Problem with more functionality" >}}

This problem is common and fairly basic with respect to some of the processing needs we faced at Cerner.  For the experienced MapReduce developers this problem might cause a momentary pause to design it but that is due to your expertise.  For those less skilled imagine being able to break this problem down into the processing steps you understand and POJO like models of which you are already familiar.  Breaking this problem down using Apache Crunch we can see how we can articulate the problem and still take advantage of the processing efficiency of MapReduce.

Building a Processing Pipeline with Apache Crunch
--------------------------------------

Apache Crunch allows developers to construct complicated processing workflows into [pipelines](http://crunch.apache.org/user-guide.html#mrpipeline).  Pipelines are directed acyclic graphs (DAG) comprised of input data that is then transformed through functions and groupings to produce output data.  When a developer is done constructing the pipeline Apache Crunch will calculate the appropriate processing steps and submit the steps to the execution engine.  In this example we will talk about using Apache Crunch in the context of MapReduce but it also supports running on [Apache Spark](http://spark.apache.org/).  It should be noted that pipelines are lazily executed.  This means that no work will be done until the pipeline is executed.

To begin processing we need a pipeline instance on which we will construct our DAG.  To create a MRPipeline we need the typical Hadoop [Configuration](https://hadoop.apache.org/docs/r2.2.0/api/org/apache/hadoop/conf/Configuration.html) instance for the cluster and [the driver class](http://hadoop.apache.org/docs/r2.3.0/api/org/apache/hadoop/mapreduce/Job.html#setJarByClass(java.lang.Class)) for the processing.

```java
Pipeline pipeline = new MRPipeline(Driver.class, conf);
```

With a pipeline instance available the next step is to describe the inputs to the processing using at least one Crunch [Source](http://crunch.apache.org/user-guide.html#rwdata).  A pipeline must contain at least one source but could read from multiple.  Apache Crunch provides implementations for the typical inputs such as Sequence Files, HFiles, Parquet, Avro, HBase, and Text.  As an example if we were to read data out of a text file we might write code like the following:

```java
PType<String> ptype = Avros.strings();
PCollection<String> refDataStrings = pipeline.read(new TextFileSource(path, ptype));
```

This code utilizes the TextFileSource to generate a collection of Java Strings from files at a certain path.  The code also introduces two additional Apache Crunch concepts of [PCollections](http://crunch.apache.org/user-guide.html#datamodel) and [PTypes](http://crunch.apache.org/user-guide.html#serde).  A PCollection represents potential data elements to process.  Since a pipeline is lazily executed it is not a physical representation of all of the elements.  A PCollection cannot be created but can be read or transformed.  Apache Crunch also has special forms of PCollections, PTable and PGroupedTable, which are useful in performing join operations on the data.  A PType is a concept that hides serialization and deserialization from pipeline developers.  In this example the developer is using native Java strings instead of dealing with wrapper classes like Writable's Text class.

Processing based off of Java Strings is error prone so typically developers would transform the data into a model object that is easier to work with.  Transformation of a PCollection is done through a [DoFn](http://crunch.apache.org/user-guide.html#dataproc).  A DoFn processes a single element of the PCollection into zero or many alternate forms depending on its logic.  The bulk of a processing pipeline's logic resides in implementations of DoFn.  Custom implementations of a DoFn requires extending the DoFn class as well as defining the input and output types.  This allows Crunch to provide compile time checking as transformations are applied to collections.

```java
class ConvertReferenceDataFn extends DoFn<String, RefData>{
     public void process (String input, Emitter<RefData> emitter) {
       RefData data = //processing logic;
       emitter.emit(data);
    }
}

...

PType<String> ptype = Avros.strings();
PCollection<String> refDataStrings = pipeline.read(new TextFileSource(path, ptype));
PCollection<RefData> refData =
  refStrings.parallelDo(new ConvertReferenceDataFn(), Avros.records(RefData.class));
```

Recalling the previous example processing problem we see that we need to perform join and grouping operations based on a key.  Instead of converting the strings into a RefData object it would actually be better to convert the string into a key/value pair (e.g. Pair<String, RefData>).  Apache Crunch has a PTable<K, V>, which is simply a special form of PCollection<Pair<K, V>>.  Adjusting the function we can instead produce the key/value pair.

```java
class ConvertReferenceDataFn extends DoFn<String, Pair<String, RefData>>{
     public void process (String input, Emitter<Pair<String, RefData>> emitter) {
       RefData data = //processing logic;
       String id = //extract id;
       emitter.emit(new Pair(id, data));
    }
}

...

PType<String> ptype = Avros.strings();
PCollection<String> refDataStrings = pipeline.read(new TextFileSource(path, ptype));
PTable<String, RefData> refData =
  refStrings.parallelDo(new ConvertReferenceDataFn(),
    Avros.tableOf(Avros.strings(), Avros.records(RefData.class)));
```

Utilizing the PTable<String, RefData> collection we could then [join](http://crunch.apache.org/user-guide.html#joins) that collection with another similarly keyed PTable using one of the many prebuilt implementations.  The built in join functionality helps to avoid developing custom implementations of a common data processing pattern.

More functions are applied to the joined data to continue the processing workflow.  The processing of the data is distributed in separate tasks across the cluster.  In the example problem we need all of the data for a [given key to be grouped](http://crunch.apache.org/user-guide.html#gbk) to a single task for processing.

```java
PTable<String, Model> data = ...;
PGroupedTable<String, Model> groupedModels = data.groupByKey();
```

A pipeline requires at least one collection of data to be persisted to a [target](http://crunch.apache.org/user-guide.html#targets).  Crunch provides the standard targets for data but consumer can also easily create new custom inputs.

```java
    //persist Avro models
    pipeline.write(models, new AvroFileTarget(path));
```

When constructing the processing pipline for the example problem we would end up with an executable program that looks like the following:

```java
public void run(){
    Pipeline pipeline = new MRPipeline(Driver.class, conf);

    //Read data from sources
    PType<String> ptype = Avros.strings();
    PTable<String, RefData> refDataStrings = pipeline.read(new TextFileSource(path1, ptype));
    PTable<String, RefModel> refModelStrings = pipeline.read(new TextFileSource(path1, ptype));

    //Convert the Strings into models
    PTable<String, RefData> refData =
      refStrings.parallelDo(new ConvertReferenceDataFn(),
        Avros.tableOf(Avros.strings(), Avros.records(RefData.class)));
    PTable<String, RefModel> refModel =
      refStrings.parallelDo(new ConvertReferenceModelFn(),
        Avros.tableOf(Avros.strings(), Avros.records(RefModel.class)));

    //Data separate input together.
    PTable<String, Pair<RefData, RefModel>> joinedDataModel = refModel.join(refData);

    //Apply a similar DoFn to convert the Pair<RefData, RefModel> into a single object
    PTable<String, Model> models = ...;

    //Filter out data that is not useful
    PTable<String, Model> filteredModels = models.filter(new FilterModelFn());

    //Group the data by key to have all model instances with the same key in a single location
    PGroupedTable<String, Model> groupedModels = filteredModels.groupByKey();

    //Convert the grouped Models into a single model object if they share the same key.
    PCollection<PersonModel> personModels =
      groupedModels.parallelDo(new ConvertPersonModelFn(), Avros.records(PersonModel.class));

    //Write out the Person Model objects
    pipeline.write(personModels, new AvroFileTarget(path));

    //At this point the pipeline has been constructed but nothing executed.
    //Therefore tell the pipeline to execute.
    PipelineResult result = pipeline.done();
}

class ConvertReferenceDataFn extends DoFn<String, Pair<String, RefData>>{
     public void process (String input, Emitter<Pair<String, RefData>> emitter) {
       RefData data = //processing logic;
       String id = //extract id;
       emitter.emit(new Pair(id, data));
    }
}

class ConvertReferenceModelFn extends DoFn<String, Pair<String, RefModel>>{
     public void process (String input, Emitter<Pair<String, RefModel>> emitter) {
       RefModel model = //processing logic;
       String id = //extract id;
       emitter.emit(new Pair(id, model));
    }
}

class FilterModelFn extends Filter<Pair<String, Model>>{
     public boolean filter (Pair<String, Model> model) {
       boolean include = //logic to apply to the model
       return include;
    }
}

class ConvertPersonModelFn extends MapFn<Pair<String, Iterable<Model>>>{
     public PersonModel map (Pair<String, Iterable<Model>> models) {
       PersonModel model = //apply grouping logic to generate model from many items.
       return model;
    }
}
```

It is very easy to see how the processing steps and flow of the original diagram can be mapped to Apache Crunch concepts.

{{< figure src="example_processing_pipeline_crunch_concepts.png" alt="Crunch Concepts Applied to Processing" >}}

Executing the code as written above would cause Apache Crunch to calculate the execution graph to be spread over two MapReduce jobs.

{{< figure src="pipeline_mr.png" alt="Pipeline Execution" >}}

In this case having a MapReduce job being reduce only is less than ideal but the team has been able to focus on correctness and functionality first.  Focus can now be shifted on performance tuning or adjusting algorithms as appropriate.  The solid foundation of functionality and the simplicity of the concepts allows developers to easily understand how the processing pipeline.  The ease of understanding helps to allow the team to refactor and iterate with confidence.

This blog post is essentially my script for my [North America ApacheCon 2014 presentation](http://apacheconnorthamerica2014.sched.org/event/37a39cc1b611e53ea5b6e348786337ad?iframe=no&w=100&sidebar=yes&bg=no#.U1hyq-ZdVDw).  Slides are available [here](http://events.linuxfoundation.org/sites/events/files/slides/Simplifying%20Big%20Data%20with%20Apache%20Crunch.pdf).


Links
---------
* [Crunch User Guide](http://crunch.apache.org/user-guide.html)