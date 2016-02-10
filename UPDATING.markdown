See the documentation for [Octopress](http://octopress.org/docs/) and [Jekyll](http://jekyllrb.com/docs/home/) for more information.

This project contain two branches:
- source: This contains the source code of the site. This is the only branch you should modify.
- master: This is generated from the source branch and is what is deployed to http://engineering.cerner.com. This should never be modified manually.

# Setup

    git clone git@github.com:cerner/cerner.github.io.git
    cd cerner.github.io
    git checkout source
    bundle install

# Running Locally

    rake preview

# Contributors

## Writing a New Blog Post

**Remember: Only make changes in the source branch!**

### Blog Post

First, add a new file in /source/_posts/{yyyy-mm-dd}-{name}.markdown

The yyyy-mm-dd should be the day in which your blog post will go live. Copy one of the existing blog posts to ensure that you retain the proper metadata at the top of the post.

If your blog post has images, place them in the /source/assets/{yyyy-mm-dd}-{name} folder (the name should match your blog post markdown file).

## Submitting a Change

1. Make your changes to the *source* branch
2. Test your changes locally
3. Submit a pull request to the source branch with your changes

Once your pull request is accepted, someone with commit privileges will regenerate the master branch and push to Github. Your changes will then be live.

# Committers

### Deploying Changes

First, push your changes to the site source

    git checkout source
    git push origin source

Next, generate the site content and deploy it to Github

    git clone git@github.com:cerner/cerner.github.io.git _deploy
    rake generate
    rake deploy

### Keeping Up-to-date with the latest Octopress Changes

    git remote add octopress https://github.com/imathis/octopress.git
    git checkout source
    git pull octopress master
    bundle install
    rake update
    git status
    git push origin source
