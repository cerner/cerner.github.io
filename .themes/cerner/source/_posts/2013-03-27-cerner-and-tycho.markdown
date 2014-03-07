---
layout: post
title: Cerner and Tycho
author: Jonny Wright
author_url: jonny-wright
date: 2013-03-27
tags: [engineering, operations]
permalink: /2013/03/cerner-and-tycho/
---

## Introduction

[Tycho](http://eclipse.org/tycho/) is a build tool for integration between [PDE](http://www.eclipse.org/pde/) and [Maven](http://maven.apache.org/).  Cerner has a long history of working with [Eclipse RCP](http://www.eclipse.org/home/categories/rcp.php"") but [P2](http://www.eclipse.org/equinox/p2/) integration is something of a more recent phenomenon.  This post is going to talk about how Cerner is using Tycho, what prompted our transition to Tycho and how we accomplished moving our build to using Tycho.

## Why we use Tycho

The first question when evaluating any tool is asking yourself: "why would I use that"?  In our case, Cerner already has an extensive Maven ecosystem.  For years it has been common practice, when developing Java, to use Maven as the go to build, site, and deployment tool.  What we needed was a set of extensions that allowed us to use all the facets of Maven while creating PDE artifacts.  Traditionally, the set of PDE artifacts that we needed to create and manage was limited to products, targets, and bundles.  Using the Maven conventions, we could build out all of these PDE artifacts while allowing the Maven POM to be the single source of truth for most build projects.  This worked well enough until we needed to rework our assemblies to be comprised of features, inserting another PDE artifact into the build lifecycle.

When we first began RCP development, no tooling existed to help us with creating PDE artifacts through Maven, so we created our own.  When the time came to start integrating additional PDE concepts, so that we could begin the path of integrating with P2 director, there was Tycho.

## How we use Tycho

We use tycho generally to build the following set of PDE artifacts:

* Products 
* Features 
* Mirrors + Targets 
* Mirrors 
 
While the mirrors are not technically Eclipse artifacts, we use Tycho to mirror the Eclipse (for now Juno) repositories so that our builds are not hammering the Eclipse update site.  When you have 10's to 100's of users updating targets and running builds, it is just common courtesy to have your own mirror.

### Features

We began our journey with Tycho by using it to generate P2 repositories from feature definitions.  The bulk of the heavy lifting is accomplished through the use of the tycho-packaging-plugin (as well as the base plugin, tycho-maven-plugin).  Since we deploy all of our plugins through maven, it is ideal to have Maven (Tycho in this case) do the dependency resolution for us and fill out the contents of our feature.  It also does all the work of turning that feature into a p2 repository.  

This was actually a nontrivial exercise for us.  While we could have used a single feature definition, we tightly controll the dependencies that are pulled into our assembly.  Therefore, as we looked to breakdown our feature definition it was more complicated than simply pulling in the Juno feature and heaping everything into a feature on top of that.  Since we only use a subset of the Eclipse platform, we only want to pull forward the pieces we use explicitly (we also ran into some rather strange behavior with the Eclipse Jetty features).  We wanted to define the features in such a way that consumers of our platform could select a single feature that represented our core platform + Eclipse (as well as layer in additional functionality related to building their application).  In the end, we defined a set of about 20 features that rolled into a single working repository.  This way, consumers only needed to know the location of a single repository and then could use the metadata in the features to determine which features they needed.

### Products

Starting at features made sense because there was no existing infrastructure for us to overhaul to build out the features.  The products were a different story.  With the products, we had an entire set of plugins that managed which version of Eclipse was pulled in for the product, how the .product was generated, and how we rolled that into an .exe.

The extra time we took in order to define the features thoroughly actually made this process significantly easier.  Today, we build a set of 8 applications:

* CareAware Criticalcare Dashboard
* CareAware Criticalcare Personalized
* CareAware Infusion Management Dashboard
* CareAware Infusion Management Personalized

Each of these products also has a corresponding mock build (where we substitute in mock resources to populate data for our views).  The definitions of these products was actually very simple and each ended up being around 8-10 features to create the product.  With the aggregated repository, we had a single repository in each POM where the versions for the features were determined and filled out.  Using the tycho-packaging-plugin and the tycho-p2-director plugin, we were able to automate the build of the corresponding p2 repositories which resulted from the Tycho builds.

### Mirrors + Targets

Being the kind citizens that we are, we didn't want to abuse the Eclipse p2 release repository (also we didn't want them to cut us off like Maven Central).  To be good citizens in this build world, we decided we needed to mirror the Eclipse repositories ourselves.  Luckily for us, Tycho developers had already anticipated that need!  By using the [tycho-p2-extras-plugin](http://wiki.eclipse.org/Tycho/Additional_Tools), we were able to easily automate the mirroring of the required features from the Eclipse release repository.  Score (another) 1 for Tycho.

As part of the process for deploying these mirrors, we actually used the build-helper-plugin to deploy .target files to point to the mirrors into our maven repository.

### Why not bundles?

The all important question: Why didn't we do bundles?  The two biggest things stopping us from uplifting our bundles was the lack of an easy way to incorporate non bundle sources into builds and the difficulty in generating sites with code coverage for projects that use both Java and Groovy (a sad state of affairs I don't recommend).  In the end, these hurdles plus the amount of time it would take to uplift our own projects to match the expected build structure was a significant overhaul.  We decided that, for now, the maven-bnd-plugin and m2eclipse can support our needs well enough for bundle development.

## From Custom Maven To Tycho

So I've mentioned throughout this blog post about how we moved from custom maven to tycho; so what does that mean exactly?  Back at the dawn of time (as I reckon it, others may know it as 2007), Cerner set down the path of doing Eclipse RCP development.  At the time, there weren't many good tools to automate your PDE builds.  Until very recently, most of the Eclipse projects have used Ant as their build system.  For our ecosystem and needs, it was Maven or bust.  So we set about creating plugins that would help us at all levels of the build.  Maven plugins were created for all of the following actions:

* Creating prodcuts
* Creating Manifests for bundles
* Running OSGi tests
* Generating OSGi diff reports (on the manifests)
* Accessing mirrored Eclipse instances
* Generating target platforms based on POM configuration
 
This turned out to be a rather extensive amount of work.  The model worked relatively successfully until a consumer came along with a set of requirements that read an awful lot like: "we'd like P2 integration included if we move to the iAware platform".  This threw a wrench in our system, because while P2 can work (and does) work by simply using .product files to define content sets, we had no tooling to generate P2 repositories.  We also had no mechanisms that would allow us to update only parts of their application (since this was 5 development teams working in tandem to produce a single assembly).  When all of this converged, we realized our build system had become insufficient and it was time to explore alternatives.  As you can see from the path we took, we started with the least intrusive changes and scaled up from there.  As of this blog, iAware is preparing for the first release using features and products.

## How do we deploy?

Get ready for one ugly POM configuration:

{% img center /assets/2013-03-27-cerner-and-tycho/P2-PomConfiguration-Edit2.png P2 POM Configuration %}

If that isn't enough to scare you, I don't know what is.  I wrote it and it terrifies me.  What it really means though is that I haven't found a great way for deploying p2 repositories as part of the maven build process.  Options exist, such as deploying the zip file of the repository into the maven repo or writing shell scripts to automate the deployment, but neither of these sat well with me.  So I went for the least distasteful choice and wrote some basic ant scripts :).

All in all, Tycho has become a large part of our development ecosystem.  This blog only really touches the surface, but Tycho has become integral at all stages (besides bundle dev) to managing our assemblies.  So, thank you Tycho contributors!
