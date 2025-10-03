const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({path: '../.env'});

console.log('DB_USER:', process.env.DB_USER); // para probar
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
