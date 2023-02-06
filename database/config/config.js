module.exports = {
  "development": {
    "username": "root",
    "password": '123456789',
    "database": "cool_hardware",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "underscored":true
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
