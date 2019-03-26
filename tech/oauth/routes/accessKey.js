var express = require('express')
var router = express.Router()

// http -v http://localhost:3000/accesskey token:somethingVeryVeryLong
// sudo ngrep -d lo token

function basicBasedLogin (headers) {
  const tokenInHeaders = (headers.token || '')
  return tokenInHeaders === 'somethingVeryVeryLong'
}

router.use((req, res, next) => {
  if (basicBasedLogin(req.headers)) {
    next()
  } else {
    res.status(401).send('Authentication required.')
  }
})

router.get('/', function (req, res, next) {
  res.send('Users: Access Key based')
})

module.exports = router
