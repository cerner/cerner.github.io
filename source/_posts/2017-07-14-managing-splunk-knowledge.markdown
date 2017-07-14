---
layout: post
title: "Managing Splunk's Knoweldge"
author: Bryan Baugher
date: 2017-07-14
tags: [engineering, splunk]
---

When we first were given access to [Splunk](https://www.splunk.com/) we were excited about all the functionality it could provide our team to help us monitor and debug our applications. We created alerts to email us if our applications are logging errors, dashboards to show health or metrics of our services, and field extractions as well as tags to make searching easier. As we created more and more of these Splunk knowledge objects we started to have issues. For regulatory and validation concerns, we have several Splunk instances that represent different environments. This required us to copy and paste or duplicate the Splunk knowledge object we created in one environment to all the others. This became very tedious and we saw all sorts of problems. Objects were only copied to some Splunk instances, updates were sometimes lost, and permissions weren't consistent or someone would forget to make their object publically viewable. We set out to look for a solution. 

After we couldn't find anything that could easily help us we created a tool called [splunk-pickaxe](https://github.com/cerner/splunk-pickaxe). splunk-pickaxe is a Ruby gem that provides a command-line interface for synchronizing a directory or repository of Splunk knowledge objects written as files to a Splunk instance. So now when a developer creates a new Splunk object, they would create and test it in our Splunk dev instance and then open a pull request to our Splunk Github repository with the object's configuration or contents . Other developers review the changes before it gets merged and automatically pushed out to all our Splunk instances using our splunk-pickaxe tool and [Jenkins](https://jenkins.io/) our continuous integration engine. This simplified things and provided consistency on these Splunk changes. We were also able to more effectively review the Splunk objects for efficient and proper Splunk usage. 

The tool grew in popularity at Cerner and currently supports many Splunk objects:

* [Dashboards](http://docs.splunk.com/Documentation/Splunk/6.6.2/Viz/Aboutthismanual)
* [Alerts](https://docs.splunk.com/Documentation/Splunk/latest/Alert/Aboutalerts)
* [Reports](https://docs.splunk.com/Documentation/Splunk/6.6.2/Report/Aboutreports)
* [Field Extractions](http://docs.splunk.com/Documentation/Splunk/6.6.2/Knowledge/ExtractfieldsinteractivelywithIFX)
* [Tags](http://docs.splunk.com/Documentation/SplunkCloud/6.6.0/Knowledge/TagandaliasfieldvaluesinSplunkWeb)
* [Event Types](http://docs.splunk.com/Documentation/Splunk/6.6.2/Knowledge/Abouteventtypes)

Check out the [Getting Started](https://github.com/cerner/splunk-pickaxe#getting-started) section to try it out and feel welcome to [contribute](https://github.com/cerner/splunk-pickaxe#contributing) any ideas or improvements.