---
title: "Code Reviews: There is a Better Way"
authors: []
author:  Chris Fagyal, Carl Chesser
date: 2018-05-08
tags: [engineering, code review]
thumbnail: "code-review-size.png"
---

At Cerner, peer review of code is an important job. We have found it to greatly improve the quality of code and improve a team’s knowledge of the codebase. Through code review discussions, newer engineers are able to learn on valuable areas to question or challenge when something is being changed. While we heavily embrace the practice of peer code review, we also recognize it can make an engineer’s life challenging when you are overwhelmed with code to review. Furthermore, it can be large source of project delay when points of coordination are not managed well. In this blog, we will cover some tactics that you can apply to improve how you approach code reviews.

## Smaller code reviews are better code reviews

<!-- TODO These are a unique format. Its basically an array/media using a fit right and fill left for the text -->
<table cellpadding="5">
  <tr>
    <td>
      <div class='pull-left' markdown="1">
        The first step of making a code review inviting for others to provide feedback, is by making the scope of the review small. This generally requires thought and planning on how to incrementally present code for review, allowing each review to be smaller in size which can be safely included into the codebase in isolation. This can ultimately help morale of a team by avoiding monster-size reviews from being stagnate, and never reaching a point of completion due to amount of work necessary to review or the length of feedback that exists. By having the review small, a laser set of focus can be achieved to promptly and effectively complete the review, providing a positive reinforcement of being able to also complete the work.
      </div>
    </td>
    <td>
      {{< figure src="code-review-size.png" >}}
    </td>
  </tr>
</table>

## Have machines filter what code qualifies for review

<table cellpadding="5">
  <tr>
    <td>
      <div class='pull-left' markdown="1">
        We recently had a "GitHub Day" at our Innovations campus, where GitHub and other Cerner engineers shared how to improve your use of source code management. In these presentations, a quote was shared that rang true:
        <blockquote><p>We are more receptive to feedback from pedantic robots than pedantic people.</p></blockquote>
        When it comes to a code review, it is easy to point out simple flaws in the code which relates to formatting or basic anti-patterns in a given language. However, should humans be spending time on these types of issues in a code review? Machines are well suited for testing code through linters and static analysis, where formatting rules and known bad patterns can be quickly identified. By focusing on having your CI system do these types of tests on your code, and failing your build when formatting problems emerge, you now have a filter which blocks a large set of noise from entering into a code review. As a result, humans don’t engage in a code review until the code actually builds (which would encompass both static and dynamic forms of tests). Furthermore, it is easier to receive these minor points from a machine (a bot which is communicating the results of your build), versus having a team member spend time pointing out all the minor things you forgot to check or format correctly. In the end, humans apply their creative mind on discussing deeper topics on the design and intentions of the code, versus getting distracted with noise of simple things that can be addressed earlier by machines.
      </div>
    </td>
    <td>
      {{< figure src="code-review-human-bot.png" >}}
    </td>
  </tr>
</table>

## Agreed upon conventions

<table cellpadding="5">
  <tr>
    <td>
      <div class='pull-left' markdown="1">
        Building upon the previous point, teams should have agreed upon conventions on things like style and code formatting, so that those things can be automatically found (and even fixed with the proper tooling).  This eliminates the propensity for style/formatting comments in code reviews which detract from the actual purpose of finding substantive issues within the code. If you find code styling questions or debates are occurring in the code review, ensure the team comes to an agreement on the convention, and that styling rule gets fed into your linter (ex. CheckStyle, Rubocop, IDE formatters) to avoid it from entering into a code review again. Furthermore, this helps reinforce the “boy scout rule”: Always leave the campground cleaner than you found it. By having your linter now embrace this new formatting rule, existing codebases that you start changing in the future will be invited to be updated as well, versus allowing the drift to continue to occur.
      </div>
    </td>
    <td>
      {{< figure src="code-review-conventions.png" >}}
    </td>
  </tr>
</table>

## "How I would have done it"

When comments emerge on a code review which are being conveyed as opinions, like “I’d have done it this way,” this can detract the focus of the code review away from correctness and more on personal preferences. In this section we will discuss two challenges when including personal preferences in code reviews: the distractions and how they can be interpreted.

### Distraction on personal preferences

While personal preferences may help the readability of the code (based on the viewer), it is also important to provide the larger “why” when sharing opinions. When multiple opinions are being shared within the review, it may invite for a larger debate that might simply derail the ultimate focus of the code review. As a result, the code review may languish and not be completed due to the debate of opinions.

### Accidental preference becoming "law"

When opinions like this are shared, especially when communicated from someone more senior on the team, their opinion may be viewed as “law”. In that, it is simply accepted by the engineer to apply the change because the source of the opinion carries a large amount of weight in the discussion. However, it is expected that no personal preference would simply be applied without additional thought and reason. When personal preferences are brought up in a review, it is best to capture and understand the “why” versus assuming the opinion is simply true or accepting it as its face value.

## Moderator

All code reviews should have a moderator for the review to ensure the review doesn’t get off track (discussing items not applicable to the review, circular discussions, personal preference comments, etc).  The moderator isn’t necessarily an engineer reviewing the code, but could be the technical project manager for the project where the code resides.  The moderator is also responsible for ensuring comments are addressed and the review is closed when appropriate.

## Review agility

Code reviews should be given priority, as the author is being blocked waiting for the review to be completed.  In order to achieve review agility, code reviews must be small (as mentioned above), so that reviewers are able to process the content of the review and provide substantive feedback easily. In order to give reviews priority, your team should actively work to ensure people are planning accordingly when they are assigned to reviews. Based on the expertise on the team, it is not uncommon for some team members to become a bottleneck on the team due to amount of code reviews that are assigned to them. It is important for the team to identify this issue, and ensure the team is growing other team members to shed the load of reviews by building up the expertise.

## Conclusion

While peer code reviews are a crucial component of our software development process, they also require evaluation on how they can be improved. These are simply a few tactics that can be applied to help improve how you approach code reviews. As with the Agile process, we want to continuously improve how we build software, and by focusing on how to improve this process, you can ultimately improve the quality and delivery time of your software.
