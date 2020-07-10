---
title: Clara Rules joins Cerner's open source
authors: []
author:  Ryan Brush
date: 2016-11-11
tags: [engineering]
---

Sometimes a small experiment on the side can grow into something valuable. We at Cerner have long
used forward-chaining rules engines to express and execute clinical knowledge, but we’ve also had to
extend or work around the capabilities of such engines. Engines targeting business users just
weren’t expressive enough to model some of our logic. To meet this need we are making Clara Rules an
open source project driven by Cerner Engineering.

Clara took an unusual path, starting as a minimal implementation of the 
[Rete algorithm](https://en.wikipedia.org/wiki/Rete_algorithm) to help my
own understanding. After sharing this with others at Cerner, we started to see an opportunity to
gain the modularity and reasoning advantages of a rules engine, while preserving the expressiveness
and power of a modern programming language. We wanted to combine the best ideas of rules engines
with good software engineering practices. You can see the result of this on the 
[Clara Rules home page](http://www.clara-rules.org).

[Mike Rodriguez](https://github.com/mrrodriguez) has been essential in turning Clara from an 
experiment into a valuable system to fill a gap for rules engines which are oriented towards 
developers. More recently, [Will Parker](https://github.com/WilliamParker) 
has also made significant contributions to help make Clara fast and reliable. They made it possible for Clara
to help analyze millions of medical records every day. Therefore Mike and Will are joining as the
initial committers to Cerner Engineering’s Clara project. We will welcome other contributors to make
this step in the future.

You can find project [source code on GitHub](https://github.com/cerner/clara-rules), and the 
documentation on the [clara-rules.org](http://www.clara-rules.org) site.