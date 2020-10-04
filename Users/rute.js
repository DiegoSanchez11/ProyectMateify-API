const usersController = require('./controller')

// Obtiene la Lista de Usuarios
async function getUsers(req, res) {
    try {
        var users = await usersController.findAllUsers()
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send('No se encontraron Usuarios en la base de datos', e)
    }
}

// Agrega un nuevo usuario a la db
async function postUser(req, res) {
    try {
        await usersController.addUser(req.body);
        res.status(201).send('Se agrego el usuario correctamente');
    } catch (e) {
        res.status(404).send('No se encontro el archivo ' + e);
    }
}

// Elimina un Usuario de la Base de datos
async function deleteUser(req, res) {
    try {
        var id = req.body._id;
        await usersController.userDeleted(id);
        res.status(200).send('Se elimino el usuario correctamente');
    } catch (e) {
        res.status(500).send('No se encontro el usuario a eliminar ' + e);
    }
}

// Modifica la cancion en la base de datos
async function modifyUser(req, res) {
    try {
        const nameMod = req.params.name;
        const songMod = req.body;
        const modiUser = await usersController.modifyUseCont(nameMod, songMod);
        res.send(modiUser);
    } catch (e) {
        res.send('No se pudo Modificar la cancion ' + e);
    }
};

async function addFavSong(req, res) {
    try {
        var username = req.params.username;
        var songname = req.body;
        const favSong = await usersController.addFavouriteSong(username, songname);
        res.status(200).send(favSong);
    } catch (e) {
        res.status(500).send('No se pudo agregar la cancion a favoritos del usuario ', e);
    }
}

module.exports = {
    getUsers,
    postUser,
    deleteUser,
    modifyUser,
    addFavSong
}