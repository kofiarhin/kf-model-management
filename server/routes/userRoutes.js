const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getMergedData,
} = require("../controllers/userController");
const { verifyUser } = require("../middleware/authMiddleware");
const router = Router();

router.get("/", getUsers);

// merged data
router.get("/mergeddata", getMergedData);
// get user
router.get("/:id", getUser);

// create user
router.post("/", createUser);

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
