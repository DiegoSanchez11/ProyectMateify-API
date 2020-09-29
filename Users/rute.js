const usersController = require('./controller')

// Obtiene la Lista de Usuarios
async function getUsers(req, res){
    try {
        var users = await usersController.findAllUsers()
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send('No se encontraron Usuarios en la base de datos', e)
    }
}

// Agrega un nuevo usuario a la db
async function postUser(req, res){
    try {
        await usersController.addUser(req.body);
        res.status(201).send('Se agrego el usuario correctamente');
    } catch (e) {
        res.status(404).send('No se encontro el archivo ' + e);
    }
}

module.exports = {
    getUsers,
    postUser
}