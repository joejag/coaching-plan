var express = require('express')
var router = express.Router()

// http -v --auth u:p --session joe http://localhost:3000/cookied

var sessions = []

function sessionBasedLogin (cookies) {
  console.log('Known sessions', sessions)

  if (cookies.oreo !== undefined) {
    if (sessions.includes(cookies.oreo)) {
      return { sessionBased: true, valid: true }
    } else {
      return { sessionBased: true, valid: false }
    }
  }

  return { sessionBased: false }
}

function basicBasedLogin (headers) {
  const b64auth = (headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  const auth = { login: 'u', password: 'p' }
  if (!login || !password || login !== auth.login || password !== auth.password) {
    return false
  } else {
    return true
  }
}

router.use((req, res, next) => {
  var sessionInfo = sessionBasedLogin(req.cookies)
  if (sessionInfo.sessionBased) {
    if (sessionInfo.valid) {
      next()
      return
    } else {
      res.status(401).send('Authentication required.')
      return
    }
  }

  if (basicBasedLogin(req.headers)) {
    var randomNumber = Math.floor(Math.random() * 10000).toString()
    sessions.push(randomNumber)
    res.cookie('oreo', randomNumber, { maxAge: 900000, httpOnly: true })
    next()
  } else {
    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Authentication required.')
  }
})

router.get('/', function (req, res, next) {
  res.send('Users: Session Based')
})

module.exports = router
