# Part 1

* Use https://github.com/k88hudson/git-flight-rules as a reference
* https://raw.githubusercontent.com/joejag/coaching-plan/master/tech/git/create_vcs_stub.sh

## Differences

* Add a file and commit it to the local repository
* Change the contents of the file in the working directory
* See the diff
* Add the file to the staging are
* See the diff
* Change the contents of the file in the working directory
* Get the list of changes

## Cleaning branches

* Create branch A (and send to remote)
* Create branch B (and send to remote)
* Create branch C (and send to remote)
* Delete branch A only in local
* Delete branch B only in remote
* Delete branch C in local and remote

## Staging

* Create a new file
* Commit the new file
* Change the existing file
* Create a new file
* Make two commits for each change

## If you have time

* Look in the `.git` directory and figure out what everything is

----------------------------------------------------------------------------------------

# Part 2

## Escaping a bad situation

* Make a typo in a commit message and fix it
* Make a commit, then add a file to it
* Delete a local commit, then retrieve it with reflog
* Commit to master (don't push), then realise it should've gone to a feature branch
* Commit to the wrong branch and fix it by putting it on another (hint: use stash)
* Commit to the wrong branch and fix it by putting it on another (hint: use cherry-pick)

## Undo changes

* Create local branch
* Make changes for three commits
* Undo changes from second commit
* Send commits to remote
* Undo changes from one of the push commits

----------------------------------------------------------------------------------------

# Part 3

## Rebase

* Create new repo
* Add two commits and push them
* Add three local commits
* Use rebase to drop the latest commit
* Use rebase to reword a commit
* Use rebase to squash the last two together into one commit

## Pull = fetch + merge

* Create new repo
* Make changes in one workspace and push them
* Make non-conflicting changes in the other workspace and commit them, then `git pull`
* What does the history look like? What has hapepned?

## Pull = fetch + rebase

* Create new repo
* Make changes in one workspace and push them
* Make non-conflicting changes in the other workspace and commit them, then `git pull --rebase`
* What does the history look like? Is this better?

## Feature branch conflicts - with merge

* Create the three repos
* Push some commits to master on W1.
* Checkout master W2. pull. Create a feature branch. Create a commit that changes a shared file, push.
* Change the same file on master on W1. Push the change.
* In W2, pull master, integrate master into the featurebranch using 'merge', what happens to the log?

## Feature branch conflicts - with rebase

* Create the three repos
* Push some commits to master on W1.
* Checkout master W2. pull. Create a feature branch. Create a commit that changes a shared file, push.
* Change the same file on master on W1. Push the change.
* In W2, note the SHA on the feature branch
* Integrate master using 'rebase', what happens to the log? Can you push without force? 
* try and push, why has it been rejected?
* Push with force
* In W1 Add another local commit then pull. What happens to your commit on W1?
