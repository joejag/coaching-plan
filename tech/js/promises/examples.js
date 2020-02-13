// Callback style
function addStringCb (previous, current, callback) {
  setTimeout(() => {
    if (Math.random() > 0.8) {
      callback(new Error('cb bang!'))
    } else {
      callback(null, previous + ' ' + current)
    }
  }, Math.floor(Math.random() * 100))
}

// Promise style
function addStringPromise (previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject(new Error('bang!'))
      }
      resolve(previous + ' ' + current)
    }, Math.floor(Math.random() * 100))
  })
}

async function goPromise () {
  let x = await addStringPromise(' ', 'A')
  x = await addStringPromise(x, 'B')
  x = await addStringPromise(x, 'C')
  console.log(x)
}

function goCallback (cb) {
  addStringCb(' ', 'A', (error, x) => {
    if (error) {
      cb('whoops')
    } else {
      addStringCb(x, 'B', (error, x) => {
        if (error) {
          cb('whoops')
        } else {
          addStringCb(x, 'C', (error, x) => {
            if (error) {
              cb('whoops')
            } else {
              cb(x)
            }
          })
        }
      })
    }
  })
}

function goPromise () {
  addStringPromise(' ', 'A')
    .then(x => addStringPromise(x, 'B'))
    .then(x => addStringPromise(x, 'C'))
    .then(x => console.log(x))
    .catch(x => console.log('problemo'))
}

async function goAsync () {
  try {
    let x = await addStringPromise(' ', 'A')
    x = await addStringPromise(x, 'B')
    x = await addStringPromise(x, 'B')
    console.log(x)
  } catch {
    console.log('whoops')
  }
}

goAsync()
