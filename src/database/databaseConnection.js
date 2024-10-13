const mongoose = require('mongoose');
const { DATABASE_CONNECTION_URL } = require('./config');

const databaseConnection = (callback) =>
  mongoose
    .connect(DATABASE_CONNECTION_URL)
    .then(() => {
      callback()
      console.log('Database was successfully connected!');
    })
    .catch(err => console.error(err));

module.exports = databaseConnection;