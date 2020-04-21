---
title: 'Branching with Git'
theme: solarized
revealOptions:
  transition: 'none'
  backgroundTransition: 'none'
---

# Branching with Git

---

## Two problems

- _"Confusion about terms like origin/master and whether or not we are using branches"_
- _"Three of us working on the same script at the same time. It ended up being a bit tricky to merge our various changes"_

Is this correct?

---

## Goals

By the end of the session we should know...

- What is origin/master and are we use branches
- What might be good practice to avoid/minimise conflicts

---

## `origin`

- convention for saying 'the shared place for the project', for you this is Gitlab

---

## `master`

- a local branch called 'master'

---

## `origin/master`

- Gitlab's copy of your local 'master' branch

---

## All together

- `origin` = Gitlab
- `master` = Your local copy of a branch on Gitlab called `master`
- `origin/master` - Gitlab's version of the `master` branch

---

# Demo time

<!--
1. git branch
2. git branch -r
3. add a commit, push it
4. add commit on gitlab, pull it
-->

---

## Two branching strategies

- Master based

  - Plus: simple, small conflicts
  - Minus: See mistakes early

- Feature branch based
  - Plus: isolation, review
  - Minus: complicated, bigger conflicts

---

_Aside: GitFlow exists for teams releasing once a quarter_

---

# Demo time

<!--
1. create local branch, git push, merge request, merge it
2. create remote branch, git pull, edit, git push
-->

---

# Avoiding merge conflicts

- What strategies do you have?

---

## Strategies

- **Resolve: Do it in pairs as it's really hard to do alone**

---

## Strategies

- Resolve: Do it in pairs as it's really hard to do alone
- **Avoid: Split software into different files**

---

## Strategies

- Resolve: Do it in pairs as it's really hard to do alone
- Avoid: Split software into different files
- **Avoid: Sequence work to not involve editing the same files in parallel**

---

## Strategies

- Resolve: Do it in pairs as it's really hard to do alone
- Avoid: Split software into different files
- Avoid: Sequence work to not involve editing the same files in parallel
- **Avoid: If you both need to edit a file, pair up to do both tasks together**

---
