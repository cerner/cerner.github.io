---
layout: post
title: "Jwala Joins Cerner's Open Source"
author: Arvindo Kinny
date: 2017-09-27
tags: [engineering, oss]
---

### Introducing Jwala, a Resource Manager for the Apache Community

[Apache Tomcat](http://tomcat.apache.org/) and [Apache httpd](https://httpd.apache.org/) are hardened, scalable, and reliable open-source solutions. Widely adopted, these solutions are commonly used to host and load-balance Java applications. 
 
Configuring and managing a small set of elements is relatively easy, but once you start scaling out your application and platform, things get complicated. Questions such as "How do I update the heap or database pool-size across hundreds of Java Virtual Machines (JVMs)?" arise. Although commercial solutions exist to solve this and other similar problems, an open-source solution was not available - until now. 
 
Originally designed and developed to accommodate Cerner’s complex topologies, Jwala was developed to automate deploying our web applications here at Cerner. Now Cerner is donating Jwala as open source. Making contributions to development communities is an important part of Cerner's engineering culture. We love it when we're able to give back to the community, and we’re sure you’ll love Jwala!
 
A Cerner platform based on Apache Tomcat and Apache httpd, Jwala enables the configuration, deployment, and management of logical groups of Tomcat JVMs load-balanced by Apache web servers.  
 
With Jwala you can configure, deploy, and manage your large-scale Tomcat and Apache httpd topology at an enterprise scale. You can create and persist definitions of Group instances that include web applications, JVMs, web servers, and other resources, and expose them through a RESTful interface, Jwala's REST API, to perform management operations on the group.
 
Jwala utilizes a defined file system structure and Secure Shell (SSH) agents on each machine to manage running Tomcat instances on remote servers. Jwala’s application deployment model knows how to request current status from each Tomcat and httpd instance. Jwala also is able to update each instance as changes are made to the configuration and allows maintenance operations to be executed from a central console. Last but not least, Jwala maintains an audit log of all the operations or changes performed on any of its managed resources.
 
So, if you are someone in development, operations, or management looking for an easier way to configure and manage a large Tomcat topology, [check out Jwala](https://github.com/cerner/jwala).
