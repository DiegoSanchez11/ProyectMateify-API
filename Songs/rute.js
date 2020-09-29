const songsController = require('./controller.js');

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
        let name = req.params.name;
        const songName = await songsController.findSongByName(name);
        res.status(200).send(songName); 
    } catch (e) {
        res.status(500).send('No se encontro la cancion en la Base de datos ' + e)
    }
}

// Agrega una nueva cancion a la db
async function postSong(req, res){
    try {
        await songsController.addSong(req.body);
        res.status(201).send('La cancion se agrego con exito');
    } catch (e) {
        res.status(404).send('No se encontro el archivo' + e);
    }
}

// Elimina la Candion de la Base de datos
async function deleteSong(req, res){
    try {
        var id = req.body._id;
        await songsController.songDeleted(id);
        res.status(200).send('Se elimino la cancion correctamente');
    } catch (e) {
        res.status(500).send('No se encontro la cancion a eliminar ' + e);
    }
}

module.exports = {
    getSongs,
    getSongByName,
    postSong,
    deleteSong
}