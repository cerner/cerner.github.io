---
title: "Engineers on the Road for SMART and FHIR (CHC 2016)"
authors: ["Dennis Patterson", "Jenni Syed"]
date: 2017-03-24
tags: [SMART, FHIR, engineering]
thumbnail: "smart-and-fhir-01.jpg"
---

Over the past few years, Cerner has been developing a standards-based platform on top of our Cerner Millennium® EHR.  Rather than roll our own API, we’ve been using the [HL7® FHIR® standard](http://hl7.org/fhir/overview-dev.html).  For app integration, we’ve been using the [SMART® on FHIR specification](http://docs.smarthealthit.org/).  If you’re not immediately familiar with those acronyms, you’re definitely not alone.

As we were developing the services, we were also fielding questions from 3rd party developers, answering a lot of questions internally, and trying to keep up with the specifications themselves. We knew that we would need to help provide education around our ecosystem, our implementation of the FHIR and SMART standards to developers since the standards are new and evolving.

This need will become much more pressing because [Meaningful Use 3](https://www.healthit.gov/providers-professionals/how-attain-meaningful-use) will trigger deployment of our implementations out to most of our Millennium EHRs.  [Meaningful Use](https://www.cdc.gov/ehrmeaningfuluse/introduction.html) introduces requirements from the Centers for Medicare and Medicaid (CMS) to modernize the US healthcare infrastructure.  This is nothing new, but we’ve been hard at work to support stage 3, which includes the requirement for patients to access their data via an API.  In order to attest, most of our clients will then require our implementation of the FHIR API.

This past November offered up two exciting opportunities to provide hands-on instruction and support, which we’ll cover in separate posts.  In this first post, we want to highlight the work we did at our annual [Cerner Health Conference](https://blogs.cerner.com/blog/CHC16-Summary-UK/).  We decided that this year’s event would be a great opportunity to offer a small Code Learning Lab - providing education for some of the APIs that Cerner has available.

The Code Learning Lab was run from November 14th - 17th in Kansas City with our annual CHC conference. The goal: give developers a hands-on training session with the different APIs that are part of the Cerner Open Developer Experience (_code_). One of the tracks covered SMART and FHIR specifically, while another went over some of the APIs available with our HealtheIntent and HealtheLife platforms. 

{{< figure src="smart-and-fhir-01.jpg" >}}

We saw participation from many of our clients and partners, from both the US and Canada. Over the four days, the lab was in the format of an overview or "lecture" followed by a longer hands-on lab to put what participants were learning to use. During the labs, our engineers would walk around to check on how everyone was doing, answer questions, and help troubleshoot.

{{< figure src="smart-and-fhir-02.jpg" >}}

We received a lot of comments and excitement from everyone participating around the fact that our engineering team itself was involved in the learning lab. It was also very exciting for the engineering team to watch everyone try out our newer developer tools, read our documentation, and then put it to practice. Not only were the participants able to actually see the data coming back, but there were a lot of conversations that occurred that will help us improve the class (and our tooling) in the future to make the event better. In the end, it was a great experience for everyone involved!

If you’re interested, you can check out some of the presentations and labs that were created for the learning lab here: https://github.com/cerner/ignite-learning-lab and our SMART tutorial: http://engineering.cerner.com/smart-on-fhir-tutorial/#prerequisites

