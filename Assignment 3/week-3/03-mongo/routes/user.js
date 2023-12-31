const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
var db = require("../db/index");

// User Routes
router.post("/signup", async (req, res, next) => {
  // Implement user signup logic
  var username = req.body.username;
  var password = req.body.password;

  userSchema = db.User;

  if (
    await userSchema.findOne({
      username: username,
    })
  ) {
    res.json({
      message:
        "User with same credentials already exists.... Try different username",
    });
  } else {
    var userDetails = new userSchema({
      username: username,
      password: password,
      courses: [],
    });

    userDetails.save();

    res.json({
      message: "User created successfully",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  var username = req.body.username;
  var password = req.body.password;

  userSchema = db.User;
  let userData = await userSchema.findOne({
    username: username,
    password: password,
  });
  if (userData) {
    res.send(userData.courses);
  } else {
    res.json({
      message: "User Does not exits",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  var courseId = req.params.courseId;
  var username = req.body.username;
  var password = req.body.password;
  userSchema = db.User;
  let userData = await userSchema.findOne({
    username: username,
    password: password,
  });
  if (userData) {
    let foundData = userData.courses.find((courseID) => courseID === courseId);
    if (foundData) res.send("Course already purchased");
    else {
      userData.courses.push(courseId);
      userData.save();
      res.send("Course purchased successfully");
    }
  } else {
    res.json({
      message: "User Does not exits",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  var courseId = req.params.courseId;
  var username = req.body.username;
  var password = req.body.password;
  userSchema = db.User;
  let userData = await userSchema.findOne({
    username: username,
    password: password,
  });
  if (userData) {
    res.send(userData.courses);
  } else {
    res.json({
      message: "User Does not exits",
    });
  }
});

module.exports = router;
