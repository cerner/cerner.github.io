---
title: Modularity in Medical Imaging
authors: ["Cerner Engineering"]
date: 2013-03-29
tags: [operations]
permalink: /2013/03/modularity-in-medical-imaging/
thumbnail: "Figure-1.png"
---

Developers often take for granted the level of flexibility and customization that is available within the software they use every day. Consumers of imaging software have traditionally been completely confined to interpret exams a specific way, and frequently in ways that are unintuitive. Every physician, specialist, technologist, med student, and others across the continuum of care has a preference as to not only how exams are laid out, but what information is displayed with the images and what transformations would be applied or processed automatically. As it turns out, the only workflow they have in common is that they all view exams differently and they all want the experience to be clear and understandable.

We decided to take this to heart in the development of our viewing solution by allowing the application react to the user, opposed to the user reacting to the application and constraining their workflow. Working in the medical community can already be a high stress environment; introducing a piece of software intended to augment patient care that often times makes delivering care more difficult is not a viable solution. Finding the best way to address these issues starts with knowing the solution’s target audience. Before developers can help streamline a workflow, they first have to understand it. If you understand the user’s workflow and how they expect the solution to function, you can design for usability and they will want to use it, as opposed to feeling forced to use it. A key aspect of this is the reliability and simplicity of the application. If the user feels like the application is unstable or overly complex, they will immediately lose interest and view the whole experience as a chore, as opposed to something that can provide value.

{{< figure src="Figure-1.png" alt="Figure 1" >}}

The interface is the first application element the user encounters. If it feels intimidating and complex, before they even perform any functions, you have set a negative tone for your application and adoption will be low. In the case of imaging, Radiologists often spend more than 60 hours a week reading over 16,000 procedures per year, all in front of the same application. Imagine working with an application that causes frustration throughout your day.  The first impression can propel an application in the marketplace or stifle it.

With the advent of open source software coming to the forefront, there are a variety of options for developing rich applications backed by a large community of contributors. One of those happens to be the Eclipse Rich Client Platform (RCP) and the corresponding Standard Widget Toolkit (SWT). RCP and SWT both provide a way for developers to rapidly develop a professional looking and stable application but are somewhat limiting when viewed from an imaging standpoint. Radiologists typically read on workstations that have three or more monitors and in environments that are dimly lit. Using an application that is primarily grey and white can not only cause eye strain for the user but it can be distracting from what the user is trying to accomplish.

{{< figure src="Figure-2.png" alt="Figure 2" >}}

Our team addressed this by starting out with the native components and then closely working with radiologists and visual designers to plan a user interface that was not only visually pleasing but also functional. The end result was a set of skinnable SWT widgets that are reusable within any SWT based application and can be specifically themed to match a desired color scheme for an environment.

{{< figure src="Figure-3.png" alt="Figure 3" >}})

Another aspect of imaging that we needed to plan for was the wide array of uses (diagnostic versus distribution). In a diagnostic scenario, radiologists will use the solution to perform diagnosis and will use the application within a multi-monitor high-resolution environment. For purposes of distribution imaging, clinicians will view images for reference and often times will view these on a much lower resolution single screen device (such as a laptop). While these two scenarios have vastly different hardware environments, users want the same experience across both and do not want to have to learn a new application depending on the workflow they are targeting at the time. As developers, we can address this by using service APIs instead of hard implementations and then create different assemblies that are easily accessible based on what the user is trying to accomplish. This not only helps address production concerns but allows developers to code against mock data sources and stores using the same API that they would within a fully scaled production environment.

Once we had the basics covered, we rethought how we approached the workflow, and sought to intentionally design for usability and responsiveness within the application. Users previously were constrained to grids and a limited amount of information while reading. With modular components designed to perform specific tasks and provide specific information, the user can now decide how they want to consume and view exams.

{{< figure src="Figure-4.png" alt="Figure 4" >}}

{{< figure src="Figure-5.png" alt="Figure 5" >}}

{{< figure src="Figure-6.png" alt="Figure 6" >}}

So now we have a solid application for use within diagnostic scenarios, but how do we give access to the enterprise without adding overhead? Following the path of reuse, we decided that we would use the main application that we already had. By starting with these components instead of rebuilding it for the browser or an entirely new framework, we could focus on how we could change the delivery of that application.

We needed a way to deliver the same high power application without requiring the high power hardware. Traditional IT solutions would use Citrix, VMWare, or some other type of commercially available virtualization solution. While these are all great solutions for certain scenarios, the requirement of plugin installation on the client device accessing the application the heavy graphics processing within an imaging solution does not play nicely in these environments.  We can build on what these other solutions use (MS Remote Desktop Services) but choose to marshal the end result in an entirely different way.

If we want to deliver an application via a web browser, we have a limited selection of tools that we can depend on being available. IE has its own quirks and implementations, Chrome has some fancy extras on top of the WebKit rendering engine, and while Safari/Firefox use the same engine they still behave differently. Developing and deploying an application that must be focused on performance for the end user and still usable within a variety of environments has to take all of these constraints and challenges into consideration.

First, we needed a way to communicate between the client and server. The HTML5 WebSocket API is great for this, but only has minimal support and user adoption. Socket.IO has a great framework that allows for WebSocket emulation (or their native use if available) that provides great performance. We decided to use this for our real-time web app and it has proven to be invaluable throughout our development process.

{{< figure src="Figure-7.png" alt="Figure 7" >}}

Now that we can communicate to the server what the user wants to do, we need a way to provide a representation of the images and UI that corresponds to the user input. The HTML5 Canvas API would seem like a good choice but continually redrawing canvas areas is process intensive and as this API isn’t supported within IE (the vast majority of our user base), it simply wasn’t an option. Instead, we decided to use a streaming mechanism, but couldn’t use the HTTP Streaming spec as this inherently introduces latency, which wouldn’t provide an acceptable user experience. All browsers support JPEG and PNG decompression and we can easily compress representations of the screen and shuttle these to the client. Even better, we can do this with a minimal amount of latency (we eliminate the need for key frames within an MPEG stream); we can choose which frames to drop and we can adjust the quality of each frame on the fly. This allows the client to adapt to the current network constraints and machine capabilities by tracking the effective FPS and adjusting the parameters on a sliding scale accordingly.

{{< figure src="Figure-8.png" alt="Figure 8" >}}

With all of these tiers in place, we now have an application in the browser that looks identical to the desktop deployment with plugins or installation required.

{{< figure src="Figure-9.png" alt="Figure 9" >}}

Beyond that, we have an SDK where third parties can build on top of our current deployment and provide even more specialized functionality within the imaging space, while still allowing users to customize their layout and how the data is delivered. We have now managed to deliver the same application to any device with a browser and our developers can develop from a single code line. This pleases our users and makes our developers’ lives easier. A true testament to how ease of development and a simple, yet powerful, user experience can exist in the same application.
