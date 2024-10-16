const { Types: { ObjectId } } = require('mongoose')
const { createPostService, getPostsService, getPostService } = require("../services/postService");
const { POSTS_PAGE_TITLES, POST_AUTHOR_POPULATE } = require("./config");

exports.getCreatePostController = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/create-post', {
    pageTitle: POSTS_PAGE_TITLES.CREATE_POSTS,
    isAuth,
    error: ''
  });
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

exports.getAllPostsController = async (req, res, next) => {
  try {
    const { isAuth } = req.cookies;
    const posts = await getPostsService({});
    res.render('pages/all-posts', {
      pageTitle: POSTS_PAGE_TITLES.ALL_POSTS,
      isAuth,
      posts,
      error: ''
    });
  } catch (err) {
    next({ errorObject: err })
  }
};

exports.getUserPostsController = async (req, res, next) => {
  try {
    const { isAuth } = req.cookies;
    const { user: { _id = "" } = '' } = req.cookies;
    const userPosts = await getPostsService({ filterObj: { author: _id }, populateArr: POST_AUTHOR_POPULATE });

    res.render('pages/user-posts', {
      pageTitle: POSTS_PAGE_TITLES.MY_POSTS,
      isAuth,
      userPosts,
      error: ''
    });
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
};

exports.getPostDetailService = async (req, res, next) => {
  try {
    const { isAuth } = req.cookies;
    const { postId } = req.params;
    const { user: { _id: userId = '' } = {} } = req.cookies;
    const details = await getPostService(postId, POST_AUTHOR_POPULATE);
    const isUserAuthor = details.author?._id?.toString() === userId.toString();
    const isUserVoted = details.votes.some(u_id => u_id?.toString() === userId.toString());

    res.render('pages/details', {
      pageTitle: POSTS_PAGE_TITLES.POST_DETAILS,
      isAuth,
      isUserAuthor,
      isUserVoted,
      details,
      error: ''
    });
  } catch (err) {
    next({ errorObject: err });
  }
};