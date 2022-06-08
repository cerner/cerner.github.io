---
title: Spring 2016 ShipIt Day
authors: ["Melanie Carpenter"]
date: 2016-04-18
tags: [culture, engineering, hackathon, shipit]
thumbnail: "shipit-start.png"
---

ShipIt Day is an all day, all night hackathon with the goal of building something awesome, usable, and value-adding
within the given 24 hours. This Spring marked our fifth ShipIt Day, with participation and reach growing with each
event.

We kicked off the event at 10 AM on Thursday, when teams broke out and got to work and stopped only for food and
caffeine. Many stayed until a few hours after dinner arrived, several stayed all night and took naps in their workspace,
and a few worked through the whole night. The event was initially announced early in February, to give teams time to
work this into their project plans. The schedule was to start at 10 am on a Thursday and wrap-up at 10 AM on Friday.
Teams then presented their awesome projects and then were free to leave for the weekend (and catch-up on some sleep).
Each team was free to choose the project they wanted to work on, with the limitation added that they should work on
something which can be deployed somewhere in 24 hours (there were bonus points involved for deployed projects).  The
winning prize not only included bragging rights, but also the _Golden Keyboard_, which will be a traveling trophy.

{{< figure src="shipit-start.png" alt="Kickoff" >}}

The event wrapped up on April 1st at Continuous Campus. We had over 50 participants from nine different organizations
split into teams. They survived several April Fools pranks, two cases of [Monster](https://www.monsterenergy.com/), and 18 extra large pizzas before
presenting their projects to a room full of other participants, judges, and over 50 people watching the live broadcast
online.

By the time 10 AM on Friday rolled around, the group was looking sleepy but excited for presentations. We moved over to
a bigger room where a live streaming service was set up for associates at other campuses to watch presentations. A
voting form was sent out to the entire audience, and a scoresheet was given to the judges. All 12 teams got through
their presentations despite their lack of sleep, and the judges were thoroughly impressed. One judge, K.K. Kailasam made
the remark,

> You guys made it very difficult for us. It was extremely exciting to see the passion and excitement in each of you guys coming up and doing something outside of normal work. I’m totally humbled and very impressed.

The people’s choice votes were tallied and judges decided on the top three winners.

{{< figure src="shipit-judging.png" alt="Judging" >}}

# Winning Projects

### People’s Choice
Team Mantri (Dinesh Rauniyar, Raju Karki, Dinesh Bajracharya, Mahesh Acharya, Prannav Shrestha)

Spoor is a [Chrome](https://www.google.com/chrome/) extension that scans through tools like [GitHub](https://github.com/), [JIRA](https://www.atlassian.com/software/jira), [Crucible](https://www.atlassian.com/software/crucible) and [Jenkins](https://jenkins.io/index.html) and presents relevant
information to us. Just with a single click, you can view all of the notifications from these tools and drill down to
the detailed and hyperlinked description of each one of them.

### Third Place
Suicide Cupcakes (Travis Collins, Daniel Lloyd, Andy Quangvan, Gared Seats)

> The ETS_SHIV Ship IT project came about due to the frustration of being locked into a chroot jail on an ssh jump box
without any ability to lookup the necessary connection info (fully qualified domain name / IP Address) necessary to
connect to a node. Shiv is a tool that will query a read-only file system with all the node objects represented as
directories and text files.  The script writes out the files and directories to a file system that is bind mounted read-
only inside chroot.  Now users inside the chroot jail can run simple a command like; shiv cloud.  This would return the
FQDN/IP address of all nodes with a [Chef](https://www.chef.io/) node name containing the the string “cloud”.

### Second Place
Really Tardy Measurement mechanicS (Jeff Compton, Himanshi Gulati, Adam Splitter, Timothy Waszac, Sriram
Vimaraju)

> The _Response Time Measurement System (RTMS)_ framework, which our team owns, is dependent on many moving parts, such as: [Hadoop](http://hadoop.apache.org/) and [Jenkins](https://jenkins.io/index.html)
in order to produce a timer. In addition, using [Vertica](https://www.vertica.com/), [Tableau](http://www.tableau.com/), [LightsOn Network](https://www.cerner.com/solutions/lights-on-network), and the Cerner Olympus portal for reporting
timer data.  This framework has been consolidated into a single application which can be used for development or
troubleshooting of timers.  Currently the application supports [Splunk](http://www.splunk.com/) (for [Millennium+](http://www.cerner.com/newsroom.aspx?id=17179872330)), [Millennium](http://www.cerner.com/solutions/hospitals_and_health_systems/) application-produced
checkpoint CSV files, or produce timers real-time as a Millennium application sends checkpoint data to it.  After timers
have been produced, the user can inspect the composition of the timer by exposing checkpoints, incomplete timers, and
chronological representation of a timer and other timers which may have affected it in a Gantt chart.

This application will improve the accuracy of timer definitions developed, improve speed of development on engineering,
and empower engineers to develop and troubleshoot their timers without depending on the entire RTMS framework.

### First Place
Wolfe Packe (Bryan Baugher, Micah Whitacre, Christian Duranleau, Michael Barker, Alex Hostetler)

> Kafkaesque is a Web UI to help manage and operate [Apache Kafka](http://kafka.apache.org/). It provides insightful statistics about topics,
partitions and brokers and is able to balance and re-assign partitions to different brokers.

{{< figure src="shipit-awards.png" alt="Awards" >}}

ShipIt Day has become an incredibly valuable experience for participants, giving them a chance to not only focus on
projects that they wouldn’t normally have time for, but allowing them to meet people from other teams (in different
organizations) and learn from those they normally wouldn’t work with. To quote a participant, Daniel Lloyd:

> ShipIt day was a blast.  It was fun, it was serious, it was fun again… We got to make some new friends in IP and
participate in an event that spanned both teams and organizations.  That in itself is enough to recommend ShipIt day to
anyone.  It provides so much perspective into how the other teams operate and the cool things other teams and
organizations are doing.

Thanks to all that participated, and we’ll see you again in the summer!
