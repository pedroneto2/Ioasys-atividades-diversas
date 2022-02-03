const validations = require("./validations");

const errorsChecker = {
  name: [
    {
      validField: validations.isNotEmpty,
      errorMessage: "Name field is empty!",
    },
    {
      validField: validations.isValidLength,
      errorMessage: "Name must have between 3 and 100 characters!",
    },
  ],
  email: [
    {
      validField: validations.isNotEmpty,
      errorMessage: "Email field is empty!",
    },
    {
      validField: validations.isEmail,
      errorMessage: "Invalid Email!",
    },
  ],
  age: [
    {
      validField: validations.isNotEmpty,
      errorMessage: "Age field is empty!",
    },
    {
      validField: validations.isValidAgeRange,
      errorMessage: "Age must be between 18 and 120 years old!",
    },
  ],
  password: [
    {
      validField: validations.isNotEmpty,
      errorMessage: "Password field is empty!",
    },
    {
      validField: validations.hasAtLeastOneDigit,
      errorMessage: "Password must have at least one number digit!",
    },
    {
      validField: validations.hasAtLeastOneLowerCaseCharacter,
      errorMessage: "Password must have at least one lower case character!",
    },
    {
      validField: validations.hasAtLeastOneUpperCaseCharacter,
      errorMessage: "Password must have at least one upper case character!",
    },
    {
      validField: validations.hasAtLeastOneSpecialCharacter,
      errorMessage:
        "Password must have at least one special character! Special characters examples: *.!@#$%^&(){}[]:;<>,.?/~_+-=|\\",
    },
    {
      validField: validations.hasNotSpaces,
      errorMessage: "Password must NOT have spaces!",
    },
    {
      validField: validations.hasValidLength,
      errorMessage: "Password must have between 8 and 32 characters!",
    },
  ],
};

module.exports = errorsChecker;
