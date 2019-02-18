# Part 3

* Use this script to create repositories for each step: http://bit.do/basegit
* For help: https://github.com/k88hudson/git-flight-rules

## 1. Rebase -i

* Create new repo
* Add two commits and push them
* Add three local commits
* Use `git rebase -i` (notice how many commits it is letting you change)
* Use rebase to drop the latest commit
* Use rebase to reword a commit
* Use rebase to squash the last two together into one commit

## 2. Pull = fetch + merge

* Create new repo
* Make changes in Alice and push them
* Make non-conflicting changes in Bob and commit them, see `git push` fail, then `git pull`
* What does the history look like? What has hapepned?

## 3. Pull = fetch + rebase

* Create new repo
* Make changes in Alice and push them
* Make non-conflicting changes in Bob and commit them, then `git pull --rebase`
* What does the history look like? Is this better?

## 4. Feature branch conflicts - with merge

* Create new repo
* Push some commits to `master` on Alice.
* Checkout `master` on Bob. pull. Create a feature branch. Create a commit that changes a shared file, push.
* Change the same file on `master` on Alice. Push the change.
* In Bob, pull `master`, integrate `master` into the feature branch using 'merge', what happens to the log?

## 5. Feature branch conflicts - with rebase

* Create new repo
* Push some commits to `master` on Alice.
* Checkout `master` Bob. pull. Create a feature branch. Create a commit that changes a shared file, push.
* Change the same file on `master` on Alice. Push the change.
* In Bob, note the SHAs on the feature branch
* Integrate `master` using 'rebase', what happens to the log?
* try and push, why has it been rejected?
* Push with force
* In Alice Add another local commit then pull. What happens to your commit on Alice?
