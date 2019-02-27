# Part 2

* Use this script to create repositories for each step: http://bit.do/gitbase (it's the same as the last one)
* For help: https://github.com/k88hudson/git-flight-rules
* Use 'alice' for these exercises

## 1. Escaping bad situations (3 exercises)

* Make a typo in a commit message and fix it
* Make a commit, remember you forgot to add a file, add the file to the already made commit
* Delete a local commit (not using revert), then retrieve it with reflog

## 2. Wrong branch (3 exercises)

* Commit to master (don't push), then realise it should've gone to a feature branch, move your change to a feature branch and fix master
* Create two feature branches off `master`, commit to the wrong feature branch and fix it by putting it on another (hint: with stash)
* Create two feature branches off `master`, commit to the wrong feature branch and fix it by putting it on another (hint: with cherry-pick)

## 3. Undo changes

* Make three separate commits to the repo with file changes
* Send commits to remote
* Undo changes from the second pushed commit (hint: using revert)