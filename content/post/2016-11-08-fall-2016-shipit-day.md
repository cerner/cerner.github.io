---
title: Fall 2016 ShipIt Day
authors: []
author:  Melanie Carpenter
date: 2016-11-08
tags: [culture, engineering, hackathon, shipit]
---

Another ShipIt Day was held on September 8th-9th at the Realization Campus at Cerner. ShipIt is a
24-hour hackathon with the goal of building something awesome, usable, and value-adding within a
single day. This fall marked our sixth ShipIt, which has has grown significantly since our first
event.

{% img center /assets/2016-11-08-fall-2016-shipit-day/shipit-sign.jpg Announcement %}

The event kicked off in the morning at the auditorium of our Realization campus. At this point,
teams were already formed, instructions were given, and shirts were handed out. This ShipIt day came
with cool new t-shirts for all participants featuring the ShipIt squirrel ([inspired by GitHub](https://www.quora.com/GitHub-What-is-the-significance-of-the-Ship-It-squirrel))!

{% img center /assets/2016-11-08-fall-2016-shipit-day/shipit-squirrel-shirt.jpg ShipIt shirt %}

Teams broke out to their work spaces and got to work on their projects. One team, **LearnStack**,
decided to focus their project on associate development. The judges greatly appreciated their
approach to this very real problem, and decided to award them the third place prize.
 
**LearnStack** - Jake LaCombe, Daniel Stucky, Sujay Sudheendra
 
> Developers can get to a struggling point when they try to increase their experience level. Sure,
getting started with any language can be very easy to do. Rails for example has their 
[impressive tutorial from Michael Hartl](https://www.railstutorial.org/) for getting started 
with the framework. However, what happens when you
get done with those beginning steps? What does it take to go from a beginner to an intermediate
Rails developer, and then again from Intermediate to Advanced?

> The answer here is LearnStack. LearnStack takes a list of resources that are recommended by other
developers, and rated appropriately based on the experience level of the material. Developers can
easily share resources related to beginner, intermediate, and advanced knowledge of a particular
language, process, framework, or whatever it may be. No need to keep doing endless searches online
to figure out how to get to the next level! Let LearnStack point you to the resources you need!”
 
Another team decided to tackle the time it takes to provision a virtual machine. This team called
themselves, "All your base are belong to us," and they were awarded second place.
 
**All your base are belong to us** - Chris Soukup, Alex Harder, Ben Hemphill
 
> The current situation for OS image creation is that it is done infrequently, in an ad-hoc manner,
with little consistency among the various hypervisors. This means that we take the base image and
then use [Chef](https://www.chef.io/) to upgrade the image to the desired state. This adds significant 
amounts of time to the process of provisioning a virtual machine.

> Our project was to use [Packer](https://www.packer.io/) to create a generic image with all of the 
universal settings that we set with our base OS Chef recipe. This image can then be distributed to all 
the hypervisors and made available to consumers. Since the image would be generated regularly, the 
provisioning time could be significantly decreased by not having to immediately upgrade the system. Additionally, 
since the universal settings are already applied, we save considerable amounts of time on the OS preparation
as well. We took provisioning time for a RedHat 7.2 [OpenStack](https://www.openstack.org/) VM from 12 minutes, 
50 seconds to 4 minutes, 1 second, a 320% decrease in time!

> Future enhancements will allow us to automatically generate these images, distribute them, and make
them available to consumers. This will allow a consuming team to naturally stay current on OS
patches at provisioning time, decrease the human effort in creating these OS images, and provide a
consistent experience for teams across Vagrant, VMWare, OpenStack, EC2, Docker, etc.”

For the first time we had a unanimous winner for both the judges and the participant winners. The
**206 Partial Content** team not only won two giant tubs of cheese balls, but also the all important
[Golden Keyboard]({% post_url 2014-07-01-shipit-hackathon-mplus %}) and bragging rights 
until the next ShipIt Day. **206 Partial Content** decided to solve a problem to "enable solution designers, 
engineers, and grandparents to easily create, stage, and process data for testing scenarios required for 
verification without being dependent on upstream processing or rules."

**206 Partial Content** - Madhur Sikri, Ian Kottman, Venkatesh Sridharan, Andy Nelson, Brian van de
Boogard

> Our project was primarily driven by two rock star engineers on our team, Ian Kottman and Brian van
de Boogaard. We coined our project Sinecure, which means a position requiring little or no work but
giving the holder status or financial benefit. The goal of the project was to find a solution to
creating test data more easily and efficiently for anyone on our team to consume.”

Thanks to all who participated and congratulations to our winners. Until next time, at ShipIt VII in
December!

{% img center /assets/2016-11-08-fall-2016-shipit-day/shipit-winners.jpg Winners %}
