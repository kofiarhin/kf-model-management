const Image = require("../model/imageModel");

// get images
const getImages = async (req, res, next) => {
  try {
    const images = await Image.findOne({ userId: req.params.id });

    if (!images) {
      res.status(400);
      throw new Error("images not found");
    }

    return res.json(images);
  } catch (error) {
    next(error);
  }
};

// upload images
const uploadImage = async (req, res, next) => {
  console.log(req.body);
  try {
    const check = await Image.findOne({ userId: req.params.id });

    if (!check) {
      const image = await Image.create({
        userId: req.params.id,
        images: req.body.images,
      });
      return res.json(image);
    }
    //  update images
    const update = await Image.findOneAndUpdate(
      { userId: req.params.id },
      {
        $push: { images: { $each: req.body.images } },
      },
      { new: true }
    );

    return res.json(update);
  } catch (error) {
    next(error);
  }
};

const deleteImage = async (req, res, next) => {
  const { url } = req.body;

  const images = await Image.findOneAndUpdate(
    { userId: req.params.id },
    { $pull: { images: url } },
    { new: true }
  );
  return res.json(images);
};

module.exports = {
  uploadImage,
  deleteImage,
  getImages,
};
