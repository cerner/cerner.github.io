---
title: "Intern HackFest 2014"
authors: []
author:  Makenzie Kalb
date: 2014-09-08
tags: [engineering]
---

Ten teams of two to four Cerner interns competed in a week-long HackFest this summer, working to solve any problem they put their minds to. This competition cumulated in a presentation and judging of projects, with prizes of Raspberry Pi Kits for each member of the second place team and Leap Motions for each member of the winning team. From mobile apps, to machine learning algorithms, to drones…this year’s Summer Intern HackFest has been one for the books.

{% img center /assets/2014-09-08-intern-hackfest-2014/Leap.png %}

We called ourselves Team Rubber Duck Dynasty, and it was made up of Umer Khan (University of Notre Dame), Ryan Boccabella (University of Notre Dame), MaKenzie Kalb (Vanderbilt University), and Jake Gould (University of Kansas).

We were excited to get to work the first night when the week-long competition had commenced. Since the beginning of the summer, all of us had been impressed with the caliber of talent Cerner brought into the Software Engineer Internship program. All of the nine teams we were up against were made up of remarkably smart, driven college students from all over the country. One of the most difficult parts of the HackFest was deciding on an interesting and competitive project that could be feasibly completed in only a week (without too many sleepless nights). One of our four team members was a member of the iOS team, and convinced us that an iOS game was the way to go. We wanted to make a game that we would be excited to show our friends as well as the judges.

We ended up building an app called Encore. It is a musical turn-based game revolving around the creation and mirroring of three second tunes between users. Tunes are created using four arpeggio based tones from real piano, guitar, or tenor trombone recordings. The initiating iOS device and sends the data to the Parse server using the Parse API for iOS. Parse stores this data on the server and sends a push notification to the receiving iOS device. Each time a new game is created, an activity is logged on the server to keep track of the game data.  When the receiving user selects the game, it downloads the game data from the server and starts the game. Once the app downloads the game data, it is programmed to decode an array of dictionaries of instrument key and time and convert the array into an audio playback; this allowed for faster upload and download times, as well as significantly smaller game data files. The receiving user hears and immediately attempts to replay the tune. Scoring is accomplished using a Needleman-Wunsch algorithm for sequence alignment. The receiving user now has their chance to create a tune, and the melodious competition continues.

Over the week, we began to get to know our teammates even more than we probably wanted. Passion is the main word that comes to mind when we reminisce on this highlighting week of our summer. From the uncertainty when overhearing other groups huddled in a room talking excitedly about cutting-edge technologies, to the shrieks of excitement when a test finally passed that perhaps woke many a consulting intern roommate, this HackFest was filled with memories all around. As we went for a celebratory completion dinner the night before the presentations Monday morning, the satisfaction of completion was sweet in the air. Sitting there, playing our noisy pride and joy on our phones at the table, we agreed that the week was an excellent experience already…and we hadn’t even started the real judging yet.

{% img center /assets/2014-09-08-intern-hackfest-2014/Auditorium.png %}

Sound checks were full of nerves and excitement the morning we presented our project. The knowledge that each team had a mere five minutes to “sell” what had been more time consuming than sleep over the past week was a challenge everyone was hoping to ace. Later on that afternoon, when the esteemed judges Chris Finn, Michelle Brush, and Jenni Syed were announced as the event began, the caliber of the resources Cerner provides for their many interns was standing right in front of us. We heard from many enthusiastic, impressive groups that afternoon. The presentations showcased many feats of great teamwork and skill: a recommendation engine, dashboard for developers, chatting website, facial recognition android app, iOS game, machine learning algorithm, twitter-controlled drone, and music website.

After a delicious ice cream break while scores were deliberated and after judges provided valuable feedback for each team, the moment of anticipation was upon us. All teams certainly completed the day with the ultimate reward of new skills learned, friends made, and a fantastic project that some are undoubtedly still building off of. As the first and second place teams were called to the stage, Team Rubber Duck Dynasty was surprised and thrilled to be among them. And as the runner up, Team Marky Mark and the Funky Bunch, received their Raspberry Pi Kits, we were amazed to find out each of us was taking home our very own Leap Motion.

{% img center /assets/2014-09-08-intern-hackfest-2014/group-photo.png %}

We returned to our actual teams late that afternoon, proud of our accomplishments and brand new owners of a cutting-edge technology. We received the congratulations of our superiors and mentors, many of whom were our biggest encouragers to participate and supporters throughout the week. The numerous empowered associates that have guided us through this summer have been an unbelievable community - a community that all of us are incredibly grateful to have been a part of.
