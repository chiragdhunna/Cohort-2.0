var db = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  var username = req.body.username;
  var password = req.body.password;

  let userSchema = db.User;
  let userData = await userSchema.findOne({
    username: username,
    password: password,
  });
  if (userData) {
    next();
  } else {
    res.status(404).json({
      message: "Incorrect Credentials of the user",
    });
  }
}

module.exports = userMiddleware;
