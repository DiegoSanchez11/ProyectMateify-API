const usersController = require('./controller')

// Obtiene la Lista de Usuarios
async function getUsers(req, res){
    try {
        var users = await usersController.findAllUsers({})
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send('No se encontraron Usuarios en la base de datos', e)
    }
}

module.exports = {
    getUsers
}