const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name:String,
    album:String,
    duration:String,
    artist:String
});

const Song = mongoose.model('Song', songSchema);

// Busca las canciones en la db
async function getAllSongs(){
    return await Song.find({});
}

// Busca en el body la req del POST
async function getSongName(name){
    const findSong =Song.find({name: name});
    return findSong;
}

// Agrega y guarda la cancion en la db
async function newSong(song){
    var saveSong = new Song(song);
    await saveSong.save();
}

// Busca la cancion a eliminar
async function selectedSong(idForDelete){
    const findSongForDelete = Song.findByIdAndRemove({_id: idForDelete});
    return findSongForDelete;
}


module.exports = {
    getAllSongs,
    getSongName,
    newSong,
    selectedSong
}
    