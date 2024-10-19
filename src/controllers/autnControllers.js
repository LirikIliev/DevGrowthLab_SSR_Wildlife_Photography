const { createNewUser, userLogin } = require("../services/authServices");
const { AUTH_PAGE_TITLE } = require("./config");

exports.getLoginController = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/login', {
    pageTitle: AUTH_PAGE_TITLE.LOGIN,
    isAuth,
    values: {},
    error: ''
  });
};

exports.postLoginController = async (req, res, next) => {
  try {
    const user = await userLogin(req.body);
    res.locals.userEmail = user.email || '';
    res.cookie('user', user);
    res.cookie('isAuth', true);
    res.status(200).redirect('/');
  } catch (err) {
    const errObj = {
      errorObject: err,
      path: "pages/login",
      pageTitle: 'Login',
      values: req.body
    };
    next(errObj);
  }
};

exports.getRegisterController = (req, res) => {
  const { isAuth } = req.cookies;
  res.render('pages/register',
    {
      pageTitle: AUTH_PAGE_TITLE.REGISTER,
      isAuth,
      values: {},
      error: ''
    });
};

exports.postRegisterController = async (req, res, next) => {
  try {
    const registerData = req.body;
    await createNewUser(registerData);

    res.status(200).redirect('/login');
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
  res.clearCookie('isAuth');
  res.clearCookie('user');
  res.status(200).redirect('/');
};