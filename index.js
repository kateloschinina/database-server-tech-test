var express = require('express')
var app = express()

app.get('/set', function (req, res) {
  req.session = req.query
  console.log(req.session.somekey)
  res.send(req.session)
})

app.listen(3000, function() {
  console.log('App is listening on 3000')
})
