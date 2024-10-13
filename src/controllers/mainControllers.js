const { MAIN_PAGE_TITLE } = require("./config");

exports.getHomeController = (req, res) => {
  res.render('pages/home', { pageTitle: MAIN_PAGE_TITLE.HOME })
};

exports.getNotFound = (req, res) => {
  res.render('pages/not-found', { pageTitle: MAIN_PAGE_TITLE.NOT_FOUND });
};