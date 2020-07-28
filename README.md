# Engineering Health Blog

This site is built with [Hugo](https://gohugo.io/). You will need to have it installed for running the site locally.

This project contain two branches:

* `source`: This contains the source code of the site. This is the only branch you should modify.
* `master`: This is generated from the source branch and is what is deployed to http://engineering.cerner.com. This should never be modified manually.

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

When writing a blog post, all content is contained in the `source` branch. Content is then generated into the `master` branch for site generation.

### Blog Post

First, create a folder: `/content/post/{yyyy-mm-dd}-{name}` where name is a short name delimited by dashes.

First, add a new file in `/content/post/{yyyy-mm-dd}-{name}.md`

The yyyy-mm-dd should be the day in which your blog post will go live. Copy one of the existing blog posts to ensure that you retain the proper metadata at the top of the post.

If your blog post has images, you can place them in the folder

## Submitting a Change

1. Make your changes to the *source* branch
2. Test your changes locally
3. Submit a pull request to the source branch with your changes

Once your pull request is accepted, someone with commit privileges will regenerate the master branch and push to Github. Your changes will then be live.
