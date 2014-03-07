---
layout: engineer
who: Ben Brown
title: Software Architect
team: Semantic Solutions
---

{% engineer about %}

I'm a Software Architect developing here at Cerner since 2005. I started my journey doing R&D around Java desktop applications (very early stages of iAware) and transitioned into infrastructure library development. I soon found myself involved in some of Cerner's first forays in cloud development and have been there focusing on search since (as well as extra cloud stuff to keep me fresh).

My team currently builds out search services on top of Millennium+. From our mainstay Chart Search application, to patient searches, to building data minded personalized order catalogs we touch a broad number of data sets.

Outside of work I'm a relentless hobbyist. Spending some days playing music, some evenings playing video games and watching anime, and occasionally league bowling on a Sunday. I've recently relapsed with the astronomy bug so lately I've hunting out clear nights and shivering in the cold.

{% engineer hardware %}

I do development on a 17" Macbook Pro and handy 23" external monitor, vertically stacked. Since most of my development involves building out search on large data sets there is always a series of linux VMs involved to host services and indexes. Most of this work also involves map/reduce and real time processing through storm so an HBase cluster is never far away.

At home I have a set of custom golf clubs, a road bike, too many guitars, and a stupidly large collection of DVDs. Recently my favorite piece of hardware is a 9.25 inch Celestron telescope and SBIG CCD camera.

{% engineer software %}

I do most of my editing mixing it up between Intellij (Groovy and Java), Sublime (Ruby and general scratch editing), and emacs when I don't want to leave a terminal, which truthfully is most of the time.

Most of our back end work builds on top of Apache projects. Our indexes are hosted in Solr instances, we access them through Thrift services, use Zookeeper for coordination and store our data in HBase. The main piece of software we use that doesn't come out of Apache is Storm, which we use for our real time data processing.

Our front end apps are written in Rails.

{% engineer dream %}

The latest MacBook Pro, a couple of monitors, and a mac keyboard to do coding and builds with; then the biggest and best data set I can get my hands on in an HBase instance and a series of beefy physicals to make it all searchable. And a comfy chair, can't forget that part.
