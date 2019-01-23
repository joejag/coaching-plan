# Session Overview

https://app.mindmup.com/map/_free/2019/01/1b1948101f0511e9ad85535a33f2a273

Goal: Give folk guidelines for how to run pairing in their teams with decent guidelines.

## Schedule

 * Pair Draw: Exercise
 * Pair Draw: Debrief
 * What is it? (in brief)
 * Why Pair? (pros)
 * How? Roles: Driver and Navigator
 * How? Two essential practices: Switching and Breaks
 * When to pair / when not to pair
 * Good-Patterns
 * Anti-Patterns

---------------------------------------------------------------

# Exercise  

Pair Draw: https://www.industriallogic.com/blog/pairdraw-2/

## Running it

* 20-30m. Coloured markers (unique in pair), Paper.
* Let person choose marker, give two pieces of paper
* 2m to draw two faces (or houses) or both bits of paper (one on each)
* Now make pairs. Find a comfortable place to sit
* Give two sheets of blank paper, now draw two faces again
* Put own drawings next to the pair drawings on a table/floor
* take a look around
 
## Debriefing it

ask

* What was that like for you? -> Mindmap

or

* How did you feel when you were drawing solo vs. drawing in a pair?
* What do you notice is the same or different about the solo and pair drawings?
* Which of the drawing are more artistic or more original - the solo or pair drawings?
* Did you find yourself concentrating more or less during pairing?
* Was it more fun to draw alone or in a pair?
* What did you like and what didn't you like about drawing alone or in a pair?
* What was it like not knowing what your pair would draw next?
* Did you find yourself mirroring your pair? (For example, your pair draws an ear and than you draw an ear).
* Do you think that people get better at pairing over time?
* How do you think the simulation differs from real-world pair programming?
* Who is that weird looking guy with the horns?

Then offer them to take their pictures home to hang on their fridge

# What is Pairing?

* A disciplined apporach to writing software.
* Each person has a role and responsibility.
* Must have an explicit way of switching and taking breaks.

## How does it help?

* Real time code-review
* Brings folk together
* Discipline of staying on task
* Shortening feedback loop. Easier to change in realtime.
* Code Review sucks after the task is done
* Less likely to get blocked or distracted by social media (faster)
* Simpler code as it had to be explained
* Less bugs (epscially big ones) if folk are thinking about things
* Spreads knowledge and learning, less silos 
* Faster onboarding of new people
* Less debugging and testing later
* It's learning about: langauge, company, coworker, project, or just pairing in general. It's not about shipping more code, it's about better code and products.

## Roles

Take turns being navigator and driver.

* Driver: codes, types, moves mouse
* Navigator: Reviews, big picture, asks questions. Thinks how does this code fit in? Where will this code lead? Can we design this better?

Talking is important:

For most tasks one person will know more. They can navigate more and see it as a mentoring opportunity. The Leaner here has responsibility to make sure they are asking questions so they understand what's going on. This isn't a long term classification, even on one task a person could be an expert in SQL or Spring Boot or React and the roles switch. The learner should do the majority of the driving.

## Switching

You want an equal time on both roles. Agreeing an approach is important:

* Ping Pong (way easier when using TDD)
* Chess clock / Pomodoro (25m) - 5 minutes each

## Breaks

* Pairing is more tiring then working on your own as you are coding and communicating. Sustainable pace is key.
* Pomodoro. Decide work to be done. Set timer for 25m. Take 5m break. repeat three more times, take 20m break.
* Sand timer. Break every 45m.

## When to, when not to pair

It depends on the activity. It's suitable for mainline delivery tasks:

* Writing code
* Writing tests
* Build Engineering

You can, but these activities are not optimal:

* Researching about libraries
* Spiking complex problems
* Debugging while there is a huge experience gap
 
# Good patterns

Important: Pairing is a choice, not enforced

Caution: If in position of power. Your responsible for making the session enjoyable. Do not use your position to impose decisions or make your pair uncomfortable.

Question to ask yourself: “Is my pair engaged?” or “Am I engaged with my pair?”

* Always ok to ask to drive. Don't zone out or check email, take a shared break if needed
* They may struggle. This is just familiarity, not intelligence. You may not get much done in the first few hours.
* Sit together with shared access to monitors, not one behind the other.

* Use core Pairing hours, like 10-4pm depending on when the team like to work.
  * Expect to be available for pairing 60-70% of the day
  * If your task isn't suitable, don't pair, if you don't want to don't pair
  * If your task is suitable, ask for a pair. Put off solo activites to outside code pairing hours
  * Don't pair 100% of the time.

* Be fully **present**
Do:
 * Communicate (Think out loud: "What are you thinking?", share your intent)
 * Take turns “driving” and “navigating”
 * Be patient
Don’t:
 * Interrupt
 * Type without communicating
 * Grab the mouse or keyboard from your partner

10 second rule: Do not mention a typo for at least 10 seconds. Their editor will show them and it breaks their flow.

* Environment is important. Dedicated pairing stations with huge monitors and extra keyboards is great. Imaged desktops better.
* If a story needs an expert, make the expert one of the pair

## Why isn't everyone doing it?

* Need to get over the discomfort. Tram analogy where it is half full, where do you sit?
* Folk will see your weaknesses. Remain polite.
* Bad experiences, ask and see if you can overcome.

# Anti-patterns

* Slow and frustrating: Agreement on naming, harder on design decisions.
  * Improve by: Agree on the foundations. size of methods, SRP, naming and design

* Tiring
  * Take breaks. Don't pair all day. 

* Stiffle creativity. Sometimes need to try out half-baked ideas
  * It's ok for a team member to ask to work alone. Still reviewed and played back. Finish as a pair

* Inexperienced devs not benefiting from pairing. They don't get to make mistakes   
  * Need space to do things at their own speed. 
  * Start work as a pair, give high level then let the inexperienced person do it on their own.
    * If stuck they can ask for help. Review once done

* Distracted Pairs.
  * Ping pong. Encourage them to write 66% of the code, or most of the start.

## Introducing it

* One afternoon a week, one day.
* Be open about tooling

# Key takeaways

* Core hours works well, don't pair 100% of the time
* Be explicit about how you will switch and take breaks
* Certain bits of work are better for pairing

# Quality Links

* A+: Getting started: https://www.infoq.com/articles/adopting-pair-programming
* A+: Anti-patterns: https://codurance.com/2015/03/15/rethinking-pair-programming/
* B: Introducing pairing: https://medium.com/@jdxcode/how-to-pair-program-d6741077e513
* B: Intro to good practices when pairing: https://www.kusmin.eu/wiki/index.php/Pair_Programming
* Academic: Study on pairing: https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF
* Excerise: https://www.industriallogic.com/blog/pairdraw-2/

# Interesting but perhaps not worth mentioning

* Some laws like SOX, HIPPA (health insurance) require code review. Start with that.
  * Traditional code review is about critique with elements of ownership and defense while pairing is collaborative
