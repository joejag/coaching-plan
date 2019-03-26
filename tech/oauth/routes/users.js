var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('some users')
})

module.exports = router
