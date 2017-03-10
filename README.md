# Database server tech test

## Brief
Write a program that runs a server that is accessible on http://localhost:4000/. When your server receives a request on http://localhost:4000/set?somekey=somevalue it should store the passed key and value in memory. When it receives a request on http://localhost:4000/get?key=somekey it should return the value stored at somekey. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code.

## Technology used
I have decided to use Express node.js technology. And although I have never used it before, first of all I decided to challenge myself and explore something new, and then after some research online I got committed to use Express. It seems approachable, with decent documentation, and with the opportunity to integrate with databases later on.

### How to run program / tests
[TBD]

### Adding database
All the relevant information can be found via this link:
http://expressjs.com/en/guide/database-integration.html#postgres
