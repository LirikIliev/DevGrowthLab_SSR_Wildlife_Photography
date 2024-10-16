const { Schema, model } = require('mongoose');
const { URL_REGEX } = require('./config');

const postSchema = new Schema({
  title: {
    type: String,
    require: [true, 'Title is required to create a post.'],
    minLength: [10, 'Title minimum symbol are three.'],
  },
  keyWord: {
    type: String,
    require: [true, 'Keyword is require to create a post.']
  },
  location: {
    type: String,
    require: [true, 'Location is required to create a post.'],
    minLength: [4, 'Minimum length of location is four symbols!']
  },
  dateOfCreate: {
    type: String,
    require: [true, 'Date of creation is require to create a post!']
  },
  image: {
    type: String,
    require: [true, 'Image is required to create a post!'],
    validate: {
      validator: function (img) {
        return URL_REGEX.test(img);
      },
      message: 'Please use URL for img!'
    }
  },
  description: {
    type: String,
    require: [true, 'Description is required to create a post!'],
    minLength: [150, 'Description must be at least 50 symbols long.'],
    maxLength: [500, 'Description must be maximum 500 symbols long.']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  },
  postRating: {
    type: Number,
    default: 0,
  }
});

postSchema.static.IncreaserVote = function (userId) {
  const isUserAlreadyVote = this.votes.some(uid => uid.toString() === userId.toString());

  if (isUserAlreadyVote) return;
  this.votes
    .push(userId)
    .save();

  const newRating = Number(this.postRating) += 1;
  return this.postRating = newRating.save();
};

postSchema.static.DecreaseVote = function (userId) {
  const isUserVoted = this.votes.some(uid => uid.toString() === userId.toString());

  if (!isUserVoted) return;
  const filteredVote = this.votes.find(u_id => u_id.toString() !== userId.toString());
  this.votes = filteredVote.save();
};

module.exports = model('Post', postSchema);