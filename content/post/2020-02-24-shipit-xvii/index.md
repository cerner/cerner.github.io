---
title: "ShipIt Day XVII"
authors: [ "Sharynne Azhar", "Jordan Bush", "Harish Pendyala", "Vu Tran" ]
date: 2020-02-24
tags: [engineering, shipit]
thumbnail: "2020-02-24-shipit-xvii-z3ro_d4y-min.png"
---

ShipIt Day, Cerner Engineering’s 24-hour hackathon, provides associates an environment to be creative, work on new projects, and network with other associates. This event is one of the many things that sit at the core of our [Engineering Culture](https://engineering.cerner.com/blog/devculture-team) at Cerner, and is rapidly growing- now being hosted globally in Romania, Sweden, India, and the UK. In October, our team had the chance to participate in the seventeenth ShipIt Day at Kansas City’s [Innovations Campus](https://engineering.cerner.com/blog/one-year-calling-innovations-home/) and managed to take home the Golden Keyboard trophy as the first place team!

 {{< figure src="2020-02-24-shipit-xvii-z3ro_d4y-min.png" caption="Left to Right - Sharynne Azhar, Vu Tran, Harish Pendyala, and Jordan Bush">}}

## Overview

During this ShipIt challenge, our team's goal is to create a dashboard that tracks newly discovered [CVEs](https://cve.mitre.org/) and displays any affected Cerner artifacts. The Z3R0 D4Y dashboard is a centralized place where teams can quickly go to identify and remediate any new security vulnerabilities and threats.

## The Problem

New security vulnerabilities come up every day and keeping up with the latest updates can be tough. To take a more proactive response, we needed a way to get real-time updates of the latest vulnerabilities and identify which Cerner artifacts are affected.

But where can we get this data?

## Our Solution: Z3R0 D4Y

We created the Z3R0 D4Y dashboard (shown below) to help solve this problem. The dashboard gives an overview of different CVEs and which products are affected.

 {{< figure src="Z3R0_D4Y_DASHBOARD_summary_view.png" >}}

It then allows you to drill in and see details about the affected products. Below is an example of a test app to show a vulnerability.

 {{< figure src="Z3R0_D4Y_DASHBOARD_detailed_view.png" >}}

## How It Works

The project is comprised of two components: the backend engine and the dashboard site.

The engine subscribes to the National Vulnerability Database ([NVD](https://nvd.nist.gov/)). The NVD provides a collection of [data feeds](https://nvd.nist.gov/vuln/data-feeds#JSON_FEED) of published vulnerabilities which are updated approximately every two hours. The Z3R0 D4Y engine runs nightly to retrieve the list of most [recently discovered CVEs](https://nvd.nist.gov/vuln/data-feeds#JSON_FEED). The data then is parsed to identify details of the new CVEs and the list of vulnerable dependencies. Using the [GitHub API](https://developer.github.com/v3/),  the engine then checks all of Cerner's artifacts available in Github for matches based on that project’s dependency file. In Ruby, this would be the Gemfile.lock, for example. Finally, it publishes the findings to the Z3R0 D4Y dashboard.

The dashboard site is a simple Github page that displays all CVEs, their description, publish date, and affected artifacts. Its content is updated automatically nightly whenever the engine produces new data. The site also supports sorting and searching across the CVEs and Cerner artifacts data.

## Other ShipIt Day Winners

### Second Place: nudgers

The nudgers teamed up to create a ‘Nudge’ behavior-changing native iOS or Android application that can be quickly delivered to Cerner Associates to begin using. The app has users select a single behavior they’d like to improve upon (drink more water, less screen time, etc), they will manually enter their day’s total, and the app will begin ‘nudging’ them to make small changes based on their entries

{{< figure src="runnerup1.jpg" caption="Left to Right - Pat Walsh, Anna Luckey, John Moses, Justin Eddings">}}


### Third Place: Stop Trying To Make &lt;Cameras&gt; Happen

This team worked on part two of a previous project they had worked on in a ShipIt Day, which is a virtual ICU Mobile Cart. In this hackathon they were able to implement device event listeners, encounter and location device association, conference calling integration, and data calls to the eHospital API.

{{< figure src="2020-02-24-shipit-xvii/runnerup2.jpg" caption="Left to Right - Taylor Clay, Bilal Ahmad, Duncan Dufva">}}
