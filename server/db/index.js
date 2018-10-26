const Sequelize = require('sequelize');
const CONFIG = require('../../config/config');

const db = new Sequelize('airbnb_clone', CONFIG.MYSQL_USER, CONFIG.MYSQL_PASS, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  db,
};
