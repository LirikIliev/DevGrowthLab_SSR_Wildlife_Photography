const User = require('../models/user');
exports.createNewUser = (userData) => {

  //! to set validation for fill fields!
  return new User(userData).save();
}