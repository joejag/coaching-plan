var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: 'OAuth demo app' })
})

module.exports = router
