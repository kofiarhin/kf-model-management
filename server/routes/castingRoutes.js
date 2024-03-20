const Casting = require("../model/castingModel");
const { Router } = require("express");
const {
  createCasting,
  getCastings,
  updateCasting,
  deleteCasting,
  getCasting,
} = require("../controllers/castingController");
const router = Router();

router.post("/", createCasting);

// get all castings
router.get("/", getCastings);

// get single casting
router.get("/:id", getCasting);

// update casting
router.put("/:id", updateCasting);

// delete casting
router.delete("/:id", deleteCasting);

module.exports = router;
