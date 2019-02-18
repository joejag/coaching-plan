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
