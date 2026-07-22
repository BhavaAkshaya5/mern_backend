const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUsers,
  getUserById,
  findUser,
} = require("../Controllers/UserController");

router.post("/register", registerUser);
router.post("/find", findUser);
router.get("/:id", getUserById);
router.get("/", getUsers);

module.exports = router;