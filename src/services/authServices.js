const bcrypt = require('bcrypt');

const User = require('../models/user');
const { ERROR_MESSAGES } = require('./config');
const { emptyFieldsChecker } = require('./helpers');
const { SALT_ROUNDS } = require('../config/config');

exports.createNewUser = (userData) => {
  const { firstName, lastName, email, password, repeatPassword } = userData;
  const hasEmptyField = emptyFieldsChecker(userData);
  const hasRepeatAndPassDifferent = password !== repeatPassword;
  if (hasEmptyField) throw ERROR_MESSAGES.emptyField;
  if (hasRepeatAndPassDifferent) throw ERROR_MESSAGES.equalityOfPassword;

  return new Promise((resolve, reject) =>
    bcrypt.hash(password, SALT_ROUNDS, (err, encryptedPassword) => {
      if (err) return reject(err);
      const userData = { firstName, lastName, email, password: encryptedPassword };

      return resolve(new User(userData).save());
    })
  );
};

exports.userLogin = async (userData) => {
  const { email, password } = userData;
  const hasEmptyField = emptyFieldsChecker(userData);
  if (hasEmptyField) throw ERROR_MESSAGES.emptyField;
  const user = await User.findOne({ email: email });
  if (!user) throw ERROR_MESSAGES.userNotFound

  return new Promise((resolve, reject) =>
    bcrypt.compare(password, user.password, (err, isAuth) => {
      if (err) return reject(ERROR_MESSAGES.userNotFound)

      return resolve(user);
    })
  )

};