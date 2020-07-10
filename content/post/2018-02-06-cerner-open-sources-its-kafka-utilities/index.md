---
title: "Cerner Open Sources its Kafka Utilities"
authors: ["Bryan Baugher"]
date: 2018-02-06
tags: [engineering, kafka, ingestion]
---

At Cerner, we often make use of many open source projects in our infrastructure. I work on a team responsible for Cerner's Ingestion Platform, a critical piece of infrastructure that takes in TBs of data and over a billion messages per day. The platform’s responsibility is then to make this data available for downstream teams to consume. When designing the Ingestion Platform, we felt Apache Kafka was perfect for ingesting and consuming these massive streams of data. We originally built the Ingestion Platform in 2014 and it has grown with Kafka ever since.

Along the way, we’ve become experienced with Apache Kafka and how it works. We know how to monitor it, perform common administrative operations, and more. We’ve even made contributions to Kafka for various improvements [[1](https://issues.apache.org/jira/browse/KAFKA-3297)][[2](https://issues.apache.org/jira/browse/KAFKA-4687)][[3](https://issues.apache.org/jira/browse/KAFKA-2434)] and Apache Crunch, our processing framework, to [add Kafka support](https://issues.apache.org/jira/browse/CRUNCH-606). We have also given [talks](https://www.confluent.io/resources/kafka-summit-2016/ingesting-complex-healthcare-data-apache-kafka/) about our usage of Apache Kafka at Kafka Summit and we’ve written a [blog post](http://blog.cloudera.com/blog/2014/11/how-cerner-uses-cdh-with-apache-kafka/) about it as well.

We are still interested in supporting the Kafka community, and today we hit another milestone as we open source some of our [utilities for Kafka](https://github.com/cerner/common-kafka). This includes:

* Lightweight wrappers over producer and consumer providing additional functionality
* A client to simplify admin operations
* A Kafka connect sink for delivering data to another Kafka cluster
* Kafka test infrastructure for integration testing

Try it and let me know what you think! You can log issues for improvements, or email me your thoughts: bryan.baugher@cerner.com. We hope to continue to improve the library and always welcome contributions and ideas from others.
