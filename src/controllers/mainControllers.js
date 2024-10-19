const { mostFamousAndVotedPostService } = require("../services/postService");
const { MAIN_PAGE_TITLE } = require("./config");

exports.getHomeController = async (req, res, next) => {
  try {
    const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
    const posts = await mostFamousAndVotedPostService('image');
    res.render('pages/home', {
      pageTitle: MAIN_PAGE_TITLE.HOME,
      isAuth,
      userEmail,
      posts,
      error: ''
    });
  } catch (err) {
    next({ errorObject: err });
  }
};

exports.getNotFoundController = (req, res) => {
  const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
  res.render('pages/not-found', {
    pageTitle: MAIN_PAGE_TITLE.NOT_FOUND,
    isAuth,
    userEmail,
    error: ''
  });
};