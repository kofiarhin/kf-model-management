const Casting = require("../model/castingModel");
const { Router } = require("express");
const { verifyUser } = require("../middleware/authMiddleware");
const {
  createCasting,
  getCastings,
  updateCasting,
  deleteCasting,
  getCasting,
  getUserCastings,
} = require("../controllers/castingController");
const router = Router();

router.post("/", verifyUser, createCasting);

// get all castings
router.get("/", getCastings);

// get single casting
router.get("/:id", getCasting);

// get user routing
router.get("/user/:id", getUserCastings);

// update casting
router.put("/:id", verifyUser, updateCasting);

// delete casting
router.delete("/:id", verifyUser, deleteCasting);

module.exports = router;
