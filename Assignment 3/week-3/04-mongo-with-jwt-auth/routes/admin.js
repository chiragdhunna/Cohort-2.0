const { Router } = require("express");
const {
  tokenGeneration,
  tokenDecode,
  adminMiddleware,
} = require("../middleware/admin");
const router = Router();
var db = require("../db/index");
var adminModel = db.Admin;
var courseModel = db.Course;
const jwt = require("jsonwebtoken");
const secretKey = "uj5afakt1u";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;

  var token = tokenGeneration(username);

  req.headers.authorization = `Bearer ${token}`;

  var adminData = await adminModel.findOne({
    username: username,
    password: password,
  });

  if (adminData) {
    res.send("Admin Already Exists");
  } else {
    var newAdminData = new adminModel({
      username: username,
      password: password,
      courses: [],
    });
    newAdminData.save();

    res.json({
      message: "Admin created successfully",
      token: token,
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  /*  - POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" } */

  /*
  Course Schema
  id: Number,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
  */

  let username = req.headers.username;
  let password = req.headers.password;
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
  let courseID = req.body.id;
  let published = req.body.published;

  // Checking if the course already exists
  var adminData = await adminModel.findOne({
    username: username,
    password: password,
  });

  // var storing information about the course ID in the admin account
  var courseChk = adminData.courses.find((c) => c === courseID);

  if (courseChk) {
    res.send(" A course with same Course ID already exists in your account");
  } else {
    var courseIDFind = await courseModel.findOne({
      id: courseID,
    });

    // Pushing the course ID to admin Data

    adminData.courses.push(courseID);
    adminData.save();

    if (!courseIDFind) {
      var courseData = new courseModel({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        id: courseID,
        published: published,
      });
      // saving the course to the list with its course ID
      courseData.save();
    }

    res.send("Course added successfully to your account");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let username = req.body.username;
  let password = req.body.password;

  var adminData = await adminModel.findOne({
    username: username,
    password: password,
  });

  if (adminData) {
    res.send(adminData.courses);
  } else {
    res.json({
      message: "Admin does not exists, hence courses available",
    });
  }
});

module.exports = router;
