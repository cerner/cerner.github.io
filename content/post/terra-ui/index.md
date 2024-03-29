---
title: "Terra UI: A Health-Care focused UI Component Library"
authors: [ "Brett Jankord" ]
date: 2019-10-25
tags: [engineering, oss]
thumbnail: "2019-10-24-terra-ui-1.png"
---

{{< figure src="2019-10-24-terra-ui-1.png" width="300">}}

Back in 2013, like most other companies, Cerner was heavily invested in building user interfaces with Twitter Bootstrap. Around that time, [Dave Rupert wrote about the concept of Responsive Deliverables](https://daverupert.com/2013/04/responsive-deliverables/) and touched on a key concept, creating “Tiny Bootstraps, for Every Client”. Along with this, Brad Frost had started promoting the idea of [Atomic Design](http://atomicdesign.bradfrost.com/). We saw a lot of value in these ideas and saw that we needed to evolve how we were developing UI at Cerner. We could see that Bootstrap was no longer meeting our needs and we felt we needed to start the process of building our own "tiny bootstrap".

A small team was formed to begin work on a project named “Terra” to establish a component library for reusable UI patterns needed in our health care applications. We begin work building responsive, accessible, and internationalized components. The work was very similar to Twitter Bootstrap, but tailored to our specific needs at Cerner. We found great success and adoption with this new project but as tech evolved, we found our jQuery based UI components were showing a bit of age.

Fast-forward a few years, ReactJS and ES2015 had started to grow in popularity. At Cerner, we started to see more and more teams developing solutions with ReactJS. We could see that if we wanted to continue to provide consistent UI solutions that incorporated responsive design, accessibility, and internationalization concerns, we needed to evolve our component library.

We took this as an opportunity to build something new and share it with a wider audience. We decided to build a new version of our component library and base it on ReactJS. We also decided we wanted to make the project open source so anyone could help contribute to it. Today, we have a wide offering of UI components with a focus on health care applications in our open source component library, [Terra UI](https://engineering.cerner.com/terra-ui/).

## Who is Terra UI for?

Terra UI is developed with the goal of helping consumers (including many app teams across Cerner, as well as external consumers in the open-source community) focus their efforts towards higher-level app concerns. We've leveraged the expertise of our UX team to create attractive and intuitive UI components that provide a consistent look and feel backed by usability research. Additionally, we've put a heavy focus into abstracting styling, accessibility, responsive design, cross-browser support, and internationalization considerations into our components so that consumers can get their projects up and running quickly. Cerner is utilizing Terra UI for healthcare web applications at scale with great success. We're proud to make it available to other via open source and we hope you'll check it out. Keep reading below to learn more about how you can consume and/or contribute to Terra UI.

## Terra UI Ecosystem

The [Terra UI](https://engineering.cerner.com/terra-ui/) ecosystem covers three types of components.

### [Terra Core](https://github.com/cerner/terra-core)

A repository containing a collection of common UI components ranging from buttons, to alerts, to form components, and more needed for building accessible, responsive, and internationalized applications.

### [Terra Framework](https://github.com/cerner/terra-framework)

A repository that contains higher-order and composable UI components that build on top of terra-core components that help with application layout concerns and progressive disclosures.

### [Terra Clinical](https://github.com/cerner/terra-clinical)

A repository that includes clinically focused UI components that build on top of terra-core.

### Additional Terra Packages

Along with our component repositories, we provide webpack configuration and testing utilities via [terra-toolkit](https://github.com/cerner/terra-toolkit), linter configs for [stylelint](https://github.com/cerner/stylelint-config-terra) and [eslint](https://github.com/cerner/eslint-config-terra), a component doc site webpack plugin via [terra-dev-site](https://github.com/cerner/terra-dev-site), and [tooling to help aggregate application translations](https://github.com/cerner/terra-aggregate-translations).

## Getting Started

To get started, we recommend checking out [our guide to installing your first Terra UI component](https://engineering.cerner.com/terra-ui/getting-started/terra-ui/installing-components).

## Contributions

We welcome contributions to [Terra UI](https://engineering.cerner.com/terra-ui/). Check our [Github issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+repo%3Acerner%2Fduplicate-package-checker-webpack-plugin+repo%3Acerner%2Fterra-aggregate-translations+repo%3Acerner%2Fterra-clinical+repo%3Acerner%2Fterra-core+repo%3Acerner%2Fterra-dev-site+repo%3Acerner%2Fterra-enzyme-intl+repo%3Acerner%2Fterra-framework+repo%3Acerner%2Fterra-toolkit+repo%3Acerner%2Fgenerator-terra-module+repo%3Acerner%2Feslint-config-terra+repo%3Acerner%2Fstylelint-config-terra+repo%3Acerner%2Fbrowserslist-config-terra+repo%3Acerner%2Fterra-ui) for ways you can get started with contributing, and be sure to [check out our contribution guidelines](https://engineering.cerner.com/terra-ui/about/terra-ui/contributing/contribution-guidelines).

* NPM: https://www.npmjs.com/search?q=keywords%3ACerner%20Terra
* Site: https://engineering.cerner.com/terra-ui/
