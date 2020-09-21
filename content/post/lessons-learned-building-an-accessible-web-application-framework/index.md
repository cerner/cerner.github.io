---
title: "Lessons learned building an accessible web application framework"
authors: ["Matt Henkes"]
date: 2020-09-21
tags: [accessibility, terra, engineering, oss]
---

Since 2017, We at Cerner have been building Terra, a single page web application framework, and accessibility has always been a primary goal. Over the years we've learned a lot about how to build and test accessible websites, as well as the diverse group of people we're serving. With this blog post, we'd like to take a moment to share what we've learned so far.

## Why accessibility matters

At Cerner, we build software for many different users in many different roles. Doctors and nurses may first come to mind as the primary users for our EHR, but hospitals aren't made up of providers alone and neither are our users. We also provide applications for administrative users and with the Healthe portal app, our users are the general patient population. Naturally, with such a broad user base a percentage will require assistive technologies to be able to use our applications. To be as inclusive as possible, Cerner applications must be as accessible as possible, and the Terra Application Framework is one way we are working towards that goal.

## What does it mean for a site to be accessible

I'll be honest, when we started in 2017, I thought creating an accessible website simply meant appropriately applying ARIA labels to DOM elements. In the last few years, we've learned, with the help of our accessibility researchers, that creating an accessible site is so much more than that. So, let's hop in our time machine and discuss how we should have approached accessibility with appropriate hindsight (foresight? Time travel is confusing).

### Identify how users interact with our site with accessible technologies

As we discussed above, our broad user base includes a diverse array of people and an equally diverse array of accessibility needs. When discussing web accessibility, it's easy to assume that means ensuring a screen reader appropriately can navigate and read your site. Screen reader compatibility is important but if your user has impaired mobility, but fine eyesight, you're not really helping them. We've compiled the following use cases to ensure we are covering all expected interactions and needs.

* Impaired vision
* Impaired mobility
* Impaired cognition

Additionally, individuals could temporarily fall into any of the above categories through injury, device capability, location, or conditions.

### Create areas of focus for each use case

For each of the above use cases we've identified the appropriate assistive technologies to focus on.

#### Impaired vision

* Focus on helping the user access the site content by ensuring appropriate contrast ratios, font sizing, spacing, color usage, and screen reader support. A good way to get a feel for this user's experience is to enable a screen reader (all Macs have voice-over), close your eyes, and navigate your site. Does it make sense?

#### Impaired mobility

* Focus on helping the user navigate the site using devices other than a cursor by enabling keyboard navigation and supplying redundant information access. For example, providing alternative methods to take actions that require gestures on mobile.

#### Impaired cognition

* Focus on applying layout simplicity to our workflows and components as well as improving keyword comprehension by emphasizing common design patterns and expected behaviors. For example, buttons should not navigate a user to a new page, that is the role of Links.

#### All impairments

* Provide a consistent semantic layout and access to information regardless of form factor (desktop, mobile).

### Design for accessibility

Accessibility cannot simply be layered on any component as an afterthought. This was a mistake we made early on. We’d work through designing and building a complex component and only test screen reader compatibility at the end. Unsurprisingly, the component would fail, and we’d have to repeat the process again to correct the issues, sometimes with a complete redesign. Just as engineering constraints inform a design, so to do accessibility constraints. Designing for them up front will reduce expensive re-work late in a project.

As you can see, there is far more about accessibility to consider than ARIA labels. We understand that implementing accessibility on the web is a complex and difficult task and we've built the Terra application framework to help.

## What does Terra offer for accessibility

Terra provides a stable base on which to build accessible applications. The Terra application framework and each Terra component are designed and built to meet our [accessibility standards](https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y). To help ensure that our components meet these standards, we perform a mixture manual testing and automated testing using axe-core.

While using Terra gives you a good head start at building an accessible application, simply by using Terra you cannot assume your application is fully accessible. How Terra components are assembled and labeled in an application have a large impact on its accessibility. Any custom components need to be vetted with the same care as Terra components to ensure accessibility. Application owners should make sure to test their apps using a screen reader.

Developing applications for the web is inherently complex. Adding accessibility does not make development simpler. However, we've found that by ensuring accessibility for the Terra application framework and components, not only are we ensuring our apps are available to all users, but we also build better architected, more predictable products. It has been our experience that implementing a consistent semantic layout and a sensible keyboard navigation order lead directly to a logically organized information architecture.

Terra’s documentation is located [here](https://engineering.cerner.com/terra-ui/home/terra-ui/index). It’s all open source and we’d love to hear what you think.

In closing, I'd like to provide a quote from my friend, Neil Pfeiffer, UX Designer, that I think sums up our mission very nicely.

> Our job is to help _all_ users better understand their surroundings, providing them not only with clear and direct informational context, but also what choices and actions they can make based on that information, and always put _them_ in control.

Thanks for reading, and remember, we're all in this together :)
