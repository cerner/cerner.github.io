---
title: "You May Not Be a Polyglot, but Your Code Needs to Be"
authors: []
author:  Denisse Osorio de Large
date: 2017-07-07
tags: [engineering, polyglot, localization, internationalization, grace, hopper]
---

Last October, I had the privilege to speak at [Grace Hopper](https://ghc.anitaborg.org/), the world's largest gathering of women technologists. It was impressive to see 15,000 fellow female technologists gather together to share their experiences and technical expertise. To look into the audience, and see a room full of other female engineers was a great experience!

My talk was titled, You May Not Be a Polyglot, but Your Code Needs to Be ([previously presented at Midwest.io](https://www.youtube.com/watch?v=923ac4CSqsw)).
One definition of the term polyglot is "composed in many languages." During my talk, I discussed common misconceptions about writing code for global audiences, and I provided tips to help position engineers for success in these types of projects.

Having worked in engineering, translation, and localization for more than over a decade, I have seen first-hand how projects struggle through the globalization process. A properly globalized solution is generally achieved by ensuring the appropriate internationalization, localization, and translation steps have taken place; however, as developers, we have misconceptions that make this process more costly and less effective than it needs to be.

To help set the stage, I began my talk by speaking in Spanish. I love watching the audience react to my comments, as I usually say something silly during the introduction, so those who understand react one way, while others in the audience tend to look puzzled.

One of the most common misconceptions when coding for a global audience is the infamous statement: "I'll NEVER need to do this." The most common rationalization for this misconception is that in the U.S., we only speak English, however, one in five U.S. residents speaks a foreign language at home. This is a record 61.8 million residents who speak languages other than English. Of these residents, 25.1 million (41 percent) told the Census Bureau that they speak English less than very well. Additionally, data from 2013 shows that there are seven languages with at least one million speakers in the US. These languages were Spanish (38.4 million), Chinese (three million), Tagalog (1.6 million), Vietnamese (1.4 million), French (1.3 million), and Korean and Arabic (1.1 million each). By only serving one audience, we are ignoring many customers and consumers of our solutions.  Even in my adopted hometown of Kansas City, 6% of the population speaks Spanish as their primary language.

Another common misconception is that internationalization and  localization are the same. Here are some definitions according to the Word Wide Web Consortium (W3):

>* "Internationalization is the design and development of a product, application, or document content that **enables** easy localization for target audiences that vary in culture, region, or language."
>* "Localization refers to the adaptation of a product, application or document content to meet the language, cultural and other requirements of a specific target market (a 'locale')."

I like to think of their relationship more like this: **i18N + L10N == G11N**
<br />
While the W3 notes, "some people use other terms, such as globalization to refer to the same concept" as internationalization," I see the appropriate execution of internationalization and localization together as providing a globalized solution.

Among examples of appropriately globalized solutions, TripAdvisor is one I like to highlight because it has a broad user base, and many of its users don't realize it is used by others around the world in their own language. The following Trip Advisor elements help provide a positive user experience:

* Flexing dates to show in the appropriate locale
* Removing content that is not available in the target language (newsletters are a good example)
* Accurate currency conversion
* Allowing for text expansion to avoid truncation
* Flexing logos and the brand to ensure that it is appropriate for the locale

Another common misconception when creating globalized applications is that once something has been internationalized and translated, it can be shipped. The best way to highlight the folly of this perception is to look at some marketing mishaps. Below are some of my favorite ones:

>*  A famous detergent from the Middle East, is white as snow, so it is called by the word for snow in Farsi. This doesn't work well when it is referenced in English-speaking countries. In Farsi, the word for snow is barf.
>* I also have a personal story. I come from a tropical country, and my native language is Spanish. When I first moved to the United States, I realized that I was not genetically engineered to be in the cold, dry weather of a Kansas City winter. My skin was itchy, and I desperately need some good hydrating lotion. My friends at school recommended something called Sarna. I was convinced they were trolling me because in Spanish, Sarna means _Scabies_.
>I have endured more than a dozen Kansas City winters, and I still can't make myself use that lotion, because I can't get over the name.

Translation alone is not a solution. The translator must be proficient. In a previous position I was frequently asked how long it takes to learn a language. I was fighting the misconception that anyone who has taken two years of a language could translate. After failing to articulate why that was a misconception, I found a wonderful tool, thanks to the Foreign Language Institute and the Interagency Language Roundtable (ILR), who created a scale that is a set of descriptions of abilities to communicate in a language. One important aspect of this scale is that it is accurate when the evaluations are done by native speakers. It was originally developed by the United States Foreign Service Institute (FSI), and is still widely known as the FSI scale. It consists of descriptions of five levels of language proficiency.

* Level 1: Elementary
* Level 2: Limited Working
* Level 3: Professional Working
* Level 4: Full Professional
* Level 5: Native or Bilingual

Then the scale estimates how long it takes to achieve that level of proficiency when a student is immersed learning the language at least six hours a day and at least five days per week. It then breaks down the languages by groups based on their difficulty:

"Easy" languages are French, German, Indonesian, Italian, Portuguese, Romanian, Spanish, and Swahili:

* 8 weeks (240 hours) to achieve level 1/1+
* 16 weeks (480 hours) to achieve level 2
* 24 weeks (720 hours) to achieve level 2+

"Hard" languages are divided into the following groups.

* Group 2: Bulgarian, Burmese, Greek, Hindi, Persian, Urdu.
* Group 3: Amharic, Cambodian, Czech, Finnish, Hebrew, Hungarian, Lao, Polish, Russian, Serbo-Croatian, Thai, Turkish, Vietnamese.
* Group 4: Arabic, Chinese, Japanese, Korean)

To learn these languages, you must spend the following time:

* 12 weeks (360 hours) to achieve level 1/1+
* 24 weeks (720 hours) to achieve level 1+ /2
* 44+ weeks (1320+ hours) to achieve level 2/2+

Taking a language for two years (usually college or high-school) is simply not enough to achieve the appropriate level of proficiency needed to translate. Even native speakers are not effective at translation. Becoming proficient in a language is very challenging, and cultural aspects are important as well.

Additionally, brain activation patterns identified by the University of Turku in Finland show extensive activation of the brain during non-native language use, specifically, the left dorsolateral frontal cortex, which is associated with lexical search, semantic processing and verbal working memory. Brain activation patterns were clearly modulated by direction of translation, with more extensive activation during translation into the non-native language, which is often considered to a be more demanding task. These are not the same patterns used when speaking a language, though, as different brain connections need to exist.

Machine translation has become more effective in the last few years, but only language experts should leverage it as part of their toolset. Translating something into a language you don't understand is a recipe for disaster. Simply go to an online translation tool, put in a phrase, convert it to another language, then convert it back.  Chances are, the original does not match the twice-translated phrase.

If you are relying on professional translators, another common misconception is that translation can simply happen overnight. The truth is it CAN happen, just NOT well. A professional translator can usually translate about 2000 words per-day. If they are doing localization testing as well, you have to budget about twice the time for the regression test plans to be completed, as words will iteratively need to be changed as context is understood within the software.

Now that I have covered the most common misconceptions with internationalization, localization, and translation, the next portion of this blog will focus on practical tips.

As a developer, it is imperative that you understand your global strategy and what outcome the business is trying to accomplish. You don't want to invest a lot of development time making sure you can handle Right-To-Left languages or those that are double-byte if your business isn't planning on going to those markets.

Creating appropriate partnerships with language providers is key to successfully globalizing software, as they can help handle many aspects of the globalization process from translation to localization. Speaking to companies who are already globalizing their software is a good way to find good providers.

If you have to use free online tools to translate something internally (where the quality doesn't need to be high), make sure you understand the licensing of the tool. Some free tools will own your content once you run it through their translation engine.

Including internationalization as part of your development process is a key aspect to globalization success. This means it should be included in:

* Design, including user interface design (UX)
* Estimates
* Testing
* Deployment

Localization testing is a new step that should be included in your process, which requires language experts to be involved. From a development perspective, there are a lot of existing artifacts that can be leveraged in this process, such as regression and feature test plans. It is always helpful if those artifacts can be separated into those that have UI changes or not.

Localization testing will likely focus on language changes and impacts to the UI. A byproduct of localization testing is that other types of defects might surface. Having a good process so that bugs can be reported and tracked is key.

If you are just starting down the road of internationalization, be sure you don't reinvent the wheel on how to do it. Programming languages usually have well-documented libraries that can be used. If you are already internationalizing and working with a localization team, make sure you are commenting your code to provide clarification to the translators. Below is an example of a popular localization tool:

{{< figure src="/images/2017-07-11-you-may-not-be-a-polyglot-but-your-code-needs-to-be/polyglot.png" >}}

Once you have incorporated all the steps for localization into your process, it is important to understand that your text changes will now have financial impact as they will affect translations. Translation memories are commonly used by translators, and any change to the source text will trigger a new translation to be required.

Translation companies typically charge per word. The average cost per word in 2012 Common Sense Advisory's 2012 survey of more than 3,700 suppliers in 114 countries, using 220 language pairs, found that the average per-word rate for translation for the 30 most commonly used languages on the web is around 13.4 cents. The more impactful implication to your process is that text changes will trigger your localization testing cycle as it will be important to verify the new translations are correct in context.

Let's discuss some quick principles that you should be able to apply regardless of what programming language you use.

Don't concatenate strings. Language order matters with translation. Instead of doing this:

```javascript
<div style="font-family: monospace">function getDescription() {
  var color = getColor();
  var element = getElement();
  return color + " " + element;
}</div>
```

Do something like this:

```javascript
<div style="font-family: monospace">function getDescription() {
   	var color = getColor();
   	var element = getElement();
return getLocalizedString ('elementDescription', color, element);
}
elementDescription = {1} {0}</div>
```

Refraining from concatenating strings allows lthe localization professional to ensure that grammar is appropriately represented in the language. If you concatenate strings you will be forcing someone to say something like:

"House Red" instead of "Red House."

Speaking of names, be mindful how you use them in an application. Build appropriate abstraction and flexibility. Names can cause headaches in localization because first names aren't always first, people can have multiple last names, and middle names might not be there at all.

I have a personal story about this. When I went to file my marriage license, we had a very interesting conversation with the clerk. He asked me what was my middle name. When I said that I don't have a middle name, he said the system had it as a required field. I suggested that he enter a space...after about 15 tense seconds he confirmed it had worked. This was in early 2000, and I hope things have changed, but since government moves at the speed of snails, I doubt it has.

My final tip to better handle localization is to always use the FULL locale, that is, both language and country code to allow for maximum flexibility and to budget more time than what you believe you will need for your project. This last tip sounds very lame, but experience has taught me that chances are you won't do it. Engineers tend to be very optimistic on their estimates, and generally fail to allocate sufficient time.
