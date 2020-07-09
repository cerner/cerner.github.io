---
title: Cerner and Open Source
authors: []
author:  Nathan Beyer
date: 2014-01-16
tags: [culture, engineering, operations]
permalink: /2014/01/cerner-and-open-source/
---

(This post was written by Nathan Beyer, Bryan Baugher and Jacob Williams.)

The use of open source software has become nearly ubiquitous in contemporary software development and it is no different for us, here at Cerner. We have been using open source software, directly and indirectly, for decades. Over the past decade, we’ve grown in maturity both in our use of open source software as well as our participation in open source communities. Our associates have long been contributors to open source communities, including helping users, logging bugs and enhancements, and submitting patches. Cerner associates also spearheaded the development of the [Java Reference Implementation of the Direct Project](http://wiki.directproject.org/Java+Reference+Implementation).

Recently, we’ve decided to take another step in the open source journey by releasing complete projects on our [Github organization](https://github.com/cerner). Although these projects seem small, they are a big step for us and just the beginning of what we hope to open up and share in the future. We hope you’ll check out these projects and participate in their development.

## Project: knife-tar

Source: [https://github.com/cerner/knife-tar]

Knife-tar is a [Chef](http://www.getchef.com/chef/) tool for uploading and downloading Chef components from a tar file. It can be used for creating backups of your chef-server or for uploading released Chef artifacts from a repository.

## Project: scrimp

Source: [https://github.com/cerner/scrimp]

Scrimp is a tool for interactively testing [Thrift](http://thrift.apache.org/) services in a web browser. It’s meant to fill the same role that browser-based REST clients fill for web services. Given the IDL files for the services, it provides a UI to help construct requests, invoke services, and display formatted responses.
