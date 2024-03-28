const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const Validation = require("../utils/Validation");

// register user
const registerUser = async (req, res, next) => {
  try {
    // validate data;
    const userSchema = joi.object({
      name: joi.string().required().messages({
        "any.required": "Name is required.", // Custom error message for required field
        "string.empty": "Name cannot be empty.", // Custom error message for empty string
      }),
      email: joi.string().email().required().messages({
        "any.required": "Email is required.",
        "string.empty": "Email cannot be empty.",
      }),
      password: joi.string().required().messages({
        "any.required": "password is required.",
        "string.empty": "Password cannot be empty.",
      }),
      dob: joi.string().required().messages({
        "any.required": "Date of Birth is required.",
        "string.empty": "Date of Birth cannot be empty.",
      }),
      gender: joi.string().required().messages({
        "any.required": "Gender is required.",
        "string.empty": "Gender cannot be empty.",
      }),
      instagramUrl: joi.string().required().messages({
        "any.required": "Instagram Url is required.",
        "string.empty": "Instagram Url cannot be empty.",
      }),
      userType: joi.string().required().messages({
        "any.required": "User type is required.",
        "string.empty": "User type cannot be empty.",
      }),
      location: joi.string().required().messages({
        "any.required": "Location is required.",
        "string.empty": "Location cannot be empty.",
      }),
      phoneNumber: joi.number().required().messages({
        "any.required": "Phone number is required.",
        "string.empty": "Phone number cannot be empty.",
      }),
      message: joi.string(),
    });

    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const formatedErrors = error.details.map((item) => {
        console.log(item);
        return { field: item.context.label, message: item.message };
      });
      throw new Validation(400, formatedErrors, "validation error");
    }

    // check if user is already registered
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      throw new Validation(
        400,
        [{ field: "email", message: "email already taken" }],
        "validation error"
      );
    }
    const { password, ...rest } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ password: hashedPassword, ...rest });

    if (!user) {
      res.status(400);
      throw new Error("something went wrong");
    }

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// login user
const loginUser = async (req, res, next) => {
  try {
    const userSchema = joi.object({
      email: joi.string().required(),
      password: joi.string().required(),
    });

    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const formatedErrors = error.details.map((item) => {
        return { field: item.context.label, message: item.message };
      });
      throw new Validation(400, formatedErrors, "validation error");
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Validation(
        400,
        [{ field: "email", message: "user not found" }],
        "validation error "
      );
    }
    //  compare password
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      throw new Validation(
        400,
        [{ field: "password", message: "invalid password" }],
        "validation error"
      );
    }

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("jwt", token);
    const { password: userPassword, ...rest } = user._doc;
    return res.json(rest);
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  res.clearCookie("jwt");
  return res.json({ mesage: "you have been logged out" });
};

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
};
