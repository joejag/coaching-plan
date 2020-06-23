# Overview

- Engager: Discuss current experience with Enzyme
- Content: Philosphophy of RTL
- Exercise: https://github.com/joejag/react-todo-2019/
- Roundup: Like and dislike

## Content

- Goal: Create maintainable tests that give you high confidence that your components work. Allow you to refactor implementation without changing behaviour.
- The more the test resembles how the code is used, the more you trust it
- RTL is not a test runner, or part of jest. It is a library

- Principles:

  - Deal with Dom nodes, not components
  - Interact the way a user will (first try to find buttons, text on screen, then accessibility, then add an 'id')

- Super short example

- Show cheat sheet and go over items (https://testing-library.com/docs/react-testing-library/cheatsheet)

## Slides

1. RTL (a library)
2. Goal: Create maintainable tests that give you high confidence that your components work. Allow you to refactor implementation without changing behaviour.
   Rationale: The more the test resembles how the code is used, the more you trust it
3. How it works: JSDOM, add query selectors onto the document (show in Chrome and node)
4. How it works: Demo testing a page
5. Companion libraries: Jest and user-event (also works in Angular, Riot and others)
   Demo: toHaveTextContent(), toBeInTheDocument()
6. Hierarchy of calls favours accesibility
   List order
7. Introduce Exercise
