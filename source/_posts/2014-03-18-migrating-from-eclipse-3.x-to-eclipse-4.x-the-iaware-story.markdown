---
layout: post
title: Migrating from Eclipse 3.X to Eclipse 4.X - The iAware Story
author: Andy Gifford
date: 2014-03-18
tags: [engineering]
---

_This is the blog form of the talk Migrating from Eclipse 3.X to Eclipse 4.X - The iAware Story at [EclipseCon 2014](https://www.eclipsecon.org/)._

The iAware development team was formed in late 2007 and in a little under six months we developed our first solution, CareAware CriticalCare, a dashboard application written using the Eclipse RCP targeted for use in ICU settings. The goal of this application was to provide clinicians with a complete picture of the patient’s status and to do it in a manner that was contextually relevant; meaning that related information was presented together. Doing so allows them to make rapid and timely clinical decisions.

It was from this first solution that we began the process of building the software development platform. We've created a number of reusable and consumable assets that can simplify and speed up development; chief among them is our Application, Platform and Gadget frameworks. Our application framework manages the startup and initialization of applications built on the platform and allows those building solutions to define the layout (navigation bar and perspectives) of their running application. The platform framework provides management of the active application, contexts and navigation and is the connection point for gadgets to communicate with one another. The gadget framework is a wrapper for Eclipse views and provides a common set of operations and UI elements that provide a consistent look and feel across gadgets. It also handles context changes and user authorization for solutions. 

We provide two different application types: Dashboard and Personalized. The dashboard application type is intended to be shown on large form factor displays, typically in patient rooms in an always-on operation mode. This type lacks personalization options, such as moving views around or adding or removing them as multiple users will be using the application and a consistent look needs to be maintained. The personalized application type is intended for multiple form factors, but it's primary use case is for laptops and mobile workstations with each user signing into the application with their own credentials. Because of this, we allow users to customize their perspectives by moving, adding or removing views. They can also add and remove perspectives and set preferences such as refresh time.

{% img center /assets/2014-03-18-migrating-from-eclipse-3.x-to-eclipse-4.x-the-iaware-story/careaware-critical-care-dashboard.png Careaware Critical Care Dashboard %}

{% img center /assets/2014-03-18-migrating-from-eclipse-3.x-to-eclipse-4.x-the-iaware-story/careaware-critical-care-personalized.png Careaware Critical Care Personalized %}

At our core, we develop a reusable application platform built on top of the Eclipse Rich Client Platform to provide the ability to create targeted healthcare workflow applications with the goal of allowing other development teams to focus on solution specific development without worrying about the infrastructure. This means that our team can take on the responsibility and work effort of updating to new Eclipse versions as they become available without having to pass that cost down to those teams that build solutions on our platform.
 
For the first four years or so, we did all of this platform development on top of the 3.x framework. A little over two years ago, we began the uplift process to 4.x, starting first with a feasibility study using 4.1.1 while taking advantage of the compatibility layer. While we wanted to dive in and have a straight e4 application, we had invested time and energy on platform projects based on 3.x that we couldn't afford to scrap, so we took it one step at a time. Additionally, our team and other teams at Cerner had solutions that Clients were using that expect them to continue to function as they had previously regardless of what we did under the hood.
 
During this feasibility study, we found around 50 items that we needed to address. Some issues were things that we were doing that happened to work in 3.x but no longer did in 4.x. Some were bugs that we either found already logged or we logged to Eclipse. A sampling of things found includes:

- One of the first things we found was that all views had a view menu whether there were items in it or not. After some checking, we found that there was a bug (https://bugs.eclipse.org/bugs/show_bug.cgi?id=319621) logged for this, and we worked with other contributors to come up with a solution. After it was determined that the correction wouldn't make it to 4.1.1, we modified the renderer (org.eclipse.e4.ui.workbench.renderers.swt) to never show the view menu for our views since we didn't use that functionality anyway.

- Given the ability to save perspective layouts of our personalized applications, we quickly found that perspective saving was broken and identified a number of Eclipse bugs related to the problem. Again, because the issue wasn't due to be fixed until 4.2, we did our own serialization of the perspective layout and saved that data off into our preference store. After uplifting to 4.2, we removed most of that code and instead use the perspective XML.

- We also came across another issue that was already logged (https://bugs.eclipse.org/bugs/show_bug.cgi?id=356252) where a perspective will be closed when all of its parts are closed. To resolve this, we added the Cleanup add-on and implemented a patch that was posted to the logged bug.

- Another issue we ran into was with menu ordering. We had two different plug-ins contributing menu items to the main application menu and both of them declared that they were to be shown after the file menu item; however, we wanted one, Personalization, to show before the other, Help. Once we realized this, it was an easy fix to switch the declaration of the Personalization item to say that it should be before the Help item. While this was an issue with our code, it highlights the passivity problems that we had to be concerned about.

- Another menu related issue was a dynamic menu that we were building that lists all of the available views for a particular perspective only listed one element. After some investigating, we found that our contribution class was extending ContributionItem instead of CompoundContributionItem as suggested by the Eclipse wiki. We switched the class our contribution was extending and our menu was once again working as expected. Nonetheless we logged a bug (https://bugs.eclipse.org/bugs/show_bug.cgi?id=354190) with respect to the ContributionItem since it was working in 3.7.

- A handful of issues that we encountered centered on the icons for our various views and how they weren't being found. It was determined that the slash direction in the icon path was incorrect.

- Another set of issues that we encountered centered on having new functionality that wasn't desired, such as extra preference pages in our preferences dialog and extra menu items in our help menu. An evaluation of the dependencies that were added corrected these issues.

- For a variety of reasons, detached views is a feature that we needed to remove from applications. In 3.x we used the IWorkbenchPreferenceConstants.ENABLE_DETACHED_VIEWS preference. However, this property isn't supported in 4.x. Our workaround to this is to provide a custom implementation of the DnDAddon which takes away detached views altogether. We logged a bug for this situation: https://bugs.eclipse.org/bugs/show_bug.cgi?id=357289

- We also found after uplifting that we had a number of jobs that started to fail sporadically due to authentication checks we had in place not having the necessary information. After investigating further, we found that some jobs that previously were executed after our users logged in were occurring before and as such threads in the job pool were being created without the correct subject in place and subsequent jobs would reuse these threads. We employed a two pronged approach to resolve this issue. We updated existing jobs to obtain the current subject on construction (from the access controller) of the job and then use the Subject.doAs call in the jobs run method. At the same time, we created an extension of the Job class that would do this for consumers.

After demonstrating that we could move to 4.x, we began the process of making use of the new functionality that was available and to remove as much of our dependency on the compatibility layer as possible. To do that we added and customized the application model, defined a custom renderer to represent our UI and began removing extension points and implementations of 3.x interfaces in favor of dependency injection and behavioral annotations.
 
We utilize the application model both statically and dynamically within our solutions. In the static file we define commands and handlers for Exit and Show View, define the add-ons we're including and specify the top level UI elements and corresponding renderer. The add-ons that we consume include:

- CommandServiceAddon
- ContextServiceAddon
- BindingServiceAddon
- CommandProcessingAddon
- ContextProcessingAddon
- BindingProcessingAddon
- Customized version of CleanupAddon - keep perspectives open when all parts have been closed
- Customized version of DnDAddon - disables detached views and forces the drop target to be a perspective
- Customized version of MinMaxAddon - removed the minimize button from views

{% img center /assets/2014-03-18-migrating-from-eclipse-3.x-to-eclipse-4.x-the-iaware-story/iaware-e4xmi.png iAware e4xmi %}

The remaining UI elements, perspectives and parts, are contributed to the model dynamically through our application and gadget frameworks.
 
Within our application we have a couple of shared UI areas that reside outside of the perspective area and as such we needed to define a custom renderer factory for our container to achieve the same functionality that was found using IWorkbenchWindowConfigurer#createPageComposite(org.eclipse.swt.widgets.Composite) in 3.x.

Our renderer factory also removes the QuickAccess search field, a piece of functionality we don't want to include in our applications

The following diagram represents our UI model:

{% img center /assets/2014-03-18-migrating-from-eclipse-3.x-to-eclipse-4.x-the-iaware-story/iaware-ui-model.png iAware UI Model %}

The top pane, generally holds our navigation bar and toolbar contributions including lock and refresh. The bottom pane, generally holds our notification tray and status line UI elements. The iAware teams solutions don't currently make use of the left or right pane in any of our solutions but leave those options open to others building their own solutions.
 
The final piece of the uplift was to go through our various platform projects that were either implementing 3.x interfaces or were relying on singletons or static access to PlatformUI and use injection and behavioral annoations. This included changing our part implementation to no longer be an IViewPart and instead have it use the behavioral annotations @PostConstruct and @Focus.

We also wired in a lifecycle hander to make use of @PostContextCreate and @ProcessAdditions across our registries (namely our perspective, gadget) instead of being tied to the calls from the WorkbenchAdvisor and WorkbenchWindowAdvisor.

We also began use of the @Execute and @CanExecute annotations with a feature that we added to our gadget framework that allows solutions to contribute toolbar buttons for their gadgets.
 
One annotation that we don't make use of is the @Persist annotation as persistence is a feature that we avoid because we require users to start with a clean state each time they run the application.
  
That brings me to that last topic, where do we go from here. We've begun the evaluation of 4.3 and have the evaluation of 4.4 on our roadmap when it becomes available.
 
Specifically we're working to bring in 4.3 before June in response to some changes to the rendering of menus that occurred between 4.1 and 4.2. We still define our menu items through extension points in a plugin.xml file and we'd created an abstract class that allows other solutions to change the default menu text that we provided (most wanted to change 'iAware' to 'File'). Our application class then used this abstract class and the setText method on the menu item to change the text; however, we found in 4.2 that menu items that come from plugin.xml couldn't be changed in this manner. So, when we make the move to 4.3, we'll also change our menu contributions to come from the application model instead of extension points.
 
We will also re-evaluate workarounds that we've added for earlier versions that are now fixed in the main line.
 
The final item is something we've already been working on for a little while know but are really going after hard this year is moving to P2. We released our last version using features and products and we're continuing to play with how we can best leverage them to deliver our solutions to clients.
 
The introduction of Eclipse 4.x represented somewhat of a turning point for our team. While the process of uplifting was challenging at times, it was a great learning experience and it provided us the ability to enhance the functionality of the iAware platform, which was a huge benefit to our teams developing solutions. Integral to our ability to enhance the iAware platform was the fact that with 4.x we’re able to use native API where previously we wouldn’t have been able to accomplish it or it required us to use a workaround, usually entailing use of internal classes.  The work also lead to more involvement and participation in the Eclipse community by our team. We were involved in discussions in the forums, logged bugs and provided patches, which is a positive for all involved.
