const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const getUsers = async (req, res, next) => {
  try {
    const query = req.query;

    const users = query
      ? await User.find(query).sort({ createdAt: 1 })
      : await User.find().sort({ createdAt: 1 });
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  console.log("xxxx", req.body);
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.status(400);
      throw new Error("Email already taken");
    }

    // hashed password
    const { password, ...rest } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    console.log(hashedPassword);

    const user = new User({ password: hashedPassword, ...rest });
    await user.save();

    return res.json(user);
  } catch (error) {
    next(error);
  }
};

// get user
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select({ password: 0 });

    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// update user
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    console.log(req.body);
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!user) {
      res.status(400);
      throw new Error("there was a problem updating user");
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// delete user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    console.log(user);
    if (!user) {
      res.status(400);
      throw new Error("There was a problem deleting user");
    }
    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
