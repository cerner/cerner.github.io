---
title: "Announcing Bunsen: FHIR Data with Apache Spark"
authors: ["Ryan Brush"]
date: 2017-11-27
tags: [engineering, spark, FHIR]
---

We're excited to open source [Bunsen](http://engineering.cerner.com/bunsen), a library to make analyzing [FHIR data](http://hl7.org/fhir/STU3/resourcelist.html) with [Apache Spark](https://spark.apache.org/) simple and scalable. Bunsen encodes FHIR resources directly into Apache Spark's native data structures. This lets users leverage well-defined FHIR data models directly within Spark SQL.

Here's a simple query against a table of FHIR observations that produces a table of
heart rate values:

```python
spark.sql("""
select subject.reference person_id,
       effectiveDateTime date_time,
       valueQuantity.value value
from observations
where in_valueset(code, 'heart_rate')
 """).show()
```
Which prints a table like this:

|person_id        |date_time    |value   |
|:----------------|:------------|:-------|
|Patient/123      |2016-12-27   |54.0000 
|Patient/123      |2017-04-18   |60.0000

Notice that each field in the above SQL is fully defined by the [FHIR Observation model](http://hl7.org/fhir/STU3/observation.html). This is because the table schemas are generated directly from FHIR resource definitions, ensuring these queries exactly match other FHIR-based views of the same data.

Bunsen also provides a collection of helpful functions to make querying data easy. The above query includes the _in\_valueset_ user-defined function, allowing users to use code value sets directly in the query. You can see the [Bunsen value set documentation](http://engineering.cerner.com/bunsen/introduction.html#bring-your-own-value-sets) for details. 

### Scalability and Performance
Because Bunsen encodes FHIR resources in Apache Spark's efficient binary format, we get all of Spark's scalability and performance advantages. Simple queries across billions of FHIR resources typically return in single-digit seconds in internal clusters. Arbitrary joins and aggregations of complex datasets scale with your Apache Spark cluster. We take advantage of Spark's built-in support for [Apache Parquet](https://parquet.apache.org/) to read and write FHIR with an efficient columnar data format that is readable by other systems as well.

### Sophisticated Queries
Spark SQL offers rich query semantics that can now be used directly over FHIR data models. For instance,
here is a query that builds a timeseries-like table directly from a collection of observations by simply 
grouping items by the person and time period. This is just standard Spark SQL wrapped around
our simple valueset-based function.

```sql {linenos=table}
select subject.reference patient_id,
       year(effectiveDateTime) obs_year,
       month(effectiveDateTime) obs_month,

       avg(if(in_valueset(code, 'glucose_level'), 
              valueQuantity.value, 
              null)) avg_glucose_level,
              
       avg(if(in_valueset(code, 'bun'), 
              valueQuantity.value, 
              null)) avg_bun
                            
from observations
group by subject.reference, 
         year(effectiveDateTime), 
         month(effectiveDateTime)
order by patient_id, obs_year, obs_month 
```

Typical queries may aggregate many other types of data and join to conditions, allergies, or other tables 
to build a more complete report. All of this can be done interactively over billions of records.

### Java Usage
Bunsen uses the [HAPI FHIR](http://hapifhir.io/) library to represent data in object form. Java users can convert their objects from the HAPI to Spark-native structures and back with a few lines of code. Here's an example:

```java {linenos=table}
FhirEncoders encoders = FhirEncoders.forStu3().getOrCreate();

List<Condition> conditionList = // A list of org.hl7.fhir.dstu3.model.Condition objects.

Dataset<Condition> conditions = spark.createDataset(conditionList,
    encoders.of(Condition.class));

// Query for conditions based on arbitrary Spark SQL expressions
Dataset<Condition> activeConditions = conditions
    .where("clinicalStatus == 'active' and verificationStatus == 'confirmed'");
```

Users can also leverage Spark's built-in functionality to write these datasets to tables and query these tables later.

### Using and Contributing
Bunsen is available under the Apache 2.0 license. The initial release targets [Apache Spark 2.1](https://spark.apache.org/releases/spark-release-2-1-0.html) and [FHIR STU3](https://www.hl7.org/fhir/STU3/index.html), and support for additional versions will emerge over time.

Check out Bunsen's [documentation](http://engineering.cerner.com/bunsen) and [GitHub Repository](https://github.com/cerner/bunsen) for more on using or contributing to the project.