---
title: "Identifying Network ACL Issues with Chef Locally"
authors: []
author:  Aaron Blythe and David Crowder
date: 2015-11-17
tags: [engineering]
---

At Cerner, we use [Chef][chef] to automate our deployments across a very large distributed system comprised of many thousands of nodes. While we employ [ServerSpec][serverspec] and [Test Kitchen][test-kitchen] extensively to test our Chef recipes, this still doesn't identify all possible failure scenarios. In a large distributed system such as ours, we occasionally run into connectivity failures between machines due to network ACL issues. This could be due to a variety of reasons. The simplest being that you didn’t know what all you were connecting to. The second being that you didn’t ask for the ACLs to be opened early enough, or at all. And finally (and most frustrating), you asked and were granted an ACL change but there still exists an issue (like an unfollowed redirect). When we took a look at these issues, we saw an opportunity for improvement in our Chef testing.

This is why we created [ops_tcpdump_handler][ops_tcpdump_handler], an open source Chef cookbook that is helping us identify network connectivity issues during Chef test runs.

As explained in the project README, when you add this cookbook into a Test Kitchen or [Vagrant][vagrant] run list, you'll see an output similar to below that shows connection attempts between nodes. This will not only help you understand what nodes you're connecting to in a Chef run, but also diagnose any connectivity issues that arise.

```
==> node01: attempted to connect to: proxy06.fedoraproject.org using http
==> node01: attempted to connect to: mirror.sfo12.us.leaseweb.net using http
==> node01: attempted to connect to: li63-48.members.linode.com using https
==> node01: attempted to connect to: 23.235.40.133 using https
==> node01: attempted to connect to: github.com using https
==> node01: attempted to connect to: codeload.github.com using https
==> node01: attempted to connect to: s3-1.amazonaws.com using https
```

We're currently using this cookbook in our Chef test runs to identify and help troubleshoot connectivity issues between nodes. Next, we're going to incorporate this into our continuous delivery pipeline to verify connectivity first before proceeding with the deployment. We decided to open source this work to get feedback from the community and to hear your experience with these types of issues. We'd love to hear your experience with incorporating this cookbook into your pipeline or other approaches you've taken with these types of issues.

[chef]: https://www.chef.io/
[serverspec]: http://serverspec.org/
[test-kitchen]: http://kitchen.ci/
[ops_tcpdump_handler]: https://github.com/cerner/ops_tcpdump_handler
[vagrant]: https://www.vagrantup.com/
