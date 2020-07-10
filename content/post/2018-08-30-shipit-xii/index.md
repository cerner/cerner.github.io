---
title: "ShipIt XII"
authors: []
author:  Caitie Oder
date: 2018-08-30
tags: [culture, engineering, hackathon, shipit]
thumbnail: "shipitxii-logo.png"
---

{{< figure src="shipitxii-logo.png" width="400" >}}

This month we held our quarterly hackathon event- called ShipIt Day. We would like to thank all the participants for making ShipIt Day XII a huge success. With 75 participants, we had associates representing 13 different organizations across Cerner. These associates were given 24-hours to meet the requirements of this hackathon which included making something that was innovative, usable, and value-adding. As the clock ticked down, our associates worked in their teams to complete a project while taking some time to enjoy the fun activities happening throughout ShipIt day.

{{< figure src="shipitxii-1.jpg" >}}

It is an unwritten rule that the balance between fun and project time during ShipIt days should remain even. Associates are encouraged to enjoy the collaborative spaces of Cerner's Innovations campus and participate in various activities such as ping-pong, eating snacks, playing games, and building relationships with other Cerner associates. Participants were given vouchers to use in the Innovations Café for breakfast and lunch. They were also served a fully-catered taco bar to stay energized for dinner.

This year, [WarGames](https://www.imdb.com/title/tt0086567/) and [ColecoVision](https://en.wikipedia.org/wiki/ColecoVision) gameplay were brought in for participants to enjoy throughout the evening. As said best by Cerner associate, Carl Chesser ([@che55er](https://twitter.com/che55er)):

> Software creation requires additional breaks… ShipIt at Cerner is no exception of this software craftmanship approach.

The morning crept up on the teams quickly, and they had to begin preparing for their 4-minute presentation in the Assembly at Innovations campus. The goal of the team presentations is to explain the project, how it was implemented, and show a brief demo to the judges and audience. All the teams delivered competitive pitches, which made judging very difficult.

{{< figure src="shipitxii-2.jpg" >}}

Huge thanks to Micah Whitacre, Nick Smith, Jon Miller, and Jared Moore for serving as our rockstar judges!

## Overall Winners

The judges gathered together after the completion of the presentations to decide the top three performing teams. Congratulations to the following teams on your outstanding performance!

### First Place: Let's Take Suggestions

Team Members: Scott Grissom, Alex Harder, and Matt Nelson

{{< figure src="shipitxii-8.jpg" >}}

This team was awarded the Golden Keyboard for their first-place achievement. They will defend the traveling trophy for the upcoming months and add a symbolic trinket to the collection for their team to be remembered in ShipIt history.

The focus of this project was to provide a mechanism for customized cloud-based ACL testing. Utilizing serverless functions through the [OpenFaaS framework](https://www.openfaas.com/), the team enabled rapid development and deployment of serverless functions which test a specific type of network access, e.g. using [cURL](https://en.wikipedia.org/wiki/CURL) to access a ReST endpoint or a JDBC client to access a database instance. Deploying these functions to the same cloud instance which hosts services provides a more accurate testing of network dependencies from the perspective of a service as opposed to testing from a developer machine.

### Second Place: &#35;crowdercrowd
Team Members: Ian Kottman, Heather Boveri, Robert Ryterski, and David Crowder

{{< figure src="shipitxii-6.jpg" >}}

&#35;crowdercrowd created a dashboard showing cluster utilization of applications across both on-premise and public cloud clusters. The metrics show how much CPU and memory an application is using versus how much it is requesting, along with an estimated yearly cost to run the application. This dashboard will be used to identify what applications can be scaled down to better fit their actual resource needs.

### Third Place: Bravo Avocado
Team Members: Jan Monterrubio, Maximilian Schroeder, and Jacob Zimmermann

{{< figure src="shipitxii-7.jpg" >}}

Bravo Avocado created a [Maven plugin](https://maven.apache.org/index.html) that starts a [Docker container](https://www.docker.com/) of a ReST service. It also allows the integration tests to dynamically connect to the correct URL and port of the container. This lets users run integration tests directly against the working code as part of the Maven lifecycle. Before the team wrote the plugin, they had to manually stand up the service and update the test configuration to validate any changes. By tying these eight steps to an existing command, users can streamline development for ReST services.

### People's Choice
Aside from our talented official judges, many associates join in on the ShipIt Day fun to act as peer judges in the People's Choice category. The large audience during the ShipIt presentations was asked to get involved and vote for their favorite teams in certain categories.

{{< figure src="shipitxii-4.jpg" caption="Favorite Team Name: Chef BoyarDeployments could be better (Steven Goldberg, Ryan Neff)">}}
{{< figure src="shipitxii-5.jpg" caption="Favorite Project: Audio Bot (Mitali Paygude, Kunal Suryavanshi, Vinay Datta Pinnaka)">}}
{{< figure src="shipitxii-6.jpg" caption="Best Presentation: Team Rhinos (Venkata Adusumilli, Veda Bhaskar Bhamidipati, Naga Prashanth Chanda, Sunand Kumar Matam, Prashanth Gajula)">}}
