const { Schema, model } = require('mongoose');

const { EMAIL_REGEX } = require('./config');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required to create registration!'],
    minLength: [3, 'First name must be at least 3 character long!'],
    maxLength: [10, 'First name must be at least 10 character long!']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required to create registration!'],
    minLength: [3, 'Last name be at least 3 character long!'],
    maxLength: [10, 'Last name must be at least 10 character long!']
  },
  email: {
    type: String,
    require: [true, 'Email is required to create registration!'],
    unique: true,
    validate: {
      validator: function (email) {
        return EMAIL_REGEX.test(email);
      },
    },
    message: "The email address is already taken!"
  },
  password: {
    type: String,
    require: [true, 'Password is required to create registration!'],
    minLength: [6, 'Password must be at least 6 symbols long!'],
  },
  myPosts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post'
  }
});

module.exports = model('User', userSchema);