const Post = require('../models/post');
const { ERROR_MESSAGES } = require('./config');
const { emptyFieldsChecker } = require('./helpers');

exports.createUpdatePostService = ({ postId, postData }) => {
  const hasEmptyField = emptyFieldsChecker(postData);
  if (hasEmptyField) throw ERROR_MESSAGES.EMPTY_FIELD;

  if (postId)
    return Post.findOneAndUpdate({ _id: postId }, postData);

  return new Post(postData).save();
};

exports.getPostsService = ({ filterObj = null, populateArr = null }) => {
  if (filterObj && populateArr)

    return Post
      .find(filterObj)
      .populate(populateArr);
  if (filterObj)

    return Post
      .find(filterObj);
  if (populateArr)

    return Post
      .find()
      .populate(populateArr);

  return Post.find();
};

exports.getPostService = (id, populate) => {
  if (populate)

    return Post.findById(id).populate(populate);

  return Post.findById(id);
};

exports.increasePostVoteService = (postId, userId) => Post.IncreaseVote(postId, userId);
exports.decreasePostVoteService = (postId, userId) => Post.DecreaseVote(postId, userId);
exports.mostFamousAndVotedPostService = (select) => {
  if (select)

    return Post
      .find()
      .select(select)
      .sort({ postRating: -1 })
      .limit(4);

  return Post
    .find()
    .sort({ votes: -1 })
    .limit(4);

};

exports.deletePostService = (postId) => Post.findByIdAndDelete(postId)