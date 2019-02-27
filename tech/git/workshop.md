# Prepare before hand

* Lego bricks (mainly green, blue, some red and orange)
* Index Cards
* Sharpies
* Whiteboard marker
* Magic paper
* Post-its
* Invite: reminding folk they need a laptop


------------------------------------------------------------------------------------------------------------


# Part 1: Anatomy

## Connection

(table groups) 

Question slide

## Concept

Slide 1: Intro: anatomy of git. Helpful mental model, similar to the ones in Pro Git
Slide 2: Model: Local and remote. Benefits of DVCS can be explained (aka Index and HEAD)
Slide 3: Clone: Content travels from remote repo to local and working directory
Slide 4: Working Dir: Two types, known and files git is asking you to either add or ignore
Slide 5: Add->Push: Local changes need to be added, once logically grouped then commit to local. When one or more commits then push to remote. Talk about file states (modified, staged, committed) `git status` colours. Ask how to go back? (reset and checkout)
Slide 6: Diffs: How to see a diff depends on where it is
Slide 7: Fetch: Only goes from remote to local
Slide 8: Pull: Fetch + Merge.
Slide 9: Pull --rebase: helps keep your commit history a bit cleaner. Circle back to this being a useful model

## Concrete Practice

(pairs)

* add/commit/diff, staging, cleaning branches, .git explore

## Conclusion

(solo) Draw the anatomy on an index card


------------------------------------------------------------------------------------------------------------


# Part 2: When things go wrong

## Connection

(pairs) 

Question slide: When do you get stuck with Git?

## Concept

Slide 1: Only destructive commands in git are `checkout` and `reset` for uncommitted changes. `gc` kills everything else
Slide 2: reflog. Example of deleting a commit by `reset` then getting it back again with `cherry-pick`. Reflog works after merges, rebases, pulls.

## Concerte Practice

(pairs)

* Bad situations, undoing changes

## Conclusion

(table)

Question Slide: What is one fact you've learned about getting unstuck?


------------------------------------------------------------------------------------------------------------


# Part 3: Rebase vs Merge

## Connection

(pairs)

* Do you usually use merge or rebase? 
* Why?

## Concept

Slide 1: Introduce Lego
Slide 2: Lego rebase (local pre-push (drop, squah, reword), change history)
Slide 3: Merge (no local changes, local changes)
Slide 4: Feature branches: (rebase vs merge) (rebase is entirely new commits)
Slide 5: rerere: Reuse recorded conflict resolutions on rebase (conflict purgatory)

## Concrete Practice

(pairs)

* Rebase, pull, pull-rebase, branch conflicts (merge), branch conflicts (rebase)

## Conclusion

(triads)

Show to each other how rebase and merge works in LEGO (one each)
Do you think you should rebase pushed commits?


------------------------------------------------------------------------------------------------------------


# Part 4: Four modern workflows

## Connection

(triads)

Question Slide: Draw and explain how changes happen in your teams Git repo

## Concept

Slide 1: Commit messages (from Spring Boot) - present tense (not past (added) or present particple (adding))
Slide 2: Four modern workflow models. Draw on magic paper

Trunk: 
-------------------------

Feature Branch:
----       ------------
    \-----/

GitFlow:

use diagram

Forking: Open source (no write access), second remote then tooling magic to merge

Slide 3: Paul Hammant, Devops, created Selenium,

## Conclusions

(solo->group)

Write three facts on an index card, share one with the whole group