var express = require('express')
var app = express()
var request = require('supertest')

var ses

// User Story 0
//
// Write a program that runs a server that is accessible on http://localhost:4000/

describe('User story 0', function() {
  it('should return a server that is accessible on http://localhost:4000/', function(done) {

    app.get('/', function (req, res) {
      res.send('This is a landing page')
    })

    request(app)
    .get('/')
    .expect('This is a landing page', done)
  });
})


// User Story 1
//
// When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory

describe('User story 1', function() {
  it('should store the passed key and value in memory', function(done) {

    app.get('/set', function (req, res) {
      ses = req.query
      res.send('The message has been sent. Please go to http://localhost:4000/get?key=somekey to check whether is was recieved')
    })

    request(app)
    .get('/set?somekey=somevalue')
    .expect('The message has been sent. Please go to http://localhost:4000/get?key=somekey to check whether is was recieved', done)
  });
})

// User Story 2
//
// When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey

describe('User story 2', function() {
  before(function() {
    app.get('/get', function (req, res) {
      if (ses[req.query.key]) {
        res.send('Message was recieved, stored value is '+ses[req.query.key])
      } else {
        res.send('Recheck url parametrs')
      }
    })
  });
  
  it('should return the value stored at somekey', function(done) {
    request(app)
    .get('/get?key=somekeyother')
    .expect('Recheck url parametrs', done)
  });

  it('should return the value stored at somekey', function(done) {
    request(app)
    .get('/get?key=somekey')
    .expect('Message was recieved, stored value is somevalue', done)
  });
})
