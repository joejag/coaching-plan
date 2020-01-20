1. Why and How of VCS

- What do you currently do?
- What are the problems with this approach?
- Here's how that works with Git instead

2. Setup / Create a Repository

- git config (name, email, editor)
- git init
- git clone (something off GitLab or GitHub)

3. Making Changes

- git add, commit, log, status
- repeat for change to same file, add git diff

4. Reverting Changes

- Revert staged changes
- Commit a file then revert it
- Restore older version of one file

5. Ignoring

- Ignore \*.log files

6. GitLab

- create repo on GitLab
- push changes to it
- edit a file in the GitLab UI

7. GitLab collaboration

- Push from two different laptops to the same repo
- Comment on changes
- Create a conflict and resolve it
- Explain: How to avoid conflicts

# Links

https://swcarpentry.github.io/git-novice/

# Why: What is version control and why should I use it?

- How do you currently work? (draw it on A4)

- Why

  - final.png - it happens, some tools support comments

- How

  - play_changes.png - add, then commit differences, it stores the final state
  - versions.png - multiple people can add things to the same file
  - merge.png - if you change the same bit of the file then it will prompt
  - VCS keeps track of these things, storing different version of our files, this diff is a 'commit' (and keeps metadata about them), these history of commits are called a 'repository', which is kept in sync across different computers allowing collaboration on files
  - History: Been around since 80s, started as tools to work with shared disks and moved to being able to have a complete copy of things on your local machine (distributed)

- Question

  - You have some code which you've changed, you want to get back to an older version which didn't have a bug, how do you do this?
  - You need to work with four other people on a file, how do you track changes that people have made?

- Takeaway

  - VCS is an unlimited undo
  - VCS enables many people to work on parallel

# Setting up Git

- Three things you need to tell Git before you can use it: name, email, editor
  (pic Terminator: shoes, boots, motorcycle)

- git config --global user.name "Vlad Dracula"
- git config --global user.email "vlad@tran.sylvan.ia"
- git config --global core.editor "'c:/program files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  OR
- git config --global core.editor "'c:/program files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
- git config --help # if you get this far

# Creating a repo

- mkdir planets; cd planets; git init;
  - see if you can find where git stores files
  - if you delete this directory you lose the projects history
- git status
- git commit --allow-empty # test notepad++ is ok (empty means no commit)

# Tracking Changes

Part 1! Add a file

- Lift work from other Git training about anatomy of a git
- Add file
- git status # untracked
- git add myfile.txt # to be committed
- git commit -m 'my amazing commit message' # -m means message, without launches notepad++
  - git stores this in the .git dir, identifier is here
  - Good commit messages are brief with “If applied, this commit will”
    - You can add more by adding a blank line
- git status # everything up to date
- git log # shows commits with the most recent first

Part 2! Change a file

- Add another line to the file
- git status # unstaged changes
- git diff # check the changes before adding them
  - prints out some guff - between revision numbers, filename, the change
  - it's cryptic as it's designed for tools to process
- git commit -m 'my change' # won't do anything
- git add myfile.txt
- git commit -m 'my change' # will commit
- git status # everything up to date
  - git does this to allow workflows like only commiting some of your changes
  - you can do a git commit --all but it's better to check things first
- git log
- git log --oneline --graph

Part 3: Do the diff in different areas thing

# Exploring History

- most recent commit is called HEAD
- checkout older version of files (git checkout f22b25e mars.txt)
- git checkout f22b25e (without file name checks _everything_ out)
- revert uncommited things with git status encouraged message
- revert whole commit with (git revert sha)
- revert staged changes

# Ignoring things

- log files you don't want
- \*.log in .gitignore

# Remotes in Gitlab

- create repo (just mkdir and git init on the server)
- copy the string to clone it (ssh vs https)
- push some changes
- edit in browser

# Collaborating

- use two laptops, both push
- comment changes in Github

# Conflicts

- Note on minimizing the probability of conflicts
- create a scenario where a conflict happens
