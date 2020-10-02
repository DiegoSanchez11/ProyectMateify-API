const model = require('./model.js');

// Obtiene todas las canciones de la db
async function findAllSongs(){
    return await model.getAllSongs();
}

// Valida que el req reciva los datos del body
async function findSongByName(name){
    return await model.getSongName(name);
}

// Agrega una cancion a la db
async function addSong(song){
    return await model.newSong(song);
}

// Elimina la cancion
async function songDeleted(id){
    return await model.selectedSong(id);
}

// Modifica la cancion
async function editSong(songEditing, songModify){
    return await model.getSongForEdit(songEditing, songModify);
}

module.exports = {
    findAllSongs,
    findSongByName,
    addSong,
    songDeleted,
    editSong
}