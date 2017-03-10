var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Hey, world! How is it?");
});

app.listen(3000, function() {
  console.log('App is listening on 3000');
});
