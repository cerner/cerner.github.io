---
title: "ShipIt from Anywhere: Our Lessons on Going Virtual"
authors: ["Whitney Roark"]
date: 2020-12-03
tags: [culture, engineering, hackathon, shipit]
thumbnail: "shipit-shirts.png"
---

ShipIt Days are Cerner Engineering's 24-hour hackathons where associates are empowered to brainstorm, plan, build, and present a project of their choice. This quarterly event is something associates enjoy by taking a break from their normal routine and focusing on a problem that they seek to achieve within a short time period (one day). The enjoyment of these projects often come from just working on something different, working with other colleagues, and just applying their passions to an area they have been desiring to solve. With the pandemic this year, we had to rethink how can we continue to achieve this same associate enjoyment and fulfillment while only being in a virtual format. 

Moving this event to a virtual format has created a lot of challenges! During a typical in-person ShipIt event, all participating teams would gather in one room to collaborate on their projects. Participating teams would be provided with awesome swag, a fully loaded snack bar and an evening movie to give a fun atmosphere for those who enjoyed to be attending in the evening (check out our recap video for what it was like on our campus). Another very anticipated part of the event is the live demo portion where each participating team shares what they created in the last 24 hours. At the end of the presentations, the judges and people-choice winners get announced in our assembly, where each team then gets to pick from a line-up of prizes, with the 1st place team receiving the traveling trophy: the golden keyboard. It was a fun moment to wrap up the event and capture photos of all the teams. 

