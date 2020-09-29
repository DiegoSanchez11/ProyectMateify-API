const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    mail: String,
    age: Number,
    likedSongs: [{type: Schema.ObjectId, ref: "Song"}]
})

const User = mongoose.model('User', userSchema)

async function getAllUsers(){
    return await User.find({});
}


module.exports = {
    getAllUsers
}