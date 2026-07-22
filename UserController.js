const User = require("../Models/User");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
  try {
    const {
      studentName,
      parentName,
      email,
      password,
      mobile,
      age,
      gender,
      danceStyle,
      batch,
      address,
    } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      studentName,
      parentName,
      email,
      password: hashedPassword,
      mobile,
      age,
      gender,
      danceStyle,
      batch,
      address,
    });

    await user.save();

    res.status(201).json({ message: "Admission Successful" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const { email, studentName } = req.body;
    let user;

    if (email) {
      user = await User.findOne({ email });
    } else if (studentName) {
      user = await User.findOne({ studentName });
    } else {
      return res.status(400).json({ message: "Provide email or studentName" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
  findUser,
};