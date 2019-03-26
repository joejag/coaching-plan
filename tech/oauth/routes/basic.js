var express = require('express')
var router = express.Router()

// http -v --auth u:p http://localhost:3000/basic

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
  if (basicBasedLogin(req.headers)) {
    next()
  } else {
    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Authentication required.')
  }
})

router.get('/', function (req, res, next) {
  res.send('Users: Ya Basic')
})

module.exports = router
