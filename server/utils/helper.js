const validateInput = (schema, payload) => {
  const { error, value } = schema.validate(payload, { abortEarly: false });
  if (error) {
    const formattedErrors = error.details.map((item) => {
      return {
        field: item.context.label,
        message: item.message,
      };
    });
    return formattedErrors;
  }
};

module.exports = {
  validateInput,
};
