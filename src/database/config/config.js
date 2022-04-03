require('dotenv').config();

module.exports = {

  "development": {
    "username": "lucash",
    "password": "Lucas1551",
    "database": "lucash_deluxesneakers",
    "host": "mysql-lucash.alwaysdata.net",
    "dialect": "mysql",
    "port": 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}