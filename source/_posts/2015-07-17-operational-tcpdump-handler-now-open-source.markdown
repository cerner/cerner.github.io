---
layout: post
title: "Operational tcpdump Handler Now Open Source"
date: 2015-07-17
tags: [engineering]
---

Written by [Aaron Blythe](engineers/aaron-blythe) and [David Crowder](engineers/david-crowder)

In the Enterprise, one of the most frustrating things that can be encountered at deployment time is to fully cover all of the logic of your Chef cookbooks with awesome ServerSpec/Test-Kitchen testing, only to have your cookbook fail in production because ACLs were not opened.  This can happen because of a few reasons that we have encountered.  The simplest being that you didn’t know what all you were connecting to.  The second being that you didn’t ask for the ACLs to be opened early enough, or at all.  And finally (extremely frustrating) you asked for the ACL, it was granted and set up, however there was a redirect when you got to the actual moment that you never dug into… grrr…  We run into this too often at Cerner.  However as with all identified repeatable errors there is opportunity for improvement.

This is why we put together our Operational tcpdump Handler  https://github.com/cerner/ops_tcpdump_handler

As shown in the readme, you can simply add this Handler cookbook into a Test-Kitchen or Vagrant run list and come out of the run of your cookbook with a list similar to:

    ==> node01: attempted to connect to: proxy06.fedoraproject.org using http
    ==> node01: attempted to connect to: mirror.sfo12.us.leaseweb.net using http
    ==> node01: attempted to connect to: li63-48.members.linode.com using https
    ==> node01: attempted to connect to: 23.235.40.133 using https
    ==> node01: attempted to connect to: github.com using https
    ==> node01: attempted to connect to: codeload.github.com using https
    ==> node01: attempted to connect to: s3-1.amazonaws.com using https

We believe over time that we will have this fully integrated into our Continuous Delivery pipeline to then check connectivity of the list to stop before going forward with a doomed deployment.  However we are not there yet.  We wanted to open source this to get the community discussion going.  We would love to hear how you could build this cookbook handler into your pipeline, or how you would build a similar better 
