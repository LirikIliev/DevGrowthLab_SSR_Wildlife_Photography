const Post = require('../models/post');
const { ERROR_MESSAGES } = require('./config');
const { emptyFieldsChecker } = require('./helpers');


exports.createPostService = (postData) => {
  const hasEmptyField = emptyFieldsChecker(postData);
  if (hasEmptyField) throw ERROR_MESSAGES.EMPTY_FIELD;

  return new Post(postData).save();
}