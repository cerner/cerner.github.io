---
title: "Structure Matters: How Cerner Handled Too Much Health Data in HBase"
authors: []
author:  Michelle Brush and Vinay Koduri
date: 2017-08-28
tags: [engineering, hbase]
---

### Background

In order to manage the health of populations, Cerner builds data-driven solutions built on top of its _HealtheIntent_&#8480; platform. The platform transforms and standardizes data across disparate health systems. The data is then used in algorithms that aid healthcare providers and hospitals in managing and monitoring health both at a person and population level.

The Reference Record is one of the core components of the HealtheIntent platform. It represents the data known about a person's health from a particular source of healthcare information. Downstream components in the platform aggregate information across multiple reference records to understand the full picture of a person's health. 

To create the record, the system performs both batch and stream processing. Some sources send the data to HealtheIntent once a day or once a month. That data is processed in batch, using Hadoop MapReduce jobs. For sources that send the data as streams of updates in near real time, we rely on a homegrown near real time framework that sits on top of Apache Storm. Both the pipelines persist their processed data in HBase tables. 

For the data processed in batch, we write all the data about the person from a given source to the HBase table as one HBase row. We refer to this as a wide table. The HBase Rowkey is the source identifier followed by the person identifier: `/source:<id>/person:<id>`. Each row could have multiple columns, one per each healthcare entity like allergy, medication, procedure, etc. Another thing to note is this table is salted for better distribution of data across regions. That means a given person's data will be in a single region since it's all in one row, but the data for a given source will be distributed across the HBase cluster. 

For streaming sources, we use a different table approach. We have a tall table, where each healthcare entity is written separately. The Rowkey in this approach would be built from the source identifier, person identifier, entity type, and then individual entity identifier. This allows the system to manage the information flowing from the stream more efficiently. 

To make sure that the consumers of the record don't have to know whether the data is coming from a streaming or batch source system, we offer a Crunch-based extract API that is capable of reading from either table structure. The API provides a single, consistent representation of the data.

The purpose of this post is to discuss what happened when a single person in our system received a little too much healthcare over the course of her fake life. 

### The Investigation

We were bringing a new source of healthcare data onto the HealtheIntent platform using our batch processing pipeline. In the midst of this work, a small number of MapReduce jobs started failing. Our failure monitoring triggered and notified us that something wasn't right.

We turned to the logs to investigate the failures. We saw this (not very informative) message:

> Task attempt_xxxx failed to report status for 601 seconds. Killing!

Our first assumption was that the issue was related to memory, but we profiled the job and found that the heap utilization looked fine. 

Querying across all the logs, we were able to see two key pieces of information. One, a job was more likely to fail if it was reading from a particular source of data, and two, failures were correlated with alerts on slow response times in HBase. Drilling deeper into our logs, we were able to find that sure enough, we were timing out trying to read from a particular region in HBase. 

The next obvious step was to look at region metrics. We found the region had grown in size to 115 GB on a cluster configured to have a max region size of 10 GB. More logs showed the table had stopped compacting and splits weren't working due to a 30 GB row in the table. 

At this time, anything trying to read that row was failing, but some large writes were still succeeding. There would be attempts to bulk load new data to the region, but the loads would invariably fail due to the large row. When the job ran again, it would attempt to write the same data, over and over. Occasionally during these attempts, some of the data would get written to the region. This process piled more and more data onto the region, and the region wouldn't split. 

As the region was growing, the situation got worse. As previously mentioned, we salt the row keys to distribute data across the cluster. Jobs interested in other source data were also reading from this region, so we started seeing failures in other jobs. Then in the midst of our investigation, we saw more HBase region servers start failing. Then HBase bulk loads in other MapReduce jobs were also failing. We knew we had to get rid of the row and split the region.

As some team members worked on a plan to deal with the row, others moved on to answering the question, "How did this one row get so big that the bulk loads started failing?" 

With healthcare data, it's possible to imagine diseases that might lead someone to have so many encounters and activity within a single healthcare system that we could get to a gigabyte of health data about a person. However, we had never seen anything near this large before. It was a pretty significant outlier. 


### Getting Rid of the Alternative Fact

We decided to delete the person's data. However, the person had grown so large, this proved difficult. (The naive approach to deleting a row in HBase failed spectacularly.) Splitting was also not possible.

We needed a better plan. First, all reads and writes to the region had to stopped. This meant suspending all jobs that any potential to read or write. Since several teams depended on our data for their processing, we started by notifying all our downstream consumers. Then we stopped all reads and writes to the affected region. We copied the affected Hfiles to a new table. This allowed compaction (and as a result, deletion) to succeed. Cleaning up this one bad record brought the region size down to 2 GB from 200 GB. As part of this process, the table was disabled and the compacted Hfiles from the fixed region were copied back to the old table before it was re-enabled.

### Damage

When we stopped all the jobs loading into that table, we had a stale data period for downstream processing. Reports that needed the data showed old information during the length of the incident investigation and mitigation. The good news is that our near real-time algorithms such as our Sepsis alerts and readmissions risk assessments were built on top of the stream processing system which was not impacted by this incident.

### Prevention

In our postmortem for the incident, we reviewed what we could have done better before, during, and immediately following the situation. A quick win for us was to add HBase region size monitoring & alerting. It is still reactive, but would help us react faster and minimize the duration of the event.

Ultimately, the root of the problem is that we have an approach that encourages a lot of data to accumulate in a single row. We had a design flaw. While this patient was outside the realm of anything we'd seen before, it wasn't outside the realm of possibility. To quote an oldie, but goodie from Frederick Brooks, "Our first response should be to reorganize the modules' data structures." 

This event made us realize our batch and streaming representations of the data need to converge. That is the path we're now taking which will introduce its own set of challenges, but we're confident this will land us in a more stable, scalable place.
