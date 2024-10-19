const { errorsDecode } = require("../helpers/helpers");

const errorHandle = (err, req, res, next) => {
  if (err) {
    const { errorObject = "", path = 'pages/not-found', pageTitle = "Not found", values = {}, ...rest } = err;
    const { isAuth, user: { email: userEmail = '' } = {} } = req.cookies;
    const { message = "There is some problem, please try again later!" } = errorsDecode(errorObject);
    res.status(400).render(path, { pageTitle, isAuth, userEmail, values, error: message, ...rest });
  };

  res.status(400).redirect('/not-found');
};

module.exports = errorHandle;