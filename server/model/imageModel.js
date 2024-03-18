const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  photos: {
    type: [String],
  },
});

module.exports = mongoose.model("Image", imageSchema);
