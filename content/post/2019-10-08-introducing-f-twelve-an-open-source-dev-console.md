---
title: "Introducing F-Twelve, an Open Source Dev Console"
authors: ["Patrick Gross"]
date: 2019-10-08
images: ["/images/f-twelve-icon.png"]
tags: [engineering, oss]
---

{{< figure src="/images/f-twelve-icon.png" width="300">}}

Many modern web browsers come with tools that can help developers debug their websites. If you are using Google Chrome or Firefox for example, try pressing F12. A new panel should open containing various tools. These tools provide a look “under the hood” for the current page. Common tools include a JavaScript console, JavaScript debugger, DOM explorer, network request viewer, performance profile, local storage manager, and more.

Usually these tools are just a keypress away, but some environments don’t have browser tools. Alternate options exist such as Windows F12 chooser (which inspired the name F-Twelve) and Firebug Lite. These are nice but neither of them is a perfect solution. The former requires a certain version of Windows and the latter has not been updated in over 6 years. The kicker is, neither work inside an embedded IE frame. We ran into this issue while developing a [SMART on FHIR](https://fhir.cerner.com/) application. Local development in a web browser would go smoothly but then we’d deploy to our test environment which used an embedded IE frame and it would not work. This was frustrating because it gave absolutely no indication of what the issue could be. It was typically either a blank white screen, or an eternal loading icon. The only way to troubleshoot was making a guess, adding alert calls, redeploying, and hoping it had something useful. This situation was occurring frequently and very inhibiting to development. We didn’t have access to F12, so we wrote our own JavaScript tool, F-Twelve.

The initial version was simply a div at the bottom of the page that would print window.onerror events and anything sent to console.log. The functionality was very limited, but it solved our problem of being able to identify errors. Since then we have cleaned up the UI and added functionality.

Current features include:

- Display console output (log, info, warn, error)
- Evaluate expressions from console input
- Hide or show the tool via keyboard shortcut

For security reasons the console input does not execute arbitrary code, it can only parse and evaluate variables (e.g. window.location).

Potential features for the future include:

- DOM explorer
- Network request viewer
- Debugger
- (Any other Dev Tools features)

The project is still very young and the functionality that it has now is just the tip of the iceberg. The end goal is ultimately to provide all the functionality of modern browser’s Dev Tools without the need for a modern browser.

If you want to contribute or learn more about the tool, check out [the code](https://github.com/cerner/f-twelve) or try the [live demo](https://engineering.cerner.com/f-twelve/demo/).

