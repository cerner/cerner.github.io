This site is built with [Hugo](https://gohugo.io/). You will need to have it installed for running the site locally.

This project contain two branches:

* source: This contains the source code of the site. This is the only branch you should modify.
* master: This is generated from the source branch and is what is deployed to http://engineering.cerner.com. This should never be modified manually.

# Setup

```
git clone git@github.com:cerner/cerner.github.io.git
    cd cerner.github.io
    git checkout source
    bundle install

# Running Locally

```
hugo server
```

# Contributors

## Writing a New Blog Post

**Remember: Only make changes in the `source` branch!**

### Blog Post

First, add a new file in `/content/post/{yyyy-mm-dd}-{name}.md`

The yyyy-mm-dd should be the day in which your blog post will go live. Copy one of the existing blog posts to ensure that you retain the proper metadata at the top of the post.

If your blog post has images, place them in the /source/assets/{yyyy-mm-dd}-{name} folder (the name should match your blog post markdown file).

## Submitting a Change

1. Make your changes to the *source* branch
2. Test your changes locally
3. Submit a pull request to the source branch with your changes

Once your pull request is accepted, someone with commit privileges will regenerate the master branch and push to Github. Your changes will then be live.
