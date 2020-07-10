---
title: "Deploying Web Services with Apache Tomcat and Chef"
authors: []
author:  Bryan Baugher
date: 2016-02-04
tags: [engineering]
---

Open source is an important part of our engineering culture and we love when we’re able to contribute back to the community. We recently open sourced our [Tomcat Chef Cookbook](https://github.com/cerner/cerner_tomcat), which we use to automate deploying many of our web services here at Cerner. The cookbook is meant to be simple, yet flexible enough to change most anything about [Apache Tomcat](http://tomcat.apache.org/) to your liking. It supports installing any version of Tomcat, configuring any file within the Tomcat installation and deploying web applications.

The cerner_tomcat cookbook is one of our oldest cookbooks which was originally written when we first started using [Chef](https://www.chef.io/). We created it as the other community Tomcat cookbooks didn’t include all the features we needed. As of today, the [Tomcat cookbook provided by Chef](https://github.com/chef-cookbooks/tomcat) seems to be the predominant cookbook in the community; however, it still lacks the functionality and flexibility we need such as deploying the applications themselves.

One of the biggest problems when using Chef to configure Tomcat is that Tomcat uses XML for configuration which does not map very well to Chef’s Ruby Hash-based attributes like JSON, YAML or properties files do. Our first implementation was very similar to the [Chef community cookbook](https://github.com/chef-cookbooks/tomcat/blob/v1.0.1/templates/default/server.xml.erb) in which the cookbook provides a configuration template with a static set of properties. We quickly learned that this solution didn’t scale for us given the varying configuration needs of applications and the ever-changing configuration options across Tomcat versions. Our approach now is to allow applications to provide configuration templates themselves, allowing this cookbook to be leveraged by the various teams deploying Tomcat applications.

Our cerner_tomcat cookbook is one of our most used cookbooks here at Cerner. We would love for you to try out our cookbook and let us know how we can improve it.
