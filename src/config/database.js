const { Sequelize } = require('sequelize');
const config = require('./config.json')['development']; 

const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    {
        host: config.host,
        dialect: config.dialect,
        logging: false 
    }
);

module.exports = sequelize;
