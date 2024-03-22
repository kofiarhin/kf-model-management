const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { verifyUser } = require("../middleware/authMiddleware");
const router = Router();

router.get("/", getUsers);
// create user
router.post("/", createUser);
// get user
router.get("/:id", getUser);

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
