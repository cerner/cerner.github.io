---
title: "Version Databag - A Chef Release Process"
authors: ["Mike Rzepka"]
date: 2017-04-04
tags: [chef, engineering]
---

At Cerner, we use [Chef](https://www.chef.io/). In fact, we're heavily ingrained with Chef in our [configuration management practices](https://en.wikipedia.org/wiki/Software_configuration_management). We deploy services from [Tomcat](http://engineering.cerner.com/blog/deploying-web-services-with-apache-tomcat-and-chef/) to [Kafka](http://engineering.cerner.com/blog/automated-deployment-with-apache-kafka/) with Chef. Even the first open source project we announced was [a tool for Chef](http://engineering.cerner.com/2014/01/cerner-and-open-source/)!

With all of this integration with Chef, we need a simple way to manage all of those versions. This is where the [Version Databag cookbook](https://supermarket.chef.io/cookbooks/version_databag) comes in. At a high level, this cookbook allows us to define our versions in a centralized data bag (grouped under conceptual units) and populates the corresponding node attributes required with those versions at runtime. This significantly reduces the effort involved in finding, updating, and maintaining the various versions of things that we have across our Chef configuration.

Because we found it so useful, we decided to open source it! We encourage you to try it and manage Chef versions with it for easier configuration management practices. If you feel that it could be further improved, [let us know](https://github.com/cerner/version_databag/issues) (or better yet, submit the improvement yourself!). We're welcome to take enhancements and feedback to improve our processes.
