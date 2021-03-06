const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
server.use(cors());
server.listen(process.env.PORT);
console.log('Server started');

//Songs
server.get('/songs', songsRoute.getSongs);
server.get('/songs/:name', songsRoute.getSongByName);
server.post('/songs', songsRoute.postSong);
server.delete('/songs', songsRoute.deleteSong);
server.put('/songs/:name', songsRoute.putSong);

//Users
server.get('/users', usersRoute.getUsers);
server.post('/users', usersRoute.postUser);
server.delete('/users', usersRoute.deleteUser);
server.put('/users/:name', usersRoute.modifyUser);
//FavSongs
server.post('/users/:username', usersRoute.addFavSong);