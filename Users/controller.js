const model = require('./model')

async function findAllUsers(User){
    return await model.getAllUsers();
}

module.exports = {
    findAllUsers
}