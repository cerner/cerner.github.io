---
layout: post
title: "Bad Design is Bad for Your Health: Why Data Visualization Details Matter"
author: Jody Butts
date: 2018-01-04
tags: [ux, data, visualization]
---
Presentation Abstract by Jody Butts, Sr. User Experience Designer
Given on August 11, 2017 at the UX Australia Conference in Sydney

_Full presentation audio and slides are available here:_ http://www.uxaustralia.com.au/conferences/uxaustralia-2017/presentation/bad-design-is-bad-for-your-health-why-data-visualization-details-matter/

The proper design of data visualization details is imperative for accurate and actionable data visualizations and dashboards. In the health care technology industry, even the smallest design detail on a graph of patient data can have a dramatic impact on patient safety and outcomes. For example, auto-adjusting y-axes in vitals graphs across patient charts in the EMR could cause change blindness which impacts the perception of patient data trends.

## Patient Safety

As a user experience designer for Cerner, a health care IT company, patient safety is the foundation of my work. However, we see startling patient safety statistics around the world today. According to a Johns Hopkins [study](https://hub.jhu.edu/2016/05/03/medical-errors-third-leading-cause-of-death/) from 2016, medical error is the third leading cause of death in the United States, following heart disease and cancer. The World Health Organization (WHO) [estimates](http://www.who.int/features/factfiles/patient_safety/en/) that in developed countries across the globe, as many as one in ten patients are harmed while receiving hospital care.

Based on research the User Experience team at Cerner has done, there are several challenges the health care industry faces to ensure patient safety. From workflow and communication to external rules and regulation, there is a complex and interconnected web of factors. 

While human error is unavoidable, there should be several defensive layers for every system. Despite the training, regulation, and process our health systems have, health care providers are still working in high-risk environments.

Understaffed health systems are flooded by people in need of care. On a bustling hospital floor with alarms going off at all hours, care team members running between patient rooms, and the need to use a computer to document patient data to meet government regulations, it is no wonder that medical error occurs.

Although we cannot ensure software will always work perfectly, we do have responsibility to ensure that the UI and UX layers of our systems are designed to protect our users and enable them to perform their tasks well.

## User Experience at Cerner
I work for Cerner, a company at the intersection of health care and IT. Cerner technologies support the full continuum of care including clinical, financial, and patient engagement solutions. We have products licensed at more than 25,000 facilities across 35 countries.

As a part of Cerner’s UX team, I spend most of my time designing in the clinical space, working on projects for our main product: the electronic medical record (EMR), mainly used by doctors and nurses. Our technology is subject to a long list of legislation and regulations. Cerner has an entire team dedicated to reviewing standards for each country to ensure we are meeting all health IT requirements.

Our UX team also has training on how these standards impact our designs and research. Accessibility guidelines, patient privacy, and medication safety are just a few examples of regulation themes that guide our work. I focus on the rules that impact data visualizations and incorporate additional research to create safe and usable experiences.

The accurate graphical display of patient data has become my passion over the past two and a half years. Data visualization is a very powerful tool across industries, but I’m biased toward believing that its most amazing applications are in health care technology. 

## Data Visualization in Pediatric Health Care

For many years, the EMR was simply an input tool for charting patient data–most data review was solely displayed in rows and columns. Now we are creating meaningful displays of information for clinicians to support their decisions.

For example, the pediatric growth chart has been used by health care providers to track children’s growth from birth into adulthood for almost 40 years, starting on paper. The WHO and Centers for Disease Control and Prevention (CDC) have standards for healthy growth of height, weight, head circumference and more based on age, sex, and so on.

These standards are displayed as percentile lines that create a unique curve for each measure. When patient data is plotted, it becomes easy to identify if a child’s growth is progressing normally, or if there are abnormal patterns. For the first 20 years of an individual’s life, the growth chart is essential for tracking healthy growth progression. It is also an invaluable tool for communication between parents and clinicians.

As I have worked on a redesign of Cerner’s interactive growth chart tools, I have had the opportunity to observe clinicians using the growth chart in hospitals. In a Neonatal Intensive Care Unit (NICU) setting, or neonatal intensive care unit, physicians are making life-saving decisions for premature infants based on this information. For specialists, such as pediatric endocrinologists, the pattern of the trend line is often the first indication of diagnoses such as hypothyroidism. Can you imagine being able to recognize a disease by looking at a line graph? 

## Data Visualization Design Details

In a matter of clicks, we can take tables with thousands of numbers and transform them into graphics that provide immediate insights. From problem solving to storytelling, this information drives action across every industry.

There are countless examples of confusing and even misleading graphs–just try a Google search for “bad data visualizations,” and you’ll see what I mean. This assumed legitimacy is dangerous, especially when the design is sleek and appears trustworthy. The details that lead to accurate and impactful data visualizations fall into three categories: clarity, context, and creativity.

Clarity

Clarity is the foundation of data visualization design. We want to avoid all potential for confusion in order to empower our users to confidently make decisions. To achieve this, we must start with the basics. The title of a visualization should be succinct, yet provide the information needed to understand what data are being viewed and how they are being measured. If additional details are important to include, consider using supporting text below the title.

A dangerous mistake I regularly see while consulting on visualizations and dashboards is improper or missing labels. Do not make users guess what data points are being shown or how they are being measured. All axes in visualizations should be labeled. It is also important to include the unit of measure, which I like to include in parentheses next to the label. 

While labels are important, I believe the most powerful element for clear data visualizations is proper scale. A simple mistake I often see is to start the y-axis of a bar graph at a value other than 0. Human eyes interpret the value of a bar to be equal to its length, so when the y-axis does not begin at 0, the values are not interpreted accurately. Similarly, the perception of data measured in percentages is also often skewed by scale. This sometimes occurs because a tool automatically adjusts the scale to fit to the data, but sometimes it is done to manipulate the data display. This [example](https://www.youtube.com/watch?v=E91bGT9BjYk&t=40s) of an ad from Chevy illustrates the power scale has on perception (starting at 0:45).

Context

Once there is a truthful and clear foundation for data, the following techniques can bring users quicker insights and increase their confidence in data interpretation.

If there is a normal, expected, or ideal range of values for the data, adding a target range is a simple but powerful way to add context. A light shaded region behind the grid lines can allow users to easily identify high and low values. Similar to a target range, a goal line can be added to indicate a discrete value that the plotted data should be achieving. A goal line and target range can be used together as well.

It’s important to mark visualizations and dashboards with the date it was published. I also recommend including the date or date range of the data as well in order to maintain trust and relevancy of your visualization.

Annotations are another simple way to provide your user with context. On-canvas notes and labels should be used sparingly, but can help highlight insights. These can be placed in context of a specific data point, a date or timeframe, etc.

Creativity

Once we have created a clear visualization and provided our user with additional context, we are ready to polish our design. There is great potential for creativity in data visualization, but it can cause more harm than good if done poorly. Let’s look at visual encoding methods, colors, and other visual design details that can enhance your visualization or dashboard.

Qualitative and quantitative data is visually encoded, or translated, through a variety of graphical methods that make up each visualization type. [Research](https://ils.unc.edu/courses/2015_spring/inls541_001/Readings/Cleveland%20and%20McGill%201985%20-%20Graphical%20Perception%20and%20Cleveland1985-Graphical%20Methods%20for%20Analyzing%20Scientific%20Data.pdf) has been done on these visual encoding methods, giving us insights for human graphical perception. Statistician William Cleveland and his colleague, Robert McGill, tested the visual encoding methods and ranked them by accuracy of perception. Their findings give us a scientific foundation for data visualization.

Position is the best encoding method for accuracy, followed by length, angle, area, volume, and finally, with color taking the last spot. This means that color is not reliable for communicating data information in a graph. This aligns to the WCAG 2.0 accessibility [guidelines](https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-without-color), which state that color cannot be used as the only visual means of conveying information, indicating an action, and so on. Second, bar, and line graphs are common for good reason–they are most effective for our brains to accurately understand. Ultimately, it’s always best to try a couple of options and compare their effectiveness.

Use color sparingly. Think of it as a tool for drawing attention to the most important insights. If everything has color, especially on a dashboard, nothing will stand out. Since approximately 10% of the population is color blind, we should avoid using red and green together on a visualization. [Color Oracle](http://colororacle.org/) is a great color blindness simulator that you can use to see how your colors appear for users with these vision deficiencies.

Ensure you maintain high contrast between colors by avoiding very light or very dark shades. The [Delta-E calculation](http://colormine.org/delta-e-calculator/) measures the distance between two colors. At Cerner, we ensure a difference of at least 3.5.

The best way to test the colors you are using is to print it out in grayscale. Make sure you can still match plotted data to its labels. Better yet, get additional eyes on it. This test ensures that color is not being utilized as the only way to communicate meaning.

## Visualizations are the Key to Understanding Data

The world is overflowing with big, complex problems, but we also have big, complex data to solve them. This big, complex data exists as numbers that can go on forever. Data visualizations are the key for humans to understand it all. Data must be visualized clearly and effectively to enable professionals across industries to understand it, make decisions, and take action based on it.

We can revolutionize health care and other fields through the way we visualize data. The design details matter. Through clear, contextual, and creative data visualizations, we can drive action that will change the world and even save lives.
