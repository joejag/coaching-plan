# Prepare before hand

* Lego bricks
* Index Cards
* Sharpies
* Whiteboard marker
* Magic paper
* Print out exercise sheets
* Invite reminding folk they need a laptop
* Post-its

# Part 1: Anatomy

## Connection

(table groups) 

Question slide

## Concept

Slide 1: Intro: anatomy of git. Helpful mental model, similar to the ones in Pro Git
Slide 2: Model: Local and remote. Benefits of DVCS can be explained (aka Index and HEAD)
Slide 3: Clone: Content travels from remote repo to local and working directory
Slide 4: Working Dir: Two types, known and files git is asking you to either add or ignore
Slide 5: Add->Push: Local changes need to be added, once logically grouped then commit to local. When one or more commits then push to remote. Talk about file states (modified, staged, committed) `git status` colours
Slide 6: Diffs: How to see a diff depends on where it is
Slide 7: Fetch: Only goes from remote to local
Slide 8: Pull: Fetch + Merge.
Slide 9: Pull --rebase: helps keep your commit history a bit cleaner. Circle back to this being a useful model

## Concrete Practice

(pairs)

* add/commit/diff, cleaning branches, staging, .git explore

## Conclusion

(solo) Draw the anatomy on an index card

# Part 2: When things go wrong

## Connection

(fours) 

Question slide: When do you get stuck with Git?

## Concept

Slide 1: reflog. Example of deleting a commit by `reset` then getting it back again with `cherry-pick`. Reflog works after merges, rebases, pulls. Only doesn't when you have never committed some files.
Slide 2: ohshitgit. Common problems, also git-flight-rules

## Concerte Practice

(pairs)

* Bad situations, undoing changes

## Conclusion

(triads)

Question Slide: What is one fact you've learned about getting unstuck?

# Part 3: Rebase vs Merge

## Connection

(triads)

Question Slide: Draw and explain how changes happen in your teams Git repo

## Concept

Slide 1: Commit messages (from Spring Boot)
Slide 2: Introduce Lego
Slide 3: Lego rebase (local the remote)
Slide 4: Merge (no local changes, local changes)
Slide 5: Feature branches: (rebase vs merge)

## Concrete Practice

(pairs)

* Rebase, pull, pull-rebase, branch conflicts (merge), branch conflicts (rebase)

## Conclusion

(pairs)

Show to each other how rebase and merge works in LEGO (one each)

# Part 4: Four modern workflows

## Connection

(triads)

Question Slide: Draw and explain how changes happen in your teams Git repo

## Concept

Slide 1: Four modern workflow models. Draw on magic paper

Trunk: 
-------------------------

Feature Branch:
----       ------------
    \-----/

GitFlow:

use diagram

Forking: Open source (no write access), second remote then tooling magic to merge

Slide 2: Paul Hammant, Devops, created Selenium,

## Conclusions

(solo->group)

Write three facts on an index card, share one with the whole group