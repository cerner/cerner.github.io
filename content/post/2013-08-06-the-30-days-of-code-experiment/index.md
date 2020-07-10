---
title: The 30 Days of Code Experiment
authors: []
author:  Carl Chesser
date: 2013-08-06
tags: [culture, engineering]
permalink: /2013/08/the-30-days-of-code-experiment/
thumbnail: "30-Days-of-Code.png"
---

In software development, we solve problems. As we solve these problems, we build connections in our minds of how to look at a problem, relate it to previous problems and solutions, and re-apply past approaches and techniques.

These behavior habits build dogmatic ways of thinking and limit design choices to selective technologies we’ve used in the past. As we all know, you have to continually learn new technologies and different ways of thinking to stay current in the ever-changing landscape of software development. Unfortunately, keeping up-to-date on technologies and approaches isn’t an easy behavior to maintain when you have many other priorities.

This spring, a few engineers wanted to bring focus to this important behavior trait by giving a tech talk on "Honing your Craft," which discussed how to continuously strengthen and refine skills. Not only did we want engineers that we work with on a daily basis to be part of the tech talk; we wanted engineers from other teams at Cerner to be involved too. Also, we didn’t just want to talk about it; we wanted to pose a challenge to put people into action and re-enforce these behaviors.

At the end of the talk, we announced the challenge: 30 days of code. It was a challenge like many other "30 day" programs but was centered on learning new aspects of software development, languages, or just hacking up a tool that you find useful for your day-to-day development. The goal being that after 30 days, new habits and behaviors would be established to help promote continuous learning.

To make this a social learning experience, we built a Ruby web application called "mural" using async_sinatra and eventmachine to consume our GitHub Enterprise instance and show gists, which contained a code comment of "30_days_of_code". The result was really interesting. Similar to Twitter, where you follow a specific hashtag, we were following code snippets of fellow developers. Since most of them were gists, they were small enough so you could easily see what they were doing (without having to go through a mountain of code). With this dashboard, a score was calculated based on count of your posts and was displayed with your avatar. Having scores displayed in descending order added a little peer pressure to keep people active in challenge.

{{< figure src="30-Days-of-Code.png" alt="'30 Days of Code'" >}}

By the time I got back to my desk, I received questions of where the URL was to see the app, so they could verify their posts were showing. Soon, people wanted GitHub repos to show up with gists, so a pull request was requested for that. We then wanted anonymous gists to also get pulled in, which required developing our own crawler since these were exposed on the gist search. It was apparent that people wanted to share what they were doing, and people wanted to see it.

At the end of the challenge, we returned to the auditorium to highlight some of the posts that came in over the past month. During the 30 days, we had 124 gists posted and 17 different contributions in repos. People were showing their skills over a wide range of technologies. Examples were:
	
* Building a plugin to invoke Jenkins commands over a phone (using Siri)

* Ruby scripts that interact with our Github Enterprise instance API that will send out emails when pull requests or branches are getting old (executed periodically through Jenkins)

* Clojure application that looks for pull requests based on Github organizations, which have two "+1" comments (alerting which pull request may be candidates to close out)

* Illustrating Crucible code interactions by extracting data with python and visualizing with D3
Using Node.js to flash lights on a Raspberry Pi when a health check from web service is failing

* Presenting statistics from a storm cluster with Rickshaw

Eleven people presented what they worked on and learned. It was amazing to see all of the different ideas people came up with in this time frame.

Even more interesting was how quickly people learned from the ideas of others. Not only were developers sharing their code snippets, but they were also sharing the problem they were attempting to solve or the idea of what they wanted invent. For example, the Ruby script which alerted the last committer of a dead branch through email, spawned into other implementations that would send alerts based on different pieces of Github data (ex. old pull requests). Sharing these ideas in their early stages (through code snippets) really accelerates the rate that an idea can be seeded in other minds and helps inspire even more innovation and learning.

This wasn't only a challenge of what we would build, but it was also an experiment of what can happen by taking a small portion of your day and doing something different. By structuring this exercise around a formal challenge that included a competitive aspect, there was additional motivation to get involved and stay involved to the end.

In summary, find a way to take a little time out of your day to try something different; you will be amazed with the different perspectives that you gain.
