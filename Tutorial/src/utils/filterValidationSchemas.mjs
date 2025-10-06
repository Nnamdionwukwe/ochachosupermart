export const createUsersFilterValidationSchema = {
  filter: {
    isLength: {
      options: {
        min: 5,
        max: 10,
      },
      errorMessage: "Must be at leat 3-10 characters",
    },
    notEmpty: {
      errorMessage: "Must not be empty",
    },
    isString: {
      errorMessage: "Must be a string",
    },
  },
};
