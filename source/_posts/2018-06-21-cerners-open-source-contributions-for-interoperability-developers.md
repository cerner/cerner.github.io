---
layout: post
title: "Cerner's Open Source Contributions for Interoperability Developers"
author: Kevin Shekleton
date: 2018-06-21
tags: [engineering, open source, interoperability]
---

Open source and open standards encourage collaboration around innovation that advances the health care industry through improved interoperability. Developers across health care can come together and use open source code to share information, as well as develop and continually improve apps to support better health outcomes for patients.

At Cerner, developing open platforms that support interoperability standards like SMART® and FHIR® is integral to our mission of transforming health care. In addition to implementing these standards in our platforms, we also participate in organizations like [HL7](http://www.hl7.org/) and the [Argonaut Project](http://argonautwiki.hl7.org/index.php?title=Main_Page) to help shape and develop these standards. Cerner attends and speaks at conferences on interoperability like [FHIR DevDays this week in Boston, MA](https://www.fhirdevdays.com/boston/).

In addition to all of this work, we're continually developing open source projects and work for the benefit of all interoperability developers. As we speak on and support interoperability this week in Boston for FHIR DevDays, we thought it would be great to highlight our current open source interoperability work over the past couple of years.

### SMART on FHIR Tutorial

A couple of years ago, Cerner developed a [tutorial](https://engineering.cerner.com/smart-on-fhir-tutorial/) walking developers through the process of creating their first [SMART on FHIR application](https://smarthealthit.org/). With this hands-on tutorial, developers can write and deploy their SMART on FHIR application, running it against Cerner's [_code_](https://code.cerner.com/) Console and our [FHIR Sandbox](https://fhir.cerner.com/). Because SMART applications are interoperable with other vendors, the tutorial also walks the developer through running that same app against other sandboxes like the one provided by the [SMART Health IT project](https://launch.smarthealthit.org/). Over 700 developers have completed this tutorial as of June, 2018.

You can find the source code for the tutorial at https://github.com/cerner/smart-on-fhir-tutorial

### SMART on FHIR Apps in Embedded Browsers

Over the years, Cerner has contributed to several changes to the popular open source JavaScript library ([fhir-client.js](https://github.com/smart-on-fhir/client-js), maintained by the SMART Health IT organization), used by many SMART app developers for launching and interacting with the FHIR API from their web-based SMART application. Running these types of applications within an embedded IE browser in a Windows application (like Cerner's PowerChart® EHR) requires a bit of added effort to ensure SMART apps running concurrently do not exhibit critical patient safety issues. Cerner released an [open source library](https://github.com/cerner/fhir-client-cerner-additions), used in conjunction with fhir-client.js, to prevent these issues from happening. Our open source library is in use by SMART app developers running their apps not only within Cerner EHR environments, but also within other EHR vendor environments.

You can find the source code for this project at https://github.com/cerner/fhir-client-cerner-additions

### ASCVD Risk Calculator SMART Application

Through collaborative efforts, Cerner and [Duke University Health System](https://www.dukehealth.org/) recognized a need for the development of a more clinically relevant cardiac risk calculator app. To solve for this, together we developed the open source [ASCVD Risk Calculator SMART application](https://apps.smarthealthit.org/app/ascvd-risk-calculator). Not only is the app freely available to all Cerner clients, but all our work on the app is open source so that other hospitals and health systems can  run and modify it to meet their needs.

You can find the ASCVD Risk Calculator source code at https://github.com/cerner/ascvd-risk-calculator

### CDS Hooks

[CDS Hooks](https://cds-hooks.org) is an emerging standard for interoperable clinical decision support. Similar to our SMART on FHIR tutorial, Cerner wrote an [open source, hands-on tutorial](https://github.com/cerner/cds-services-tutorial) that walks a developer through writing their first CDS Service.

Cerner is also the primary developer and maintainer of the [CDS Hooks Sandbox](https://sandbox.cds-hooks.org/), an open source Sandbox used by the CDS Hooks community. The CDS Hooks Sandbox has been proven to be incredibly valuable and helps developers test and demonstrate their CDS Services against any FHIR server of their choosing.

You can find the CDS Hooks Sandbox source code at https://github.com/cds-hooks/sandbox

### Bunsen: FHIR and Big Data

Big data can have a great impact on health care when used correctly. Health care organizations are analyzing big data to improve health care in a number of ways, from increasing revenue and improving efficiency to predicting diseases and improving patient care. As technology advance, health care organizations will continue to gather more data and developers will need to find ways to make that data useful and actionable.

Cerner has many years of experience working with big data. To support big data developers, we made Bunsen open source. Bunsen is a project that makes it easy for developers to explore, transform and analyze FHIR data with Apache Spark. In addition, Cerner recently released a [tutorial for getting started with Bunsen](https://github.com/cerner/bunsen-tutorial). You can [read more about Bunsen on our blog post here](https://engineering.cerner.com/blog/announcing-bunsen-fhir-data-with-apache-spark/).

You can view the Bunsen source code at https://github.com/cerner/bunsen
