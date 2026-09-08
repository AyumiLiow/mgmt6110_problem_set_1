## Question 1
My users are five university students at SMU, coordinating group meetings for a module.  Now, scheduling means messaging back and forth. One asks who's free, others reply one by one. This takes several exchanges before we come to a feasible meeting time. 

This app removes that manual cross-referencing step: each student submits availability once through a shared link, and the app surfaces the overlap directly as "This Week's Time Slots," so no one has to do that mental math themselves. 

## Question 2
The augmentation was real and immediate. One master prompt gave me a working three-screen app in under five minutes, without writing a line of code. I was surprised with how quickly it generated the screens, given that my master prompt was relatively vague. I spent most of my time deciding what to build, and toggled between featuressee if they really helped the user. More importantly, whether the feature achieved the goal of finding a common meeting time.  

Constraints wise, my master prompt explicitly said "no features I did not list," and the first output still came back with an interactive filter and a calendar export I never asked for. It also added a "Meeting Locations" field and student course-and-year fields, both reasonable defaults for a generic scheduling app, both irrelevant to five students already in the same class. I caught and fixed the location and course/year issues through follow-up prompts. I didn't go back for the filter or the calendar export (which I will explore in Question 4).

## Question 3
Reading back through my prompts, a few moments stand out as places where something actually needed human verification.   

In Prompt 2, I noticed the app had defaulted to in-person meetings and corrected it to virtual. This was something that I missed as nothing in my master prompt said virtual. In Prompt 3, I noticed that two-hour meeting slots didn't match how my users actually behave and replaced them with shorter options, since 2 hour meetings are sub-productive. Additionally, I removed the course-and-year fields in favor of SMU emails, that was a judgment the model had no way to make on its own, given that it couldn't have known those fields were redundant for a group already in the same class. 

However, there were times while I was in the loop and didn't actually decide anything.  For instance, Prompt 4. I asked to remove a section without really evaluating it, then had to add it back one prompt later. My own note at the time says it outright — a lapse on my end. But the bigger miss is the interactive filter and calendar export from Prompt 1. I saw them, wrote them down, and never followed up. This was a feature that I missed to evaluate.   

An honest observation. it was really easy to almost “blindly” copy-paste the given master prompt, without understanding the details. This was something that I noticed in my building process for this assignment, as well as when given prompts to the model, in our other modules. This highlighted the importance of slowing down, and conscientiously knowing what we are feeding the machine. After all, we are the builders.  

## Question 4
The clearest gap is the filter and calendar export from Prompt 1. I noticed them immediately, but never followed up to deal with them. This was despite my guardrails explicitly stating not to add features I hadn't listed. That was hard to swallow as I had the evidence in front of me during the build, and simply skimmed past it.  

To have caught it immediately,  "no features I did not list" wasn't a strong enough instruction since the model added them regardless. What I'd need instead is something that forces an accounting, like asking it to list every element beyond my three screens before I sign off, rather than trusting a negative instruction to hold on its own.

## Question 5
A stated guardrail isn't the same as a review step.  Mine said no extra features, and I still got two. Teams should check builds against the objectives directly, rather than trust the instruction to worked.

I also learnt that a reverted or “wrong” prompt is worth logging on its own.  Prompt 4 removal came undone one prompt later because I hadn't actually thought it through. Moreover, we have to verify auto-generated personal-looking data. For instance, my app invented realistic student emails in Prompt 3. This is plausible enough to pass unnoticed, which is exactly the risk. 

In sum, human judgment matters most at the specific points where an error is hard to catch and costly to leave unfixed. Not uniformly at every step. Logging prompts made this distinction visible: allowing me to backtrack, catch my own lapses in judgment, and see where I was actually deciding something versus just approving it.
