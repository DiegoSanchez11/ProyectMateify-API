const model = require('./model')

// Obtiene los Usuarios de la db
async function findAllUsers(){
    return await model.getAllUsers();
}

// Agrega el usuario a la db
async function addUser(user){
    return await model.newUser(user);
}

module.exports = {
    findAllUsers,
    addUser
}