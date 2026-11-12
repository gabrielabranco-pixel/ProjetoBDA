const Sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
nome: {
    type: Sequelize.STRING,

},
email: {
    type: Sequelize.STRING,
    

},
     senha: Sequelize.STRING,

      
})

 module.exports = Usuario;