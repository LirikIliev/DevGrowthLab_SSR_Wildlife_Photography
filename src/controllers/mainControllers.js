const { mostFamousAndVotedPost } = require("../services/postService");
const { MAIN_PAGE_TITLE } = require("./config");

exports.getHomeController = async (req, res, next) => {
  try {
    const { isAuth } = req.cookies;
    const posts = await mostFamousAndVotedPost('image');
    res.render('pages/home', {
      pageTitle: MAIN_PAGE_TITLE.HOME,
      isAuth,
      posts,
      error: ''
    });
  } catch (err) {
    next({ errorObject: err });
  }
};

exports.getNotFound = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/not-found', {
    pageTitle: MAIN_PAGE_TITLE.NOT_FOUND,
    isAuth,
    error: ''
  });
};