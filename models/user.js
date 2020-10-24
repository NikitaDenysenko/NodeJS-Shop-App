const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: Sequelize.STRING,//shortcut
    email: Sequelize.STRING
});

module.exports = User;
