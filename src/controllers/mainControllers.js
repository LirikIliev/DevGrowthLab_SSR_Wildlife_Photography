const { MAIN_PAGE_TITLE } = require("./config");

exports.getHomeController = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/home', {
    pageTitle: MAIN_PAGE_TITLE.HOME,
    isAuth,
    error: ''
  })
};

exports.getNotFound = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/not-found', {
    pageTitle: MAIN_PAGE_TITLE.NOT_FOUND,
    isAuth,
    error: ''
  });
};