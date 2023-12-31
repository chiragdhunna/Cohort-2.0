var db = require("../db/index");
const jwt = require("jsonwebtoken");
const secretKey = "uj5afakt1u";

// Function for jwt token creation
function tokenGeneration(username) {
  var token = jwt.sign({ username: username }, secretKey);
  return token;
}

function tokenDecode(token) {
  var decoded = jwt.verify(token, secretKey);
  try {
    var decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
}

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  var token = req.headers.authorization;

  if (token) {
    const decodedToken = tokenDecode(token.replace("Bearer ", ""));
    if (decodedToken) {
      next();
    } else {
      res.status(401).json({
        message: "Incorrect Credentials of Admin",
      });
    }
  } else {
    res.status(401).json({
      message: "Token Error",
    });
  }
}

module.exports = {
  tokenGeneration: tokenGeneration,
  tokenDecode: tokenDecode,
  adminMiddleware: adminMiddleware,
};
