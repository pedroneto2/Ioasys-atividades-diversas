const errorsChecker = require("./errorsChecker.js");
const database = require("./database.js");

const checkFormErrors = (user) => {
  const errors = {};

  Object.keys(errorsChecker).forEach((key) => {
    errorsChecker[key].forEach((check) => {
      if (!check.validField(user[key])) {
        if (!errors[key]) errors[key] = []; //cria o array, se ele não existir
        errors[key].push(check.errorMessage);
      }
    });
  });

  if (user.password !== user.confirmPassword)
    errors.confirmPassword = "Passwords do not matches!";

  if (Object.keys(errors)[0]) throw errors;
};

const checkUserRegister = (user) => {
  const registeredUser = database.find((data) => {
    const isEqual = Object.keys(data).every((key) => data[key] === user[key]);
    if (isEqual) return true;
    return false;
  });

  if (!registeredUser) throw "User not registered!";

  return registeredUser;
};

module.exports = { checkFormErrors, checkUserRegister };
