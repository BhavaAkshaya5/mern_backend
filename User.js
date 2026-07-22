const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    danceStyle: {
      type: String,
    },
    batch: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);