const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "no token" });
    }
    //   verity token
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    // get user
    const user = await User.findById(id);

    if (!user) {
      res.status(400);
      throw new Error("invalid token");
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const verifyAdmin = async (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.userType !== "admin") {
      res.status(400);
      throw new Error("not authorized: not admin");
    }
    next();
  });
};

module.exports = { verifyUser, verifyAdmin };
