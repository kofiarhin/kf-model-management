const User = require("../model/userModel");
const Image = require("../model/imageModel");
const bcrypt = require("bcryptjs");

// get users
const getUsers = async (req, res, next) => {
  try {
    const query = req.query;

    const users = query
      ? await User.find(query).sort({ createdAt: 1 }) // get merged data
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
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }

    if (user.userType == "model") {
      const userImage = await Image.findOne({ userId: user._id });
      console.log(userImage.images);
      return res.status(200).json({ ...user._doc, images: userImage.images });
    }

    return res.json({ message: "get user" });
  } catch (error) {
    next(error);
  }
};

// update user
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

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

const getMergedData = async (req, res, next) => {
  const { userType } = req.query;
  try {
    const users = await User.find({ userType: "model" }).select("-password");
    const images = await Image.find();
    let mergedData = [];

    if (userType == "model") {
      mergedData = users.map((user) => {
        const userImages = images.filter((image) =>
          image.userId.equals(user._id)
        );
        return {
          ...user._doc,
          images: userImages[0].images,
        };
      });
    }

    if (userType === "photographer") {
      mergedData = ["photograher 1", "photographer 2"];
    }

    return res.json(mergedData);
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
  getMergedData,
};
