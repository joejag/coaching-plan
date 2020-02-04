Philip Roberts video (26m):
https://www.youtube.com/watch?v=8aGhZQkoFbQ

"""
Concurrency is when two or more tasks can start, run, and complete in overlapping time periods. It doesn't necessarily mean they'll ever both be running at the same instant. For example, multitasking on a single-core machine.

Parallelism is when tasks literally run at the same time, e.g., on a multicore processor.
"""

Example of blocking: http://rauschma.github.io/async-examples/blocking.html

1. Callbacks

```
function printString(string){
  setTimeout(
    () => {
      console.log(string)
    },
    Math.floor(Math.random() * 100) + 1
  )
}
```

- Exercise: Create a function that calls this three times with 'A', 'B' then 'C'
- Exercise: Now make them call in order or A, B, C by using a callback

```
function printString(string, callback){
  setTimeout(
    () => {
      console.log(string)
      callback()
    },
    Math.floor(Math.random() * 100) + 1
  )
}
```

2. Callback hell

- Show code Example
- Problems with callbacks
  - The code becomes harder to read as one has to move from left to right to understand.
  - Error handling is complicated and often leads to bad code.
- Libraries were written
- Promises were standardised

3. Promises

```
function printString(string){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
       console.log(string)
       resolve()
      },
     Math.floor(Math.random() * 100) + 1
    )
  })
}
```

- Exercise: Promise Chain: Use .then() to call A, B, C in order
- Still problems with Promises
  - Cannot use try/catch
  - Gotta makea .then for every promise
  - Looping over a list of promises is challenging

4. Async / Await

- Syntactical sugar on top of promises. No chaining, reads as synchronous code
- "The body of an async function is always wrapped in a new Promise.". This wraps errors too

Example:

```
const myFn = async () => {
  // await ...
}
```

- Exercise: Make your function use `async` an `await` instead of Promises
- Now do the same when state is involved to make your function prints out " A B C":

```
// Callback style
function addString(previous, current, callback){
  setTimeout(
    () => {
      callback((previous + ' ' + current))
    },
    Math.floor(Math.random() * 100) + 1
  )
}

// Promise style
function addString(previous, current){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(previous + ' ' + current)
      },
      Math.floor(Math.random() * 100) + 1
    )
  })
}

```

- Make this work using callbacks, promises and async/await

5. Exceptions

```
 if (Math.random() > 0.5) {
    throw new Error('Sorry, number too big.')
  }
```

- Callback
- Promise (Make sure you use Arrow Functions like `.then(x => someFunc(x))`
- Async/Await

6. Promise All?

# Research

People started writing libraries for it: https://stackoverflow.com/questions/4234619/how-to-avoid-long-nesting-of-asynchronous-functions-in-node-js

Callbacks
Promises
Async/Await

Article: https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90

Why callback hell is a problem: https://stackoverflow.com/questions/25098066/what-is-callback-hell-and-how-and-why-does-rx-solve-it

Rejections: https://blog.bitsrc.io/understanding-javascript-async-and-await-with-examples-a010b03926ea

Deeper dive: https://blog.bitsrc.io/understanding-javascript-async-and-await-with-examples-a010b03926ea

Exercises: https://exploringjs.com/impatient-js/ch_promises.html#the-basics-of-using-promises
