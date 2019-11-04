---
layout: post
title: "ShipIt Day XVI"
author: Matt Boveri
date: 2019-11-04
tags: [engineering, shipit]
---

Finishing our 16th occurrence of the series, our quarterly ShipIt Day hackathon invites the makers and innovators to come out and share new ways to think about our daily work here at Cerner. Whether it's experimenting with new features or improving our developer workflows, ShipIt Day gives our engineers a chance to try and learn new things. This ShipIt day in particular had some exciting projects that melded hardware and software. Here are the top teams.

## ShipIt Day XVI Winning Project

<div align="center">
  <table>
    <tr>
      <td align="center">
        {% img center /assets/2019-11-04-shipit-xvi/shipit-xvi-1.png 600px %}
        <sub>Left to Right - Matt Boveri, David Crowder, Sam Livingston, Ian Kottman, Anthony Ross</sub>
      </td>
    </tr>
  </table>
</div>

During this 24-hour event, the team created a capacity meter for Cerner’s DC/OS cluster. The focus was to map out the potential for failure within a DC/OS cluster based on hardware constraints: CPU / Memory / Disk space. Every hour the meter will sample the usage and display the currently most used resource. During the live demo seen below, CPU is the most utilized at just under 70%. Colorful LEDs were used to signify which hardware type is currently displayed. As the DC/OS cluster hits 95% a trigger will flash the red LED to alert that the cluster is nearly at capacity.

The code as well as additional notes on the project can be found in the public GitHub repository: https://github.com/mboveri/dcos_meter.

{% img center /assets/2019-11-04-shipit-xvi/shipit-xvi-2.png 600px %}

### Meter Metrics

- 0 - 70% = Green
- 71 - 85% = Yellow
- 86% - 100% = Red
- At 95%+ Red LED is illuminated

### Raspberry Pi Configuration

{% img center /assets/2019-11-04-shipit-xvi/shipit-xvi-3.png 600px %}

{% img center /assets/2019-11-04-shipit-xvi/shipit-xvi-4.png 600px %}

## Other ShipIt Day Winners
**2nd Place- Sparkling Darlings:** Aakash Pydi, Gunjan Kaphle, James Freeman, Jokongir Rikhsiboev, & Cory Tenbarge

> In this project, the team worked on prototyping their team's user experience monitoring (UEM) jobs using [Apache Spark](https://spark.apache.org).
>
> The UEM jobs currently run a series of giant aggregation summarizing SQL queries on our [Vertica](https://www.vertica.com/) cluster. This leads to issues such as (i) significant lag in data availability, (ii) giant, unintuitive SQL challenging to support and debug, (iii) the addition of significant load to our Vertica cluster, (iv) the load added to Vertica being 'inefficient'.  If these jobs were in Spark, it would be much more efficient, have near real time data availability, and be significantly easier to debug and support. It also could potentially leverage Spark libraries for machine learning and graph processing.
>
> The more general goal is to set up an incremental development and adoption strategy, for a Spark powered aggregation, summarization, and analytics layer in the team's data architecture. This will be an immensely valuable tool in the team's arsenal.


**3rd Place- Syug Looc:** Eric Vue, Minhaz Abdullah, Zach Miller, Tarun Kolla, Sydne Anchutz & Zachary Herridge

> This project focused on making the [Dev Academy](https://engineering.cerner.com/blog/devacademy-six-years-later/) process more accessible to new hires at Cerner. While going through training, there is a very specific development process that associates must follow. The documentation for different parts of this process are currently hosted in multiple locations and sometimes contradicts itself. To fix this, the team developed a Chrome extension. The Chrome extension modeled a checklist to keep track of each step of the process per development task. It also cataloged the instructions and requirements for each step of the process and provided useful links to documentation to minimize errors. There were also quick links that allowed the user to jump between Jira/Crucible/GitHub/Jenkins for each task assigned to them. The use of this extension will make development in the Dev Academy much more efficient and reduce user error.


**Best Presentation- Shippie-ki-yay Mother FHIR:** Steven Goldberg, Ryan Neff, & Jean Fernandez

**Best Team Name- ThunderCats:** Chris Wheeler, Saranath Govindaraju, Vinayak Tare, & Nageswara rao Nandigam
