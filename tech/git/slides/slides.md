---
title: 'Anatomy of a git'
theme: solarized
revealOptions:
  transition: 'none'
  backgroundTransition: 'none'
---

# Git

---

<!-- Connection -->

# Questions

* What other VCS have you used?
* Why use Git?
* Why does Git have a staging area?

---

<!-- Concept -->

# Anatomy of a Git

*Images from Rachel M. Carmena: https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html*

---

### Distributed VCS

![](./images/general-drawing.png)

---

### Cloning a repo


![](./images/clone.png)

---

### Making changes in the working directory


![](./images/tracked-untracked.png)

---

### Updating the remote repository 1/2

![](./images/add-commit-push.png)

---

### Updating the remote repository 2/2

![](./images/states.png)

---

### Updating the development environment 1/3

![](./images/fetch.png)

---

### Updating the development environment 2/3


![](./images/pull.png)

---

### Updating the development environment 3/3


![](./images/pull-rebase.png)

---

<!-- Concrete Practice -->

# Exercise!

* http://bit.do/basegit
* http://bit.do/gitflight

---

![](./images/general-drawing.png)

---

<!-- Conclusion -->

### Activity: Draw the anatomy

![](./images/general-drawing.png)

---


<!---






 PART 2






-->

# When things go wrong

---

<!-- Connection -->

# Questions (in pairs)

* What do you get stuck with in Git?

---

<!-- Concept -->

`git reflog`

->

`git reset HEAD@{index}`

---

https://ohshitgit.com/

---

<!-- Concrete Practice -->

# Exercise!

---

<!-- Conclusion -->

# Discussion (in fours)

* What is one fact you've learned about getting unstuck?

---

<!---






 PART 3






-->

# Rebase vs merge

---

<!-- Connection -->

# Discussion (in pairs)

* Do you usually use merge or rebase? 
* Why?

---

<!-- Concept -->

# Merging through the medium of LEGO

---

# Rebase

* Change local history
* Change shared history (force push)

---

# Merge

* No new commits
* Local changes (merge commit)

---

# Feature branch

* rebase vs merge from master

---

# Rebase with conflicts

* Reuse recorded resolution 

`git config --global rerere.enabled 1`

---

<!-- Concrete Practice -->

# Exercise!

---

<!-- Conclusions -->

# Activity (in 3s)

* Use the LEGO to show how one a rebase or merge happens in Git
* Do you think you should rebase pushed commits?

---

<!---






 PART 4






-->


# Four modern workflow models

---

<!-- Connection -->

# Activity (in 3s)

* Draw and show how changes happen in your teams Git repo

---

<!-- Concept -->

# Commit messages

*If applied this commit will...*

`git commit -m 'Add logging to the fizzbuzz'`

---

# Four modern workflow models

* Trunk based
* Feature branch
* GitFlow
* Forking

---

![](./images/gitflow.png)

---

<!-- Concrete Practice -->

![](./images/paul_hammant_deployment_g-forces.jpg)

---

<!-- Conclusion -->

# Activity (solo)

* Write three facts you've learned on back of index card
* Share one with the whole group