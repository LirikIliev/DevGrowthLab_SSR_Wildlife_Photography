const { Types: { ObjectId } } = require('mongoose');

const {
  createUpdatePostService,
  getPostsService,
  getPostService,
  increasePostVoteService,
  decreasePostVoteService,
  deletePostService
} = require("../services/postService");
const {
  POSTS_PAGE_TITLES,
  POST_VOTES_POPULATE,
  POST_AUTHOR_POPULATE,
} = require("./config");

exports.getCreatePostController = (req, res) => {
  try {
    const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
    res.render('pages/create-post', {
      pageTitle: POSTS_PAGE_TITLES.CREATE_POSTS,
      isAuth,
      values: '',
      userEmail,
      error: ''
    });
  } catch (err) {
    console.error(err);
    next({ errorObject: err })
  }
};

exports.postCreatePostController = async (req, res, next) => {
  try {
    const { user: { _id: userId = '' } } = req.cookies;
    const postData = { ...req.body, author: new ObjectId(userId) };
    await createUpdatePostService({ postData });
    res.status(200).redirect('/');
  } catch (err) {
    console.error(err);
    const errObj = {
      errorObject: err,
      path: "pages/create-post",
      pageTitle: POSTS_PAGE_TITLES.CREATE_POSTS,
      values: req.body
    };
    next(errObj);
  }
};

exports.getAllPostsController = async (req, res, next) => {
  try {
    const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
    const posts = await getPostsService({});
    res.render('pages/all-posts', {
      pageTitle: POSTS_PAGE_TITLES.ALL_POSTS,
      isAuth,
      userEmail,
      posts,
      error: ''
    });
  } catch (err) {
    console.error(err);
    next({ errorObject: err })
  }
};

exports.getUserPostsController = async (req, res, next) => {
  try {
    const { isAuth, user: { _id = '', email: userEmail = '' } = {} } = req.cookies;
    const userPosts = await getPostsService({ filterObj: { author: _id }, populateArr: POST_AUTHOR_POPULATE });

    res.render('pages/user-posts', {
      pageTitle: POSTS_PAGE_TITLES.MY_POSTS,
      isAuth,
      userEmail,
      userPosts,
      error: ''
    });
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
};

exports.getPostDetailController = async (req, res, next) => {
  try {
    const { isAuth, user: { _id: userId = '', email: userEmail = '' } = {} } = req.cookies;
    const { postId } = req.params;
    const details = await getPostService(postId, [POST_AUTHOR_POPULATE, POST_VOTES_POPULATE]);
    const isUserAuthor = details.author?._id?.toString() === userId.toString();
    const isUserVoted = details.votes.some(u_id => u_id._id.toString() === userId.toString());
    const votedUsers = details.votes.length > 0 ? details.votes?.map(user => user.email).join(', ') : '';

    res.render('pages/details', {
      pageTitle: POSTS_PAGE_TITLES.POST_DETAILS,
      isAuth,
      userEmail,
      votedUsers,
      isUserAuthor,
      isUserVoted,
      details,
      error: ''
    });
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
};

exports.getIncreasePostVoteController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { user: { _id } = {} } = req.cookies;
    await increasePostVoteService(postId, _id);

    res.status(200).redirect(`/post-details/${postId}`);
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
};

exports.getDecreasePostVoteController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { user: { _id: userId = '' } = {} } = req.cookies;
    await decreasePostVoteService(postId, userId);

    res.status(200).redirect(`/post-details/${postId}`);
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
};

exports.getEditPostController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
    const post = await getPostService({ _id: postId });
    res.render('pages/create-post', {
      pageTitle: POSTS_PAGE_TITLES.EDIT_POSTS,
      isAuth,
      userEmail,
      values: post,
      error: ''
    });
  } catch (err) {
    next({ errorObject: err })
  }
};

exports.postEditPostController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const postData = req.body;

    await createUpdatePostService({ postId, postData });
    res.redirect(`/post-details/${postId}`);
  } catch (err) {
    console.error(err);
    const errObj = {
      errorObject: err,
      path: "pages/create-post",
      pageTitle: POSTS_PAGE_TITLES.EDIT_POSTS,
      values: req.body
    };

    next(errObj);
  }
};

exports.getDeletePostController = async (req, res, next) => {
  try {
    const { postId } = req.params;
    await deletePostService(postId);

    res.status(200).redirect('/all-posts');
  } catch (err) {
    console.error(err);
    next({ errorObject: err });
  }
}