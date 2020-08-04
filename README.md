# Engineering Health Blog

This site is built with [Hugo](https://gohugo.io/). You will need to have it installed for running the site locally.

This project contain two branches:

* `source`: This contains the source code of the site. This is the only branch you should modify.
* `main`: This is generated from the source branch and is what is deployed to http://engineering.cerner.com. This should never be modified manually.

## Setup

```
git clone git@github.com:cerner/cerner.github.io.git
cd cerner.github.io
git checkout source
```

# Running Locally

```
hugo server
```

# Contributing

## Writing a New Blog Post

When writing a blog post, all content is contained in the `source` branch. Content is then generated into the `main` branch for site generation.

To create your new post, you can use Hugo's archetype for the new post:

```bash
# Replace {name} with the short name of your post
hugo new post/{name}/index.md
```

This file will then be created with the following examples if we used "hello-world" for the `{name}`.

```markdown
---
title: "Hello World"
date: 2020-08-03
authors: [""]
thumbnail: ""
tags: []
---

```

* Update the `title` to match what you are wanting specifically for your title.
* Update the `date` to be the planned publish date for your blog post. 
* Add the names of the authors to the `authors` array.
* Add any images you want to use for your blog post to this created directory. You will want to assign the `thumbnail` attribute with the filename of the image you want on the preview of the post.
* You may add strings to the `tags` array; however, this is an optional field and should only use it if it makes sense to tag for a common set of posts (like "devcon" or "shipit").

### Authors

When adding authors, it is recommended that you add information about the author, which would include a profile photo. This can created with the following archetype:

```bash
hugo new authors/{first}-{last}/_index.md
```

You will want to add a photo of you to this directory. You can then edit the `_index.md` with the basic metadata. Here is an example:

```markdown
---
name: "Jane Doe"
images: ["jane.jpg"]
---
```

You can add your `twitter` handle if you want, but that is an optional field.

## Submitting a Change

1. Make your changes to the *source* branch
2. Test your changes locally
3. Submit a pull request to the source branch with your changes

Once your pull request is accepted, someone with commit privileges will regenerate the `main` branch and push to Github. Your changes will then be live.
