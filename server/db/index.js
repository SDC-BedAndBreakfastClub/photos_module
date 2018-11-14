const Sequelize = require('sequelize');

const db = new Sequelize('mySQL://root@localhost:3306/airbnb_clone');

module.exports = db;
