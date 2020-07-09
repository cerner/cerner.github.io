---
title: Learn what the rules don't cover
authors: []
author:  Paul Conklin
date: 2013-04-19
tags: [engineering, operations]
permalink: /2013/04/learn-what-the-rules-dont-cover/
---

Most technical problems are like games.  All of them have a way to win and all of them have rules; the easiest way to ensure you always win is to learn the rules inside and out, and more importantly what the rules don’t cover!  Paying attention to what the rules don’t cover is what leads to out of the box thinking.  What sets the great players apart from the rest is learning what the rules don’t cover which allows for creativity and, sometimes, shortcuts.

Recently, I played a game similar to musical chairs. It was a game of diminishing resources (a management exercise) with about 12 of us and six large sheets of paper.  The only rules were: 1) Walk around while the music is playing and 2) Put your foot on a rectangle when the music stopped (he instructor pointed at one of the sheets as a visual queue).  When we first started, there was ample space for each of us to have a foot somewhere on one of the 2’ x 4’ paper.

As the game continued, the instructor started cutting the sheets into smaller and smaller pieces until we got down to 3" x 5".  Most of us were precariously trying to balance and keep a portion of a shoe touching the paper, a few just gave up, and two paid special attention to the rules and found an out.  One gentleman took at a business card and promptly stood on it.  Another just lifted his leg and put it up on the door.  We all were following the same rules but two found what the rules didn’t cover and won.

Most people think that Printing is easy.  You hit a button or Ctrl + P and the paper comes out, right?  This seamless process appears so to users because of the hard work that goes in behind the scenes.  So when I started down this path, I knew a strong foundation would be important. I settled on [CUPS](http://www.cups.org) as the basis for my brave new world of printing.  It is open source and has a pretty wide following.  It’s the basis for Apple printing, fairly hardened, and is the backbone of several educational systems printing making it enterprise ready.

The more I worked with it, the more I saw its full potential.  CUPS had turned out to be the most useful "Swiss Army Knife" in my toolbox.  It is extremely robust and easy to integrate / stack with other solutions.  One great example of this is my "Coffee CUPS" demo.

<iframe width="560" height="315" class="aligncenter" frameborder="0" src="https://www.youtube-nocookie.com/embed/WzEhKs_CvJc?rel=0" allowfullscreen></iframe>

I picked CUPS as the underlying backbone for my new architecture for the same reason.  It had the maximum amount of possibilities with the least amount of rules.  With a minimum amount of rules, it allows for the maximum amount of creativity.  Sure, I could develop my own solution from the ground up where I get to make the rules and have unlimited creativity, and I have had to do that in the past.  In general, if you write your own software, you have the least amount of rules (constraints of the compiler).  OpenSource Software is a close second with few limitations.  Closed source 3rd party software usually has the most rules (ever read a EULA in your life?).  When selecting a solution to a problem, it’s also important to do a cost benefit analysis.  Is it really worth reinventing the wheel?  I’m often reminded of the below picture.  I’ve seen several variations of it over the years (Credit to the picture unknown, but it wasn’t me).

CUPS handles a lot of the general architecture that doesn’t need to be re-invented on either end of the spectrum (managing print queues, accepting jobs, sending jobs to printers, etc) but allows for a lot of creativity in the middle (the middle being what is done to the print job in between getting it from the user and sending it to the printer).  A good example of this (filters) can be found [here](http://en.wikipedia.org/wiki/File:Cups_simple.svg).  CUPS gives you an overall framework of how it will call a filter, and what it expects as a return, but beyond that, it’s up to the programmer.  You can write in pretty much any language you want and alter the print job as much as you want.  I leveraged this to maximize the amount of devices I could talk to and input file types I could accept, while also being able to make business decisions based on the content of the print job.

{% img center /assets/2013-04-19-learn-what-the-rules-dont-cover/HPRW2.jpg HPRW2 %}

_Source: www.projectcartoon.com_

I think that picture aptly describes the disconnect in all of the processes that exist in problem solving.  So in addition to learning what the rules don’t cover, we need to be keenly aware of what you are trying to accomplish: what is the problem and the success criteria? How do we win the game?
