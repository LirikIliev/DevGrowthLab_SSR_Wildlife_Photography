const User = require('../models/user');
const { ERROR_MESSAGES } = require('./config');
const { emptyFieldsChecker } = require('./helpers');

exports.createNewUser = (userData) => {
  const hasEmptyField = emptyFieldsChecker(userData);
  if (hasEmptyField) throw ERROR_MESSAGES.emptyField;

  return new User(userData).save();
};