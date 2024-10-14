const { Types: { ObjectId } } = require('mongoose')
const { createPostService } = require("../services/postService");
const { POSTS_PAGE_TITLES } = require("./config");

exports.getCreatePostController = (req, res) => {
  res.render('pages/create-post', { pageTitle: POSTS_PAGE_TITLES.CREATE_POSTS });
};

exports.postCreatePostController = async (req, res, next) => {
  try {
    const postData = { ...req.body, author: new ObjectId('670c032cc3cb606150de6e55') };
    createPostService(postData);
    res.status(200).redirect('/');
  } catch (err) {
    console.error(err);
    const errObj = {
      errorObject: err,
      path: "pages/create-post",
      pageTitle: 'Create Post',
      values: req.body
    };
    next(errObj);
  }
};

exports.getAllPostsController = (req, res) => {
  res.render('pages/all-posts', { pageTitle: POSTS_PAGE_TITLES.ALL_POSTS, error: '' });
};

exports.getUserPostsController = (req, res) => {
  res.render('pages/user-posts', { pageTitle: POSTS_PAGE_TITLES.MY_POSTS, error: '' });

};
