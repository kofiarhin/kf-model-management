const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    instagramUrl: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    userType: {
      type: String,
      required: true,
      enum: ["photographer", "model", "admin"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
