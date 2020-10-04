const model = require('./model')

// Obtiene los Usuarios de la db
async function findAllUsers() {
    return await model.getAllUsers();
}

// Agrega el usuario a la db
async function addUser(user) {
    return await model.newUser(user);
}

// Elimina la cancion
async function userDeleted(id) {
    return await model.selectedUser(id);
}

// Busca la cancion en el model de la db
const modifyUseCont = async (nameMod, songMod) => {
    return await model.userModBD(nameMod, songMod);
};

// FavSong 
async function addFavouriteSong(username, songname) {
    return await model.getFavUserSongName(username, songname);
}

module.exports = {
    findAllUsers,
    addUser,
    userDeleted,
    modifyUseCont,
    addFavouriteSong
}