const { POSTS_PAGE_TITLES } = require("./config");


exports.getCreatePostController = (req, res) => {
  res.render('pages/create-post', { pageTitle: POSTS_PAGE_TITLES.CREATE_POSTS })
};

exports.getAllPostsController = (req, res) => {
  res.render('pages/all-posts', { pageTitle: POSTS_PAGE_TITLES.ALL_POSTS });
};

exports.getUserPostsController = (req, res) => {
  res.render('pages/user-posts', { pageTitle: POSTS_PAGE_TITLES.MY_POSTS });
}
