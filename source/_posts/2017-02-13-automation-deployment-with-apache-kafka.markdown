---
layout: post
title: "Automation Deployment with Apache Kafka"
author: Bryan Baugher
date: 2017-02-13
tags: [engineering, kafka]
---

Its likely not a surprise that Cerner would use Apache Kafka as we have used
a number of related technologies like [Apache Hadoop](http://engineering.cerner.com/2013/02/composable-mapreduce-with-hadoop-and-crunch/)
along with its Map/Reduce, HDFS and even [Apache HBase](http://engineering.cerner.com/2013/02/near-real-time-processing-over-hadoop-and-hbase/).
Our team first started using [Apache Kafka](http://kafka.apache.org/) in 2014
when Kafka 0.8 first came out. Since then we've expanded to using Kafka for a
number of different use cases
([1](http://blog.cloudera.com/blog/2014/11/how-cerner-uses-cdh-with-apache-kafka/), [2](https://www.confluent.io/kafka-summit-2016-users-ingesting-complex-healthcare-data-with-apache-kafka))
and it has become a core piece of Cerner's infrastructure.

Just like the [applications we create](http://engineering.cerner.com/blog/deploying-web-services-with-apache-tomcat-and-chef/)
we also needed to automate the deployment of Kafka to handle the ever growing
amount of operations work and to ensure a high level of consistency with our
environments. Chef was an obvious choice for us since its been our deployment tool of
choice for the last few years. We quickly put together a
[cookbook](https://github.com/cerner/cerner_kafka) to help us automate the
deployment of the many Kafka clusters here at Cerner. We have
[continued to support and use this cookbook](https://github.com/cerner/cerner_kafka/blob/master/CHANGELOG.md)
after open sourcing it by upgrading it to handle newer versions of Kafka (0.9 and 0.10),
handle Kerberos authentication and many other improvements.

If you use Apache Kafka feel free to [try it out](https://github.com/cerner/cerner_kafka)
and let us know how it works for you.
