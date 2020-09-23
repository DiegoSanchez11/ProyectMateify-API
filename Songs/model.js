const mongoose = require('mongoose');
const Schema = require('mongoose.Schema');

const songSchema = new Schema({
    name:String,
    album:String,
    duration:String,
    artist:String
});

const Song = mongoose.model('Songs', songSchema);

async function getAllSongs(){
    return await Song.find({});
}

async function addSong(song){
    var newSong = new Song(song);
    await newSong.save();
}

module.exports = {
    getAllSongs,
    addSong
}