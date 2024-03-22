const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Image", imageSchema);
