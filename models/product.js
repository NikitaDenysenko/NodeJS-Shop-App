const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: Sequelize.STRING,//shortcut
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;
