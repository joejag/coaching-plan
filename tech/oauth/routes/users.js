var express = require('express')
var router = express.Router()

// http -v http://localhost:3000/basic

router.get('/', function (req, res, next) {
  res.send('Users: Wide open')
})

module.exports = router
