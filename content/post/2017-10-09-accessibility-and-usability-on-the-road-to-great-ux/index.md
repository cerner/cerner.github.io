---
title: "Accessibility and Usability: On the Road to Great UX"
authors: ["Rebecca Green, Amber Wilks"]
date: 2017-10-09
tags: [accessibility, usability, midwestux]
---

In 2010, a group of designers from Columbus, Ohio set out to create a grassroots, cross-discipline, and creative conference. Since that first event, Midwest UX has been an ongoing tradition that attracts innovative ideas and provides an opportunity for regional professions to engage in discussion with other professionals. Last year, Amber Wilks and Dr. Becca Green were invited to take their talk from DevCon 2016 on the road to Midwest UX. On October 20, 2016, they presented Accessibility & Usability: The Equality of Experience in Louisville, KY.

At Midwest UX, the talk covered all of the great content from DevCon enhanced by examples of how accessibility specifically affects our solutions used by our consumer market or clinical staff. Each point covered demonstrated how UX and development work together to achieve an accessible software solution and the importance of crafting equally awesome experiences for all of our users. When people talk about accessibility, there are some common myths that go along with the topic. So the talks starts off by covering three myths of accessibility that have impacted the health care community, and Cerner in particular.

The first myth covered was that project teams look at accessibility as a minefield they must cross to achieve accessible software. The truth is that it is simply a blend of legislation and regulation that aims to eliminate barriers in technology for people with disabilities. In fact there are two main forms of standards used in the U.S. to define accessible content, Section 508 and W3's Web Content Accessibility Guidelines. While they serve similar purposes, there are some very key differences. They different in terms of the technology they cover, the organization of the guidelines, and their application. However, they are just a small part of a landscape of legislation and regulation that make up accessibility.

The second myth covered the assumption that accessibility is all about screen readers and alt tags. In reality, screen readers are just a small subset of assistive technologies. Low-vision or blind users only make up a small slice of all U.S. citizens with disabilities. There are a variety of assistive technologies to aid every type of disability. The third and final myth we covered is specific to the healthcare industry; that clinicians aren't disabled so accessibility isn't a priority for our users. The truth is that clinicians are not immune to disabilities. In fact, a study in the British Journal of General Practice that found that the proportion of male doctors with color vision deficiency was at 8%, in line with the percentage of the general population.

As the guidelines for accessibility have evolved, so has the organization of these guidelines such that they can now be organized into 4 tenant principles: perceivable, operable, understandable, and robust. 

### Perceivable 

Information and UI components must be presented in ways users can perceive. In other words, information can't be invisible. We do that by making information distinguishable and by providing alternative forms of content. 

To make information distinguishable, the foundations involve color math and text zoom. To create distinguishable information using color there are two mathematical calculations that can be used to ensure the content is both legible and discernible. To ensure the content is legible, Cerner follows WCAG's (Web Content Accessibility Guidelines) color contrast guidelines include Guideline 1.4.3, which states that "the visual presentation of text and images of text has a contrast ration of at least 4.5:1." To check if your information is legible, the WCAG recommends using the WebAIM Color Contrast Checker. This tool simply requires that you enter in your text, or foreground, color and background color and it will tell you to what degree you meet the contrast guidelines. 

The second calculation ensures users can perceive changes in the content. While this calculation is not part of accessibility guidelines, we leverage the calculation as a baseline metric for interaction indications (i.e., hovers, click states, icons, etc.). This numerical value starts at 0 and the higher the number, the greater the difference between two colors. We recommend a minimum value of 3.5, which represents an obvious difference.

The other part of having distinguishable content is allowing for text zooming. In the U.S. alone, 8.1 million people have a vision disability. In March 2013, WebAIM conducted a survey of users with low vision, which found that the bulk of accessible technologies used by these individuals included some form of text resizing. Text zooming is a method used to scale text up and down while retaining the screen formatting and layout. A successful text zoom is when the content can be resized up to 200% and everything on the screen scales uniformly and scroll bars are provided if needed.

The second part of providing perceivable content is to provide content that supports all the senses. A video may require a paired audio supplement. An audio file may require a written transcript. Just like the transcript we provided with our talk. While people with vision disabilities are a small slice of the population, those with hearing disabilities make up a larger portion and are more likely to be employed. So it's far more likely that a user would need supplemental text than they would be using a screen reader. 

One of the most common ways to provide alternative content is through captioning. Captioning is the transcription of speech and important sound effects. Not to be confused with subtitling which is a written translation of dialogue.  

### Operable

UI components and navigation must be operable. In other words, the UI cannot require an interaction that a user cannot perform. Most assistive technologies used by people with disabilities emulate how a keyboard functions. So a good rule of thumb is that if it can be navigated with a keyboard, then it is accessible. Operability is about giving the user control with controls to pause, stop, and hide moving, blinking, or scrolling content. 

### Understandable

Information and the operation of the user interface must be understandable. In other words, the content and operation cannot be beyond a user's understanding. Users consume content in a variety of ways and we must be flexible to accommodate all of the different ways they might access information. Therefore, it's important to ensure that content is housed in a structured framework to facilitate navigation. 

As part of the talk, an example of the experience a screen reader user might have while navigating a well known and popular website is presented. This set of videos demonstrates some of the common problems found with navigation such as duplicate links, ambiguous link names, and long navigation. The results of an automated accessibility tool are presented to highlight that not only are automated tools important for assessing accessibility but that it also requires a manual component.

### Robust

Content must be robust enough that it can be interpreted reliably by a wide range of user agents. In other words, user must be able to access the content as technologies advance. Since there are a lot of different types of assistive technology, as these technologies change, so does the landscape of accessibility. Being future friendly isn't as hard as keeping up with technology. It's actually as easy as sticking to "the basics."

* Write valid code
* Optimize navigation
* Stick to standards
* Stay away from known hazards

The key to crafting equally compelling experiences for all is the concept of Universal Design. Universal design is the design and composition of buildings, products, and services so they can be accessed, understood, and used by all people. It's an inclusive approach to design. When you design for the average person, you're actually designing for no one. We are each unique and have different needs. We want to encourage you to not think of accessibility as a flat, one-size-fits-all solution but instead as a multifaceted, configurable space. It's more than just what's on the screen though. It's about the environment and the users in that environment. 

