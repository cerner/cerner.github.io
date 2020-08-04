---
title: "We’re Back with a New Look"
authors: [ "Carl Chesser" ]
date: 2020-08-04
thumbnail: "new-blog.png"
---

If you have been to our blog before, you might notice that it has a new look. Our past version of the site was one that we had used for several years. It utilized [Jekyll](https://jekyllrb.com/) for the static site generation, which is a popular project that leverages the Ruby ecosystem. Over the last few months, we recognized that our site needed an update. This change wasn’t only with its look and feel, but also with what we used in building the site.

Today, we have uplifted our site to use [Hugo](https://gohugo.io/). We have been using this project internally for project documentation, and have found it to be a powerful, yet simple, static site generation tool. In this uplift, we wanted to make sure we could simplify our site generation to make it easier for other Cerner engineers to contribute to our site. To get this started, [Alex Bezek](https://github.com/alex-bezek) and I decided to leverage Cerner’s last virtual [ShipIt event]({{<ref "/tags/shipit">}}) to get through a first pass of the site. We were able to get through the first round of moving to Hugo, which greatly simplified generating the site, and it removed the additional burden of managing Ruby gem dependencies. We were also able to start reducing some issues we discovered in our site around accessibility, something that sparked our interest after listening to [Jennifer Luker’s talk on this topic](https://youtu.be/upB0NB-2nSA).

{{< figure src="new-blog.png" >}}

Thank you Alex Bezek for your help and the [Engineering Culture team]({{<ref "/post/devculture-team">}}) for giving feedback along the way. We look forward to sharing new blog posts in this updated site format!
