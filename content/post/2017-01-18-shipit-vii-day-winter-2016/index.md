---
title: "ShipIt VII Day: Winter 2016"
authors: ["Isabella Kuzava and Carl Chesser"]
date: 2017-01-18
tags: [culture, engineering, hackathon, shipit]
thumbnail: "shipit-01.jpg"
---

Cerner’s 7th ShipIt Day took place on December 8th and 9th. ShipIt is a 24-hour hackathon with the
goal of building something awesome, usable, and value-adding within a single day.  The event was
hosted at our DevCenter in the Realization Campus, a large open space that hosts our DevAcademy (to
learn more about our DevAcademy, check out this
[earlier post](http://engineering.cerner.com/2013/08/devacademy/)).  We had 18 teams made up of
associates from different Cerner organizations. The DevCenter was stocked with all kinds of snacks,
which of course included a traditional drink: Monster Energy. Participants worked hard all day long
and when dinner came around they were ready to dig in. Good thing we ordered 8 twenty-six inch
pizzas and 40 breadsticks from a local Kansas City favorite, [Pizza 51](http://www.pizza51.com/).
Look how big these pizzas were!

{{< figure src="shipit-01.jpg" >}}
{{< figure src="shipit-03.jpg" >}}

It was predicted we hit a record in Kansas City for the most pizza in an elevator at this time, but
we were not able to get an official count!

{{< figure src="shipit-04.png" >}}

When getting pizzas of this size, there was a significant amount to fuel the innovation that was
happening. To break it down:

A = πr<sup>2</sup> = π x 132 ≈ 530.93 square inches = 3.68 square feet x 8 = 29.44 square feet of pizza. Which
is larger than a twin bed size of solid pizza, and slightly smaller than a queen bed. A perfect
amount for a ShipIt event! Teams took a break from their work throughout the evening by playing
Nintendo and cheering on the [Chiefs](http://www.chiefs.com/)!

{{< figure src="shipit-00.jpg" >}}
{{< figure src="shipit-07.jpg" >}}

There were some impressive projects that came out of ShipIt Day VII. _Team GLADoS_, made up of Kyle
Harper, Sarah Harper, Snehit Gajjar, and Andy Quangvan took first place, and the coveted Golden
Keyboard, with their impressive idea.

> This ShipIt, we created a new [Alexa skill](https://developer.amazon.com/alexa) called Scribe.
With our new skill we integrated the
[Amazon Echo and Echo Dot](https://www.amazon.com/All-New-Echo-Dot-2nd-Generation/dp/B01DFKC2SO/ref=cp_aucc_ods)
smart speakers with [Cerner's FHIR implementation](https://code.cerner.com/). This integration allows
a patient or care provider to access clinical data by simply speaking to the Echo.

Judge Sean Griffin was impressed. "Really cool, awesome idea. Great innovation! The applicability
towards data entry could definitely be useful."

{{< figure src="shipit-08.jpg" caption="Team GLADos with the Golden Keyboard" >}}

Second place went to _Team Trogdor_ (Kyle Lipke, Derek Dobler, Nikki Justice, Mike Harrison,
and Nimesh Subramanain).

> Troubleshooting errors or misconfigurations in Millennium OAuth can be time consuming. Missing
information or misconfiguration can lead to hours of checking various sources of information. This
web page tool allows us to perform a quick and accurate diagnostic check for what pieces are
available and not available. Built with Ruby on [Sinatra framework](http://www.sinatrarb.com/).
Made to allow for easy additions to various checks that ETS (Emerging Technology Services group)
needs to do.

Judge Jim Dwyer noted, "This is a great tool to help drive down operational costs and reduce TCO."

{{< figure src="shipit-05.jpg" caption="Team Trogdor" >}}

Third place winners, _Team 402 Cheeseballs Required_ (Andy Nelson, Venkatesh Sridharan, Ian Kottman,
Nate Schile, and Anthony Ross) created an application for tracking running mileage for the
[Healthe Fitness Center](https://www.youtube.com/watch?v=w18fgEcMi7w).

> Our goal was to make the process of submitting running milestones for the Cerner Running Club
easier. The current process involved writing down how far you ran in a binder, and then one of the
gym staff checking that binder occasionally to see when you accomplished a milestone so they could
send a prize. We decided to make a web application that would integrate with Strava that would
simplify tracking how far you've run. [Strava](https://www.strava.com/) is a platform that
aggregates data from multiple fitness apps, such as [Fitbit](https://www.fitbit.com/) and
[Garmin](https://buy.garmin.com/en-US/US/cIntoSports-cRunning-p1.html).
We used the [Strava API](https://strava.github.io/api/) to pull a person's running data so
we could total up their mileage, regardless of what fitness tracker they used. In order to
integrate with Strava's public API we had to have an externally facing application. We decided to
use an [Amazon EC2](https://aws.amazon.com/ec2/) instance to do this, since it was easy and cheap.
We used [Rails](http://rubyonrails.org/) to create our web app since that was the web framework
we had the most experience in. First, we would ask a person to connect to their Strava account,
and then we pulled their running data and totaled up their mileage. If a person had reached a
milestone they could press a button to send an email to the gym staff that included their
running log, their total mileage, and what milestones they had achieved.

{{< figure src="shipit-06.jpg" caption="Team 402 Cheeseballs Required" >}}

By Friday at 10 a.m. the participants were ready to present (for the most part). Cerner associates
from different campuses watched the event via livestream and voted for People’s choice. Those
results are as followed...

**Favorite team name**: _I Shipped My Pants_ - Brandon Inman and Steven Goldberg

> Improvements made to the existing
[Vizceral-based implementation](http://techblog.netflix.com/2016/08/vizceral-open-source.html)
of HealtheIntent Intuition
Engineering.  Improvements made by the team included features to make it easier to switch between
streaming and batch processing, more timely updates of data, and several cosmetic features to
improve user experience and differentiate the tool from other Vizceral apps.  Voice activation was
added as a "fun" feature.

**Favorite Presentation**: _Guys on FHIR_ - Bhaumik Aniruddha, Bhagat Parthiv, Vetri Selvi Vairamutha,
Neil Pfeiffer, Sai Praveen Gampa

> Our ShipIt project was a NICU SMART App, intended for the NICU unit. The app will be used to get a
live video of the baby inside an incubator alongside the vitals of the baby. This will prevent
anyone from disturbing the sleeping pattern of the newborn. The live feedback can also be viewed
by the parents which will ease the mental tension. The future scope of this project is to hook up
with an app, which can read the facial expression of the baby.

**Best Project**: _RSA (Readmission Security Admission)_ - Kristopher Williams, Karthik Nimmagadda, Sai
Inampudi

> Our project was to create an intuitive dashboard that lets the user visualize the network traffic
for readmission solution's services for a given time period (hour/day/week/month currently). This
dashboard will allow the user to easily and quickly identify abnormal behavior (e.g. service goes
down, or service experiencing a lot of errors) and is designed in such a way as to return results
extremely fast for longer time spans, compared to ad-hoc splunk queries.

{{< figure src="shipit-02.jpg" caption="People’s Choice Winners" >}}

ShipIt Day continues to be a great way for Cerner associates to work on projects they don’t normally
have time for, meet people in different organizations and learn something new. Participant
Kristopher Williams said:

> My favorite part of ShipIt Day was being able to work on something entirely different, and in my
case, with a different group of people. Just a fresh change of pace.

Thank you to all our participants and a special thanks to our judges Jenni Syed
([@JenniSyed](https://twitter.com/JenniSyed)), Yegor Hanov, Sean Griffin
([@trenchguinea](https://twitter.com/trenchguinea)), and Jim Dwyer
([@episodicdata](https://twitter.com/episodicdata)).

Check out some additional highlights of our event in this video:

{{< youtube iqTp0dmLgUk >}}

If you are interested in reading more about previous ShipIt Day events, see these earlier posts:

* [Fall 2016 ShipIt Day](http://engineering.cerner.com/blog/fall-2016-shipit-day/)
* [Spring 2016 ShipIt Day](http://engineering.cerner.com/blog/spring-2016-shipit-day/)
* [ShipIt - 24-hour hackathon for Millennium+ Platform Dev](http://engineering.cerner.com/blog/shipit-hackathon-mplus/)
