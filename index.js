var express = require('express')
var app = express()
var RedisStore = require('connect-redis')(session)

app.use(session({
    store: new RedisStore(options)
}))

app.get('/set', function (req, res) {
  req.session = req.query
  console.log(req.session.somekey)
  res.send(req.session)
})

app.listen(3000, function() {
  console.log('App is listening on 3000')
})
