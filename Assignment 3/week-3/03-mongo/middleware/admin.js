var db = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  var username = req.headers.username;
  var password = req.headers.password;

  let adminSchema = db.Admin;
  let adminData = await adminSchema.findOne({
    username: username,
    password: password,
  });
  if (adminData) {
    next();
  } else {
    res.status(404).json({
      message: "Incorrect Credentials of Admin",
    });
  }
  // next();
}

module.exports = adminMiddleware;
