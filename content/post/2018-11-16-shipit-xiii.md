---
title: "ShipIt XIII"
authors: []
author:  DevCulture Team
date: 2018-11-16
tags: [culture, engineering, hackathon, shipit]
---

## What does it take to be awarded the ShipIt Day Golden Keyboard?

<!-- TODO: Center -->
{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-1.jpg" width="300" >}}

ShipIt Day XIII concluded last week after an intense 24-hours of brainstorming, building, and presenting. Various projects were completed by Cerner associates across twelve diverse organizations. ShipIt Day XIII's projects were some of the most technically advanced this competition has ever seen.

Awarding the Golden Keyboard is no easy job for our judges. Back in 2014, the trophy was created to provide the winning team with a memento that was unique and grew with the competition. Every competition the new winning team adds a trinket to the golden keyboard, so their ShipIt Day victory carries on forever. If you are wondering what it takes to bring home the golden keyboard, look no further than ShipIt Day XIII's first place team, Dreamy Cloudy People.

## Learn from the Winners!

Dreamy Cloudy People is a team of five individuals: Brett Heroux, Murtuza Syed, Niranjan Kumar, Abhijit Rao, and Swati Kode. The team spent the 24-hour hackathon on a real time push notification mechanism for patient chart web application views using the WebSocket API. Traditionally, data retrieval had been on demand, using AJAX and XMLHttpRequest. Previously, clinicians had to refresh their browser to receive updates to clinical data when reviewing a patient's chart.

With this project, the WebSocket API was leveraged to allow a server to push updates to clients as events were triggered. The web application then updated its views without needing a user to manually refresh the page. They stood up a Java service for web clients to create WebSocket connections and send/receive data. It was also used to broadcast events involving patient data, such as new lab results or orders. The client application uses an existing JavaScript framework, part of Cerner _Millennium_ MPages, to create socket connections and update the state of the application in real time.

{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-2.jpg" >}}

During their presentation, Dreamy Cloudy People successfully pitched their improvement to the judges. After the presentation, one of our judges mentioned:

> Improving communication is always impactful in a clinical setting and improving to near real time is a great enhancement!

There are several criteria that teams must showcase to prove their project is worthy of the Golden Keyboard:

1. The project is well designed and captured everything that needed to be included.
2. The project is technically difficult and tested the team's technical knowledge, often leading to learning a new skill.
3. The presentation shares the value potential and impact that the improvement/creation has to Cerner, associates, or our stakeholders.

Last but not least, a winning ShipIt Day team always makes sure to enjoy the event. One Dreamy Cloudy People team member, Niranjan Kumar, stated his favorite part of ShipIt Day was having "the opportunity to focus on projects not directly related to my primary role" and the "collaboration with peers." Congrats to our first-place team!

## Additional ShipIt XIII Winners

### 2nd Place: No amount of Pepto can stop this ingestion!

**Team members**: Kevin Dunn, Scott Levander, Jeff Koehler, Dave Morgan, Rushabh Shah

{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-6.jpg" >}}

<div align="center">
   {% img center /assets/2018-11-16-shipit-xiii/shipit-xiii-6.jpg 600px %}
</div>

This team designed a MS SQL Server database to track files received from clients into _[HealtheIntent](https://www.cerner.com/solutions/population-health-management)_ and determine the latency since the last file arrived, as well as file size. They also created configuration tables to define expected file latency, acceptable thresholds before triggering an alert, and tables to track the people who want to receive an alert.  Feeding off of that data, the team also developed an email alerting service (in C#), [Tableau visualization](https://www.tableau.com/) dashboards for internal project investigations, and a Web UI to manage configurations (using PHP/SQL Server).

### 3rd Place: Overnight Shippers!

**Team Members**: Varun Kumar Chepuri, Tejaswi Gade, Ed Jalili, Neil Pathare

{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-5.jpg" >}}

Currently, there are issues that are being reported on [Splunk](https://www.splunk.com/) and there is a lot of manual effort to log [JIRAs](https://www.atlassian.com/software/jira) for them and then, developers need to track those issues while making any code changes. The JIRA backlog is building up and there is very little to no effort in cleaning up that backlog or working on fixing those issues. Issues logged in Splunk are not being fixed and these errors or defects are not caught early in the lifecycle. These errors or defects are shipped out to clients impacting their workflow. Therefore, Overnight Shippers! created a service bot which uses Splunk to find errors or exceptions and creates an issue in GitHub. This service bot creates a comment on a Pull Request if a Splunk issue exists for the files that are changed. Other capabilities include the capability to configure the bot per Github repository, log [GitHub issues](https://help.github.com/articles/about-issues/) periodically, and support various project types.

### People Choice Awards

{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-4.jpg" caption="Best Project: Centurions">}}
{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-3.jpg" caption="Best Presentation: Team Rhinos">}}
{{< figure src="/images/2018-11-16-shipit-xiii/shipit-xiii-5.jpg" caption="Best Team Name: Overnight Shippers!">}}

Time to start preparing for ShipIt Day 2019! Thank you to our talented judges Chuck Schneider, Justin Morrison, and Jim Dwyer for serving as our judges.