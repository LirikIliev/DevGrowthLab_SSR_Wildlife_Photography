const { AUTH_PAGE_TITLE } = require("./config");

exports.getLoginController = (req, res) => {
  res.render('pages/login', { pageTitle: AUTH_PAGE_TITLE.LOGIN });
};

exports.getRegisterController = (req, res) => {
  res.render('pages/register', { pageTitle: AUTH_PAGE_TITLE.REGISTER });
};

exports.getLogoutController = (req, res) => {
  res.status(200).redirect('/')
};