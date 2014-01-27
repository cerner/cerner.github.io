See the documentation for [Octopress](http://octopress.org/docs/) and [Jekyll](http://jekyllrb.com/docs/home/) for more information.

# Setup

    git clone git@github.com:cerner/cerner.github.io.git
    cd cerner.github.io
    git checkout source
    bundle install

# Running Locally

    rake preview

# Deploying Changes

First, push your changes to the site source

    git checkout source
    git push origin source

Next, generate the site content and deploy it to Github

    git clone git@github.com:cerner/cerner.github.io.git _deploy
    rake generate
    rake deploy

# Keeping Up-to-date with the latest Octopress Changes

    git remote add octopress https://github.com/imathis/octopress.git
    git checkout source
    git pull octopress master
    bundle install
    rake update
    git status
    git push origin source
