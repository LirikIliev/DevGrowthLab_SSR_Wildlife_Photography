const { createNewUser } = require("../services/authServices");
const { AUTH_PAGE_TITLE } = require("./config");

exports.getLoginController = (req, res) => {
  res.render('pages/login', { pageTitle: AUTH_PAGE_TITLE.LOGIN });
};

exports.getRegisterController = (req, res) => {
  res.render('pages/register', { pageTitle: AUTH_PAGE_TITLE.REGISTER });
};

exports.postRegisterController = async (req, res) => {
  try {
    const registerData = req.body;
    await createNewUser(registerData);
    res.status(200).redirect('/');
  } catch (err) {
    console.error(err);
  }
};


exports.getLogoutController = (req, res) => {
  res.status(200).redirect('/');
};