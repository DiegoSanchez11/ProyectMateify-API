const express = require('express');
const mongoose = require('mongoose');

//DATE
const songsRoute = require('./Songs/rute.js');
const usersRoute = require('./Users/rute');

const Songs =
  "mongodb+srv://diego-sanchez:d093953420@prueba-db.ljuef.mongodb.net/pmateify?retryWrites=true&w=majority";
mongoose.connect(Songs, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

var server = express();
server.use(express.json());
server.listen(5000);
console.log('Server host in port 5000');

//Songs
server.get('/songs', songsRoute.getSongs);
server.get('/songs/:name', songsRoute.getSongByName);
server.post('/songs', songsRoute.postSong);
server.delete('/songs', songsRoute.deleteSong);

//Users
server.get('/users', usersRoute.getUsers);
server.post('/users', usersRoute.postUser);