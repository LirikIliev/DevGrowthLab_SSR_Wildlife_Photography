const Post = require('../models/post');

exports.createPostService = (postData) => {
  //! to set validation for correct fill fields!
  return new Post(postData).save();
}