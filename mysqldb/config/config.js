'use strict';

module.exports = {
  development: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
    host: process.env.MYSQL_DB_HOST,
    dialect: 'mysql'
    // dialectOptions: {
    //   ssl: true,
    // },
  },
};