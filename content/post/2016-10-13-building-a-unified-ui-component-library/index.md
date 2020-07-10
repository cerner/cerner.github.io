---
title: "Building a Unified UI Component Library: Lessons Learned"
authors: ["Rory Hardy"]
date: 2016-10-13
tags: [UI, UX, library, development, programming, JavaScript, CSS]
---

Cerner is building an open source, mobile-first user interface component library for healthcare applications. Pulling years of experience and lessons learned across multiple teams together, we are creating something great. We are very excited to bring this solution to the public and to be contributing back to the community!

We didn’t simply decide to create this library, we started with segmented UI libraries focused on different aspects of the company which had smaller isolated needs. Mistakes were made along the way and we have learned much from them. Let’s take a look at where we started and how we got to where we are now.

## History
In 2013, a group of engineers with strong front-end skills was put together with the task of creating a reusable component library for Cerner’s HealtheIntent platform. Twitter Bootstrap was used initially, but quickly outgrown as the needs and designs of UX expanded. The project this team built is called Blue Steel. It featured everything from simple typography to interactive data visualizations while adhering to UX guidelines and requirements.

Blue Steel is a Rails gem that provides some basic helpers, CSS, JavaScript, and site templates to simplify layout and correct HTML usage. Blue Steel abstracts complex components to keep things simple and because we didn’t feel it was necessary to abstract native HTML elements.

In its infancy, the project was well received; other platforms saw the value and wanted to take advantage of the work being done. To accommodate the additional platforms, Blue Steel was merged with another internal UI library called Style Guide. The best features of each library were pulled together, sometimes one overriding the other, sometimes merging feature sets. The merged project was called Terra.

## Problems
The approach of merging existing components saved time up-front, but came with a steep cost. The library was fragmented in the approaches taken during design and development. As such, it became difficult to work on without pre-existing familiarity. It was fairly obvious that we put two frameworks together on a time constraint.

Blue Steel still exists but is comprised primarily of Terra components. It persists to provide HealtheIntent-specific styles and functionality, while also being a Rails wrapper around Terra. Terra has been historically kept below version 1.0.0 for rapid development, while Blue Steel has been above 1.0.0. This strategy has caused a lot of pain for the consumers of both Terra and Blue Steel.

Keeping Terra below version 1.0.0 allowed breaking changes to occur without cutting a major release. Although this made development easier in some aspects, it damaged consumer trust. We always attempted to communicate breaking changes, but it didn’t always happen and it wasn’t always clear. Any time a team had to upgrade, they had to be prepared to fix their application which caused them not to trust us.

The issue was even worse in Blue Steel since it had to accommodate for Terra’s breaking changes. Blue Steel would consume a version of Terra with breaking changes and would still release as a minor update by providing styles and hooks to work around the breaking changes. Deprecation schedules and documentation were written to help keep Blue Steel backwards compatible. Unfortunately, it often wasn’t; sometimes, breaking changes would only manifest in an application. 

Blue Steel and Terra were both tested separately with their own documentation sites. These tests were extensive and thorough but could not accommodate the complexity of the various applications consuming them. Breaking changes would creep into applications even when we thought everything was backwards compatible in Blue Steel.

In Terra, the preference was to style on HTML elements, states, and ARIA-roles whenever possible since they carried far more meaning than CSS classes. Unfortunately, this form of styling is somewhat global in nature. It was easy for style collisions to occur between components within Terra, consumer styles, and 3rd party libraries.

Terra was developed in such a way that it discouraged consumers from building custom components. The thinking was that applications would write little to no custom CSS or JavaScript. This didn’t scale well as needs evolved and application developers had to move ahead of the UI library. Terra components had a very high CSS specificity and were difficult to override which forced consumers to write even more complex CSS to override it. In turn, many bugs were introduced to consumer applications.

Terra was also built as a monolith with very little modularity in place. Consumers had the option of taking it all, figuring out how to make a custom build, or not using it. This caused applications which only needed a subset of functionality to become bloated.

## Solutions
Today, Terra is in the process of being open sourced. We’ve looked extensively at the issues above and are taking measures to address all of them:

- Each component is in its own repository.
- The SUIT CSS convention is being used for all Terra components.
- Base componentry is being developed first.
- Components are being kept minimal and composable.
- Each component is being built to be a minimum viable product and released as 1.0.0 to follow [SemVer] up front.
- Only as components become complex and specific do we introduce framework opinionation. Base components will be framework agnostic.
- Everything will have helpers to abstract underlying HTML structures.

SUIT CSS bans the use of styling hooks which are considered global and effectively breaks the cascade in a global sense (you can leverage it within a component). At the root node of each component, only classes can be used. As a result, consumers can rest easy knowing that styles will not leak out of components and they have low specificity which allows them to be overridden as needed.

By starting with base components (buttons, images, etc), we effectively create a set of building blocks to build more complex web components. By keeping them small, composable, and framework agnostic, they can be used anywhere with confidence. Following [SemVer] from the start will boost consumer confidence when using our components.

Introducing opinion into more complex components enables us to build better and more maintainable components with our most common use cases in mind. This does not preclude consumers who do not wish to consume the frameworks and libraries we use. By keeping each component in its own repository, it’s possible to create alternative versions of componentry to meet application needs. Additionally, keeping each component in its own repo allows for individual versioning, limiting scope of change, and makes it very easy for consumers to omit what they don’t need.

Finally, providing helpers for all components will enable easy and consistent development. It will be possible to build complex components solely out of the smaller components leveraging helpers to output the correct HTML. The abstraction also makes it possible to update the implementation in a compatible way while making it so developers don’t have to be aware of complexities like semantic HTML and accessibility. This will enable developers to build solid applications easily and quickly.

## Lessons Learned

- When creating a reusable library, avoid global state or styles.
- Create an abstraction or facade to the underlying implementation regardless of simplicity.
- Keep your library modular.
- Start with [SemVer] and stick to it.
- Start simple then reuse and compose.
- Keep your library cohesive by developing consistently across components.
- Don’t build with any particular framework(s) in mind when you can; the web is constantly evolving.

We’ve learned a lot and are excited to open source the results of our work and learning. Keep an eye on [github.com/cerner](https://github.com/cerner/) and [engineering.cerner.com](http://engineering.cerner.com/) while we build out this new library. It’s going to be great!

[SemVer]: http://semver.org/
