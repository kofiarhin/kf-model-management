const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// login user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }
    //  compare password
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      res.status(400);
      throw new Error("invalid password");
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
};
