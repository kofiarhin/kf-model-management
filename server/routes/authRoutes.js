const { Router } = require("express");
const {
  loginUser,
  logoutUser,
  registerUser,
} = require("../controllers/authController");

const router = Router();

// register user
router.post("/register", registerUser);
//login user
router.post("/login", loginUser);
// logout user
router.get("/logout", logoutUser);
module.exports = router;
