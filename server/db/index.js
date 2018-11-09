const Sequelize = require('sequelize');

const db = new Sequelize('airbnb_clone', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

module.exports = db;
