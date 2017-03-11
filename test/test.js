var express = require('express')
var app = express()
var request = require('supertest')

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



// User Story 2
//
// When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey
