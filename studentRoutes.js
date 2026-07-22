const express = require("express");
const router = express.Router();

const {
  registerStudent,
  getStudents,
} = require("../Controllers/StudentController");

router.post("/register", registerStudent);

router.get("/", getStudents);

module.exports = router;