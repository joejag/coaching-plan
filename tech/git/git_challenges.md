# Part 1

* Use https://github.com/k88hudson/git-flight-rules#i-want-to-delete-a-branch as a reference
* Crete a new repo called 'hello'
* https://www.slideshare.net/raquelmorenocarmena/git-challenges

## Differences

* Add a file and commit it to the local repository
* Change the contents of the file in the working directory
* See the diff
* Add the file to the staging are
* See the diff
* Change the contents of the file in the working directory
* Get the list of changes

## Merge and fast-forward

* We are on branch A
* Create branch B
* Make changes on branch B
* Merge B into A
  
* We are on branch A
* Create branch B
* Makes changes on branch B
* Makes changes on branch A
* Merge B into A (and resolve conflict)

## Cleaning branches

`mkdir gitlab && cd gitlab && git init --bare && cd ..`
`git clone gitlab workstation`

* Create branch A (and send to remote)
* Create branch B (and send to remote)
* Create branch C (and send to remote)
* Delete branch A only in local
* Delete branch B only in remote
* Delete branch C in local and remote

## Staging

* Create a new branch
* Create a new file
* Commit the new file
* Change the existing file
* Create a new file
* Make two commits for each change

## Pull = fetch + merge

`mkdir gitlab && cd gitlab && git init --bare && cd ..`
`git clone gitlab workstation_one && git clone gitlab workstation_two`

`mkdir gitlab && cd gitlab && git init --bare && cd .. && git clone gitlab workstation_one && git clone gitlab workstation_two`

* Create new repo to be a server
* Create two workspaces of the server
* Make changes in one workspace and push them
* Make non-conflicting changes in the other workspace and commit them, then pull (notice the history)

* Repeat and use `git pull --rebase` instead
* What does the history look like? Is this better?

## If you have time

* Look in the `.git` directory and figure out what everything is

----------------------------------------------------------------------------------------

# Part 2

## Escaping a bad situation

* Make a typo in a commit message and fix it
* Make a commit, then add a file to it
* Deleting a local commit, then retrieve it with reflog
* Commit to master, then realise it should've gone to a feature branch
* Commit to the wrong branch (hint: use stash, then try again with cherry-pick)

## Undo changes

* Create local branch
* Make changes for three commits
* Undo changes from second commit
* Send commits to remote
* Undo changes from one of the push commits

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
