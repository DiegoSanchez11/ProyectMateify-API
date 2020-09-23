const express = require('express');
//const songsRoute = require('');
//const usersRoute = require('');

var server = express();
server.use(express.json());
server.listen(5000);
console.log('Server host in port 5000');

//Songs
server.get('/songs', songsRoute.getSongs)
server.post('/songs', songsRoute.postSong)

//Users
server.get('/users', usersRoute.getUsers)
server.post('/users', usersRoute.postUser)