Our goal for the virtual format was to keep the core aspects of the event the same. ShipIt participants enjoy collecting our signature t-shirts quarter-over-quarter, building a variety of colors into their wardrobes. We knew we had to keep this tradition alive! To get our associates excited for the event, we mail a swag box directly to each participant's home. During the actual event, we utilize [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-365/microsoft-teams/group-chat-software) to communicate and collaborate with our participating teams. To keep our teams engaged with each other during the event we host several virtual activities throughout the day and night. Our most popular activities have been [Trello's GIF battles](https://trello.com/b/Z07yg0BA/gif-battle-game), virtual bingo and a [JackBox](https://www.jackboxgames.com/) game hour! The live demo portion is streamed using Microsoft Teams as well and is available for all associates within the company to tune in.

{{< figure src="shipit-swag.png" >}}

While moving this event to a virtual format has been challenging, it has also created some new opportunities and growth! When ShipIt Days were hosted in person, participation was limited to local associates. Now that the event is virtual, participation is open to all associates in any location. Associates from different parts of the world can now team up and compete together. We have been able to bring associates together from the US, Brasov, London and India to all compete in the same competition! 

Even in this new virtual world our associates continue to turn their creative ideas into reality during these hackathon competitions. Continue reading to learn about some of the new things our associates have developed during our virtual ShipIt days and how we are filling the void of the golden keyboard trophy! 

{{< figure src="shipit-bingo-trophy.png" caption="One of our favorite activities to do with our virtual ShipIt participants is virtual bingo! The traveling golden keyboard trophy is safely locked up on campus. Our virtual winners receive a custom 3D printed version of the trophy that is mailed directly to them. These trophies are made by one of our own associates, Kyle Harper!">}}

## ShipIt XIX Winners – SquirrelOps  

Naresh Rayapati, Scott Buchholz, Matt Nelson 

### Overview

The SquirrelOps team wanted to increase the speed that we would go from commit to deployment in our development environments, as well as provide a more holistic view of the state of the system across our various tools, which included [GitHub](https://github.com/), [Spinnaker](https://spinnaker.io/), [New Relic](https://newrelic.com/), [Artifactory](https://jfrog.com/artifactory/), and [Jenkins](https://www.jenkins.io/).  

### The Problem

Previously we had some automation however there were gaps and missing signals that kept the process from being as seamless or as face up as we'd like. While a commit to GitHub would trigger a Jenkins build and publish the new artifacts to Artifactory, human intervention was then required to in turn get these artifacts deployed where they could be consumed. By integrating these existing automation tools we were able to use the various APIs to not only go from commit to deployment, but to push additional facts to New Relic and GitHub allowing for improved observability into the system.  

### The Solution

The existing GitHub webhook and Jenkins CI flow was enhanced to invoke the Spinnaker API to kick off the appropriate pipelines to deploy the artifacts in the Kubernetes cluster.  

The Spinnaker pipelines were in turn enhanced to pull the docker tag information Artifactory and to then publish that information to both GitHub and New Relic using their deployment APIs. This allows the state of the system to be reflected in those tools in a way that provides additional context to the developer.

{{< figure src="shipit-xix.png" >}}

Upon completion of the deployment, the pipeline would also then report the state on the deployment to GitHub, allowing quick visibility of the deployment history and status of a given change for that specific commit.  

{{< figure src="shipit-xix-2.png" >}}

## ShipIt XX Winners – Team RKJ 

Ryan Lokugamage, Kyle Berkley, Juzer Zarif 

### The Problem

As working at Cerner became 100% virtual, our ShipIt team looked for ways to fast-track parts of the software engineering process. Every developer (and every associate) knows keeping up with their email can be tedious, often relentless. Because GitHub sends an email for all activity on every pull request an engineer is involved in, our team realized we could organize this information in a user interface that was easier to access and more concise. Thus, we decided to use Google Chrome's API to develop a browser extension with a simple, meaningful UI that organizes all activity related to a developer's active pull requests. We decided we would call the extension _Git Selfish_.

### The Solution

We utilized the React library to quickly construct a pop-over style user interface. We also leveraged [GitHub's GraphQL API](https://docs.github.com/en/free-pro-team@latest/graphql) to select specific pieces of information that felt most relevant to a developer in order to keep them up-to-date on a pull request's state. Using GitHub's GraphQL API also allows us to create a subscription-style listener for updates to each active pull request that a user might be interested in. 

{{< figure src="shipit-xx.png" width="500px" >}}

The team was particularly excited about this project because of all the possibilities it presented. As with all ShipIt projects, there is so much room for creativity and inspiration that it is difficult to know where to start, as well as where to end - after all, we only have 24 hours!

## ShipIt XXI Winners – Super SMASH. Bros  

David White, Evan Rauner, Garrett Atwell, Max Alvarez, Rahul Joshi 

### Overview 

On-call can be a stressful time for any engineer, no matter their experience or what technology they are supporting. A typical shift can largely be consumed by alerts that take manual, repetitive actions to resolve. We wanted to enhance our support automation tooling to apply good mitigations when it proactively detects issues with the system and avoid engineers from having to be initially engaged to apply these actions. We found this automation could greatly reduce the number of hours a week that is spent on first engaging on alerts, which can reduce on-call fatigue and continue on our path in building a self-healing architecture that requires minimum human engagement. 
 
### The Problem

Services on existing infrastructure can be impacted from several different causes. This can be from a lack of system resources (memory, swap space) or just network segmentations with other service dependencies. Often, there are [good mitigations](https://youtu.be/W5SgJzl3eiE?t=1138) that can be first applied to these services the point of alerting. We wanted to make sure these mitigations are automatically applied before any human operators are involved.

### The Solution  

We tackled the problem by starting with the code base we inherited. The existing code supported monitoring and identifying issues with other system dependencies. This evolved into becoming our on-call tool which could then take actions. At a high level the automation would have to take alerts (in this case from [Zabbix](https://www.zabbix.com/)), apply good mitigations to resolve (ex. restarting a process), and then inspect that it is resolved (ex. run commands to verify system state). Given this view, a basic workflow is represented below:   

{{< figure src="shipit-xxi.png" >}}

The project is comprised of a client-side library implemented in Go and a Redis database. The client performs three operations: poll alerts from the Zabbix API at regular intervals, run a workflow for each alert from the poll, and reports the automation outcome. The workflow for an alert first checks if the dependencies of the services running on the node are healthy, documents services failing based on their health checks, and attempts good mitigations to resolve the service issue. If they return healthy, the workflow captures the results and terminates. The Redis database is used to track the state of the automation across the different parts of infrastructure. 

## Conclusion 

Our transformation of ShipIt in becoming a virtual offering required rethinking some of our traditions. As we made this transition, we found this event continued to live on through teams participating and even had an increased in audience participation to see the presentations. We are excited to see how our ShipIt event continues to grow as we adapt in this ever changing world. 