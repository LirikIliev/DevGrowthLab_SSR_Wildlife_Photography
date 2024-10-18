const Post = require('../models/post');
const { ERROR_MESSAGES } = require('./config');
const { emptyFieldsChecker } = require('./helpers');

exports.createPostService = (postData) => {
  const hasEmptyField = emptyFieldsChecker(postData);
  if (hasEmptyField) throw ERROR_MESSAGES.EMPTY_FIELD;

  return new Post(postData).save();
};

exports.getPostsService = ({ filterObj = null, populateArr = null }) => {
  if (filterObj && populateArr)
    return Post
      .find(filterObj)
      ?.populate(populateArr);
  if (filterObj)
    return Post
      .find(filterObj);
  if (populateArr)
    return Post
      .find()
      ?.populate(populateArr);

  return Post.find();
};

exports.getPostService = (id, populate) => {
  if (populate)
    return Post.findById(id).populate(populate);

  return Post.findById(id);
};

exports.increasePostVote = (postId, userId) => Post.IncreaseVote(postId, userId);
exports.decreasePostVote = (postId, userId) => Post.DecreaseVote(postId, userId);