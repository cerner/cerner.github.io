---
title: Ruby at Cerner
authors: ["Cerner Engineering"]
date: 2013-04-05
tags: [engineering]
permalink: /2013/04/ruby-at-cerner/
thumbnail: "the.foxes-4c.png"
---

Cerner's journey with Ruby started in the summer of 2009. We selected Ruby on Rails for rapid development of the [Cerner Store](https://store.cerner.com/) to prepare for release at the Cerner Health Conference that year. In three months, with three engineers and a designer, we wrote and released the first version of an e-commerce web application. Two of those engineers, including me, had never worked with Ruby before but quickly realized the power and expressiveness of the language due to resources like [Why's (Poignant) Guide to Ruby](http://mislav.uniqpath.com/poignant-guide/).

{{< figure src="the.foxes-4c.png" alt="Chunky bacon!" >}}

Our experience with the Cerner Store taught us that Rails led to high productivity. Ruby is a very natural language to write code in and principles like [convention over configuration](http://en.wikipedia.org/wiki/Convention_over_configuration) enabled us to solve our problems instead of spending time wrangling the framework. In addition, we valued the good practices of the Ruby community like easy-to-understand code and thorough unit testing with tools that aren't painful.

In the summer of 2010, we attended the first [Ruby Midwest](http://rubymidwest.com/) as a team. We learned about developments in Ruby like JRuby and Chef as well as some of the great gems under development. The Cerner Store continued to grow and we learned about maintaining a Rails web app over time.

In early 2012, we were planning a massive undertaking to create a new platform for our Clients' healthcare data. It was to be called Millennium+ and it needed an architecture that could scale well to petabytes of data and dozens of engineers across many teams. We planned a [service-oriented architecture]({{<ref "/post/2013-02-27-near-real-time-processing-over-hadoop-and-hbase">}}) and chose Rails to serve as the server side of the application. Our Rails services call JVM services that retrieve data from HBase and serves the resulting data as JSON to the client-side applications, including our iOS app, PowerChart Touch Ambulatory. The high productivity we enjoyed on a small team scaled well to a large team of people who had never written Ruby before.

This was the start of Cerner's Ruby community. We developed reusable libraries and development processes that we continue to use today. The complexities of our architecture also led to the adoption of [Chef](http://www.opscode.com/chef/) to automate operations and build a devops mindset. Chef is another integral use of Ruby that penetrates teams that did not use Ruby at all.

When planning our newest platform, [Population Health](http://www.cerner.com/blog/population_health_management_collaboration_with_advocate_physician_partners/), we needed to determine which platform made the most sense for a large-scale development of web applications on a tight timeline. We decided on Rails due in large part to its prioritization of convention over configuration, as well as the existing Ruby community at Cerner. These attributes would enable us to develop applications at the planned pace and scale. This decision is now disseminated to dozens of engineers working on brand new web applications and REST services powering them.

We've bolstered our internal Ruby community with lots of documentation and guidelines. We make use of the [Ruby on Rails Tutorial book](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book) and Why's (Poignant) Guide to train engineers in Ruby. Bozhidar Batsov's [Ruby style guide](https://github.com/bbatsov/ruby-style-guide) aligns closely with how we write our code, so we use [rubocop](https://github.com/bbatsov/rubocop) to keep ourselves in line. Our development devices run on [RVM](https://rvm.io/) and our servers run on [Phusion Passenger](https://www.phusionpassenger.com/).

Ruby has quickly become a very important part of Cerner's engineering culture, primarily as the language behind Rails and Chef. An internal Ruby meetup has begun and there have been presentations involving Ruby at our annual Developer Conference.

{{< figure src="ruby-midwest-logo-2013.png" alt="Ruby Midwest 2013 Logo" >}}

Additionally, we are sponsoring [Ruby Midwest](http://rubymidwest.com/) because we want developers to know that Ruby is highly valued at Cerner. We're also sending a large number of our own associates there to learn.

We look forward to bringing on more engineers to use Ruby and other technologies to engineer the future of healthcare.
