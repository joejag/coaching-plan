# Part 2

* Use this script to create repositories for each step: http://bit.do/basegit
* For help: https://github.com/k88hudson/git-flight-rules

## 1. Escaping bad situations (3 exercises)

* Make a typo in a commit message and fix it
* Make a commit, then add a file to it
* Delete a local commit (not revert), then retrieve it with reflog

## 2. Wrong branch (3 exercises)

* Commit to master (don't push), then realise it should've gone to a feature branch, move your change to a feature branch and fix master
* Create two feature branches off `master`, commit to the wrong feature branch and fix it by putting it on another (hint: with stash)
* Create two feature branches off `master`, commit to the wrong feature branch and fix it by putting it on another (hint: with cherry-pick)

## 3. Undo changes

* Make changes for three commits
* Undo changes from second commit
* Send commits to remote
* Undo changes from one of the pushed commits (hint: using revert)