const Validation = require("../utils/Validation");
const joi = require("joi");
const Casting = require("../model/castingModel");
const { validateInput } = require("../utils/helper");

const createCasting = async (req, res, next) => {
  try {
    const castingSchema = joi.object({
      title: joi.string().required().messages({
        "any.required": "Title is required.",
        "string.empty": "Title cannot be empty.",
      }),
      startDate: joi.date().required().messages({
        "any.required": "End Date is required.",
        "string.empty": "End Date cannot be empty.",
      }),
      endDate: joi.required().messages({
        "any.required": "End Date is required.",
        "string.empty": "End Date cannot be empty.",
      }),
      paid: joi.boolean().required().messages({
        "any.required": "Paid is required",
        "string.empty": "Paid cannot be empty.",
      }),
      message: joi.string().required().messages({
        "any.required": "Message is required.",
        "string.empty": "Message cannot be empty.",
      }),
      images: joi.array().required().messages({
        "any.required": "image is required.",
        "string.empty": "image cannot be empty.",
      }),
      location: joi.string().required().messages({
        "any.required": "Loccation is required.",
        "string.empty": "Location cannot be empty.",
      }),
    });

    const errors = validateInput(castingSchema, req.body);

    if (errors) {
      throw new Validation(400, errors, "validation error");
    }

    const casting = new Casting({ userId: req.user._id, ...req.body });
    await casting.save();
    return res.json(casting);
  } catch (error) {
    next(error);
  }
};

// get all castings
const getCastings = async (req, res, next) => {
  try {
    const castings = await Casting.find()
      .sort({ createdAt: 1 })
      .populate("userId");

    if (!castings) {
      res.status(400);
      throw new Error("castings not found");
    }

    return res.status(200).json(castings);
  } catch (error) {
    next(error);
  }
};

const getCasting = async (req, res, next) => {
  const { id } = req.params;
  try {
    const casting = await Casting.findById(id);
    if (!casting) {
      res.status(400);
      throw new Error("casting not found");
    }
    return res.status(200).json(casting);
  } catch (error) {}
};

// update casting
const updateCasting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCasting = await Casting.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!updatedCasting) {
      res.status(400);
      throw new Error("there was a problem updating casting");
    }
    return res.status(200).json(updatedCasting);
  } catch (error) {
    next(error);
  }
};

// delete Casting
const deleteCasting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const casting = await Casting.findByIdAndDelete(id);
    if (!casting) {
      res.status(400);
      throw new Error("casting was not deleted");
    }
    return res.status(200).json({ id });
  } catch (error) {
    next(error);
  }
};

const getUserCastings = async (req, res, next) => {
  try {
    const { id } = req.params;
    const castings = await Casting.find({ userId: id });
    if (!castings) {
      res.status(400);
      throw new Error("castings not found");
    }
    return res.json(castings);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCasting,
  getCastings,
  updateCasting,
  deleteCasting,
  getCasting,
  getUserCastings,
};
