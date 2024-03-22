const { Router } = require("express");
const {
  uploadImage,
  deleteImage,
  getImages,
} = require("../controllers/ImageController");

const router = Router();

router.post("/:id", uploadImage);

// get images
router.get("/:id", getImages);

router.delete("/:id", deleteImage);

module.exports = router;
