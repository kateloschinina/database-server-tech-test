var express = require('express')
var app = express()

var ses

app.get('/', function (req, res) {
  res.send('This is a landing page')
})

app.get('/set', function (req, res) {
  ses = req.query
  res.send('The message has been sent. Please go to http://localhost:4000/get?key=somekey to check whether is was recieved')
})

app.get('/get', function (req, res) {
  if (ses[req.query.key]) {
    res.send('Message was recieved, stored value is '+ses[req.query.key])
  } else {
    res.send('Recheck url parametrs')
  }
})

app.listen(4000, function() {
  console.log('App is listening on 4000')
})
