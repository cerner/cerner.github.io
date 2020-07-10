---
title: DevAcademy
authors: []
author:  Michelle Brush
date: 2013-08-14
tags: [culture, engineering]
permalink: /2013/08/devacademy/
thumbnail: "DevAcademy.png"
---

When I graduated from college, I thought I understood what it meant to develop software in the real world. It required process. It required troubleshooting. It required quality. However, to me, process meant waterfall. Troubleshooting meant trying a few things and then asking for help. Quality meant manual testing.

Agile methods were not unheard of when I graduated in 2001. My professors noted that iterative development was better than waterfall; they just only taught waterfall. Debuggers had been around since the 50’s, but my classmates and I still debugged with what I call "Hi Mom!" techniques. (We peppered our code with print statements.) Kent Beck had written the JUnit framework 4 years before, but it wasn’t entrenched in the Java culture yet. So it’s not surprising that my education didn’t cover these topics.

It took a few painful experiences in the real world to make me realize the way I programmed in college wasn’t the best way to engineer software. I needed to adopt some new practices.

Not much has changed in terms of software education. Being a part of Cerner’s software engineer training program, I am able to ask every group of new engineers three questions:

"Do you use an agile process?"

"Do you use a debugger when troubleshooting your code?"

"Do you write automated unit tests?"

Cerner has had explosive growth in engineering, so I’ve asked those questions of hundreds of recent graduates. Almost no one says yes. This told me that while colleges are doing a great job of teaching computer science, many schools are not teaching best practices in software development.

Until recently, Cerner wasn’t doing that great of a job of teaching them either. Our training program covered them, but we still saw the new engineers struggle to understand agile development, debug their code, and write their first unit test. One of Cerner’s core values is if you recognize something is broken, you are empowered to fix it. I knew our training program wasn’t working. It became my job to fix it.

Before tackling the whole program, I tried a little experiment. I wanted to see what it would take to get engineers in training to write just one unit test. At the time, training included a class on JUnit. In spite of the class, only 5% of the engineers were writing unit tests for training assignments.

To correct this, I started telling the engineers that I would take points off assignments that didn’t have a unit test. The idea was to create structural motivation. We immediately saw 40% of the engineers writing unit tests. A step forward, but it wasn’t enough.

The biggest obstacle to broader use of unit tests in training was that they didn’t know how to include the testing framework in their Java projects. That, more than the effort of writing the test, was keeping them from doing something we expected of them.

Something was wrong. We were teaching Maven in our training program. If you are not familiar with it, Maven helps you manage your project builds, and as a result, it helps you manage your dependencies. The engineers were already attending a class that taught them how to add dependencies to Java projects. They just weren’t able to associate what they had learned with the goal of bringing JUnit into their projects. They weren’t making the connection.

This connection was missed because engineers were learning about Maven in the absence of a problem. They were being told it’s an important tool, but we hadn’t given them a reason to use it. Later, when they did encounter the problem - "How do I add the JUnit jar to my project?" – it was too late. They had forgotten about Maven.

The key was to move the Maven training closer to when they needed the information. This is called "Just in Time Teaching." It became the first requirement of the new program.

Another interesting aspect of my experiment is that 40% would write the tests even given the delay between training and practice. It should be obvious to anyone that’s ever taken a college programming class that some programmers can get it from lectures alone. Others have to practice. Any one-size-fits-all approach to training is flawed. The second requirement for the new program was that it must flex to meet the skills and learning styles of the engineers.

With these goals in mind, I started the redesign of Cerner’s training program. My first step was to interview a large sample of our software leaders. I asked them what they wanted engineers to learn. Time and time again, the top answers would be agile development, debugging, and automated unit tests. Surprisingly, it was not a list of technologies like iOS, Hadoop, JSON, or ReST.

The resumes of our newly hired engineers are full of languages and technologies. However, when asked what they wanted of new engineers, our lead architects described practices. If Cerner could get engineers to improve in practices, we could take the great engineers we were hiring and immediately make them more productive.

The scary thing is that sharing knowledge is easy, but changing people’s behavior is hard. Once I realized our problems were about software development behavior and not knowledge, I realized we would need to completely rebuild the way Cerner trains its new engineers. The result is DevAcademy.

{{< figure src="DevAcademy.png" alt="DevAcademy" >}}

Imagine you are a new engineer starting at Cerner. In your first week at Cerner, you report to the DevAcademy. The first two weeks focus on in-class instruction and assessment. The goal here is to introduce core software development behaviors and then assess your skills.

After completing the first two weeks of instruction, you join what we call the DevCenter and are assigned a real project. However, that project isn’t assigned by your team. You get to pick. The projects come from all over Cerner including web applications and services, tools to make engineers more productive, and even contributing to open source projects used by Cerner. In picking a project, you are telling Cerner the types of work you find interesting. This helps us determine the best place for you across our diverse range of solutions and technologies.

{{< figure src="ManagersTalkingToEngineer1.jpg" alt="Manager talking to engineer" >}}

While working on that first project, you have a dedicated mentor. You are expected to make progress on the project while receiving feedback. You also get just-in-time training on user stories, source code management, unit testing, and scrum. You get to use Cerner’s software development ecosystem in an isolated, safe environment.

{{< figure src="Mentoring.jpg" alt="Mentoring" >}}

Once you show readiness to join a team, you are allowed to demo your work to the teams that have open positions. Those teams can then pick the engineer that best fits their team. In this way, Cerner makes sure you are assigned to the right team for both Cerner and you.

DevAcademy recognizes that you should never stop learning, so the program continues well into your first few months on your team. You are offered classes on different technologies and more advanced topics as part of an elective-based training plan. You work with your manager to decide which classes to take. It’s Cerner’s way of making sure all of our engineers continue to grow.

We’ve had 150 engineers join DevAcademy since it was launched. I’ve had the privilege of seeing the new engineers struggle and then succeed on their projects. I’ve seen the light come on when they realize the usefulness good development practices and apply them effectively. I’ve seen them get excited about git and other powerful tools that they didn’t have the opportunity to learn during their formal educations. The best part of my job is that I’ve seen many very good engineers start down the career-long path towards becoming really great ones.

{{< figure src="Staff.jpg" alt="Staff" >}}
