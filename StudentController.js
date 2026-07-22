const Student = require("../Models/Student");

const registerStudent = async (req, res) => {
  try {
    const student = new Student(req.body);

    await student.save();

    res.status(201).json({
      message: "Admission Successful",
      student,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerStudent,
  getStudents,
};