var express = require('express')
var app = express()
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

app.use(session({ store: new RedisStore(), secret: '' }));

app.get('/set', function (req, res) {
  req.session = req.query
  console.log(req.session.somekey)
  res.send(req.session)
})

app.listen(3000, function() {
  console.log('App is listening on 3000')
})
