---
layout: post
title: "Cerner's Open Source Contributions for Interoperability Developers"
author: Kevin Shekleton
date: 2018-06-20
tags: [engineering, open source, interoperability]
---

At Cerner, developing open platforms that support interoperability standards like SMART and FHIR is integral to our mission of transforming health care. In addition to implementing these standards into our platforms, we also participate in organizations like [HL7](http://www.hl7.org/) and the [Argonaut Project](http://argonautwiki.hl7.org/index.php?title=Main_Page) to help shape and develop these standards as well as attending and speaking at conferences on interoperability, like [FHIR DevDays this week in Boston, MA](https://www.fhirdevdays.com/boston/).

In addition to all of this work, we're continually developing open source projects and work for the benefit of all interoperability developers. As we speak on and support interoperability this week in Boston for FHIR DevDays, we thought it would be great to highlight our current open source interoperability work over the past couple of years.

### SMART on FHIR Tutorial

Source: https://github.com/cerner/smart-on-fhir-tutorial

A couple of years ago, we developed a [tutorial](https://engineering.cerner.com/smart-on-fhir-tutorial/) that walks a developer through the process of creating their very first [SMART on FHIR application](https://smarthealthit.org/). With this hands-on tutorial, a developer will write and deploy their first SMART on FHIR application, running it against Cerner's [_code_](https://code.cerner.com/) Console and our [FHIR Sandbox](https://fhir.cerner.com/). And, since SMART applications are interoperable with other vendors, the tutorial also walks the developer through running that same app against other sandboxes like the one provided by the [SMART Health IT project](https://launch.smarthealthit.org/). To date, over 700 developers have completed this tutorial.

### SMART on FHIR Apps in Embedded Browsers

Source: https://github.com/cerner/fhir-client-cerner-additions

Over the years, we've contributed several changes to the popular open source JavaScript library ([fhir-client.js](https://github.com/smart-on-fhir/client-js), maintained by the SMART Health IT organization) used by many SMART app developers for launching and interacting with the FHIR API from their web-based SMART application. Running these types of applications within an embedded IE browser in a Windows application (like Cerner's PowerChart EHR) requires a bit of extra work to ensure SMART apps running concurrently don't exhibit critical patient safety bugs. We released an [open source library](https://github.com/cerner/fhir-client-cerner-additions), used in conjunction with fhir-client.js, to prevent these bugs and is in use by SMART app developers running their apps not only within Cerner EHR environments but also other EHR vendors.

### ASCVD Risk Calculator SMART Application

Source: https://github.com/cerner/ascvd-risk-calculator

Cerner partnered with [Duke University Health System](https://www.dukehealth.org/) to develop the open source [ASCVD Risk Calculator SMART application](https://apps.smarthealthit.org/app/ascvd-risk-calculator). We developed this app as both Cerner and Duke saw a need to develop a more clinically relevant cardiac risk calculator SMART app as compared to the alternative apps at the time. In addition to this app being freely available to all Cerner clients, all of our work on this app is open source, allowing anyone to run and modify the application.

### CDS Hooks

Source: https://github.com/cds-hooks/sandbox

[CDS Hooks](https://cds-hooks.org) is an emerging standard for interoperable clinicial decision support. Similar to the aforementioned SMART on FHIR tutorial, Cerner wrote an [open source, hands-on tutorial](https://github.com/cerner/cds-services-tutorial) that walks a developer through writing their first CDS Service.

Cerner is also the primary developer and maintainer of the [CDS Hooks Sandbox](https://sandbox.cds-hooks.org/), an open source Sandbox used by the CDS Hooks community. The CDS Hooks Sandbox has been proven to be incredibly valuable and allows developers to test and demonstrate their CDS Services against any FHIR server of their choosing.

### Bunsen: FHIR and Big Data

Source: https://github.com/cerner/bunsen

We have many years of experience working with big data. To help big data developers, we open sourced Bunsen, a project that makes it easy to explore, transform, and analyze FHIR data with Apache Spark. In addition, we recently released a [tutorial for getting started with Bunsen](https://github.com/cerner/bunsen-tutorial). You can [read more about Bunsen on our blog post here](https://engineering.cerner.com/blog/announcing-bunsen-fhir-data-with-apache-spark/).
