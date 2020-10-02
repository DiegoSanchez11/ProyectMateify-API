const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    mail: String,
    age: Number,
    likedSongs: [{ type: Schema.ObjectId, ref: "Song" }]
})

const User = mongoose.model('User', userSchema)

// Obtiene todos los usuarios
async function getAllUsers() {
    return await User.find({});
}

// Agrega y guarda el usuario en la db
async function newUser(user) {
    var saveUser = new User(user);
    await saveUser.save();
}

// Busca la cancion a eliminar
async function selectedUser(idForDelete) {
    const findUserForDelete = User.findByIdAndRemove({ _id: idForDelete });
    return findUserForDelete;
}

// Obtiene la cancion de la db 
const userModBD = async (nameMod, songMod) => {
    const songModifyFind = await User.findOneAndUpdate({ name: nameMod }, songMod);
    songModifyFind.save();

}

module.exports = {
    getAllUsers,
    newUser,
    selectedUser,
    userModBD
}