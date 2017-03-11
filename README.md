# Database server tech test

## Brief
Write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at somekey. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code.

## Technology used
I have decided to use Express node.js technology. And although I have never used it before, first of all I decided to challenge myself and explore something new, and then after some research online I got committed to use Express. It seems approachable, with decent documentation, and with the opportunity to integrate with databases later on.
As a testing framework I used mocha / supertest, which is suitable for testing in express.

### How to run program / tests
Before running please make sure that you have node.js installed on your computer.
```
$ git clone git@github.com:kateloschinina/database-server-tech-test.git
$ node index.js
```
Then go on `http://localhost:4000/` in you browser, you should see "This is a landing page" message.

Play with `http://localhost:4000/set?yourkey=yourvalue` and `http://localhost:4000/get?key=yourkey` to see that the program returns what was requested.

To see that all the tests pass run `$ npm test` in command line.

### Adding database
All the relevant information can be found via this link:
http://expressjs.com/en/guide/database-integration.html#postgres

## Reflections
Successes
* I used framework that I has never used before, and made it working and found my knowledges of web technologies applicable. I demonstrated that I can learn new technology within short period of time
* I pushed myself using not the first language of my choice
* All functionality was well tested

Struggles
* I wasn't able to make sessions working. And although I think sessions were not necessary in this task, it would be great to understand how they work in express in the future.
