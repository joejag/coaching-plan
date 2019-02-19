# Part 3

* Use this script to create repositories for each step: http://bit.do/basegit (it's the same as the last one)
* For help: https://github.com/k88hudson/git-flight-rules

## 1. Rebase -i

* Create new repo, go to Alice.
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
* What does the history look like? What has happened?

## 3. Pull = fetch + rebase

* Create new repo
* Make changes in Alice and push them
* Make non-conflicting changes in Bob and commit them, then `git pull --rebase`
* What does the history look like? Is this better?

## 4. Feature branch conflicts - with merge

* Create new repo
* As Alice, Push some commits to `master`
* As Bob, pull the changes. Create a feature branch. Create a commit that changes a shared file, push.
* As Alice, Change the same file on `master`. Push the change.
* As Bob, pull `master`, integrate `master` into the feature branch using 'merge', fix the conflict. What happens to the log?

## 5. Feature branch conflicts - with rebase

* Create new repo
* As Alice, Push some commits to `master`
* As Bob, pull the changes. Create a feature branch. Create a commit that changes a shared file, push.
* As Alice, Change the same file on `master`. Push the change.
* As Alice, check out the same feature branch
* As Bob, take a note of the SHAs on the feature branch
* As Bob, integrate `master` using 'rebase', what happens to the log?
* As Bob, try and push, why has it been rejected?
* As Bob, push with force
* As Bob, check the SHAs, have they changed from before, why?
* As Alice, add a non-conflictin local commit to the feature branch then pull. Can you get your commit in?
