var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Users: Wide open')
})

module.exports = router
