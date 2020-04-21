# Context

Two problems:

"Confusion about terms like origin/master and whether or not we are using branches"
"Three of us working on the same script at the same time. It ended up being a bit tricky to merge our various changes"

With a goal:

"What is origin/master and are we use branches"
"What might be good practice to avoid/minimise conflicts"

# Origin/master

- origin (convention for saying 'the shared place for the project', for you this is Gitlab)
- master (a local branch called 'master')
- origin/master (Gitlab's copy of your local 'master' branch)

< do a demo with local Git repo as remote >

# Two branching strategies

- Trunk based (you are here)

  - Plus: simple, small conflicts
  - Minus: See mistakes early

- Feature branch based (this is common)

  - Plus: isolation, review
  - Minus: complicated, worse conflicts

Aside: GitFlow exists for teams releasing once a quarter

# Avoiding merge conflicts

- What did you suggest?

# Strategies

- Resolve: Do it in pairs as it's really hard to do alone
- Avoid: Split software into different files
- Avoid: Sequence work to not involve editing the same files in parallel
- Avoid: If you both need to edit a file, pair up to do both tasks together
