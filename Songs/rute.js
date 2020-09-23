const songsController = require('./controller.js');
const express = require('express');
const server = express();
server.use(express.json());
server.listen(5000);
console.log(server.listen());
// Obtiene toda la lista de canciones de la db
async function getSongs(req, res){
    try {
        var songs = await songsController.findAllSongs();
        res.status(200).send(songs);
    } catch (e) {
        res.status(500).send('Hubo un error' + e);
    }
}
// Obtiene la cancion por su nombre
async function getSongByName(req, res){
    try {
        var songs = songsController.getSongByName(req.params.name);
        res.status(200).send(songs);
    } catch (e) {
        res.status(500).send('No se ha encontrado la cancion' + e);
    }
}
// Agrega una nueva cancion a la db
async function postSong(req, res){
    try {
        await songsController.addSong(req.body);
        res.status(201).send('La cancion se agrego con exito')
    } catch (e) {
        res.status(404).send('No se encontro el archivo' + e)
    }
}

module.exports = {
    getSongs,
    postSong
}