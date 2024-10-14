const { createNewUser } = require("../services/authServices");
const { AUTH_PAGE_TITLE } = require("./config");

exports.getLoginController = (req, res) => {
  res.render('pages/login', { pageTitle: AUTH_PAGE_TITLE.LOGIN, error: '' });
};

exports.getRegisterController = (req, res) => {
  res.render('pages/register', { pageTitle: AUTH_PAGE_TITLE.REGISTER, error: '' });
};

exports.postRegisterController = async (req, res, next) => {
  try {
    const registerData = req.body;
    await createNewUser(registerData);

    res.status(200).redirect('/logic');
  } catch (err) {
    const errObj = {
      errorObject: err,
      path: "pages/register",
      pageTitle: 'Register',
      values: req.body
    };

    next(errObj);
  }
};


exports.getLogoutController = (req, res) => {
  res.status(200).redirect('/');
};