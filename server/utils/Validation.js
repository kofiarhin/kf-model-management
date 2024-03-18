class Validation extends Error {
  constructor(errorCode, errors, message) {
    super(message);
    this.errorCode = errorCode;
    this.errors = errors;
  }
  getErrors() {
    return this.errors;
  }
}

module.exports = Validation;
