const { Router } = require("express");
const { loginUser, logoutUser } = require("../controllers/authController");

const router = Router();

//
router.post("/login", loginUser);
router.get("/logout", logoutUser);
module.exports = router;
