var express = require('express')
var app = express()

var ses;

app.get('/set', function (req, res) {
  ses = req.query
  res.send('The message has been sent. Please go to http://localhost:4000/get?key=somekey to check whether is was recieved.')
})

app.get('/get', function (req, res) {
  if (ses[req.query.key]) {
    res.send('Message was recieved')
  } else {
    res.send('Recheck url parametrs')
  }
})

app.listen(3000, function() {
  console.log('App is listening on 3000')
})
