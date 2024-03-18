const Validation = require("../utils/Validation");
const errorHandler = (error, req, res, next) => {
  if (error instanceof Validation) {
    return res
      .status(400)
      .json({ message: "validation error", errors: error.getErrors() });
  }
  const statusCode = res.statusCode ? res.statusCode : 500;
  return res.status(statusCode).json({ message: error.message });
};

module.exports = {
  errorHandler,
};
