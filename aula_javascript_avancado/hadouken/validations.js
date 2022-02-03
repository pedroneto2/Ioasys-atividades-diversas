//GENERAL
const isNotEmpty = (value) => {
  if (typeof value === "string") {
    return !!value;
  }

  if (typeof value === "number") {
    return true;
  }

  if (typeof value === "boolean") {
    return true;
  }

  return false;
};

const isValidLength = (value) => value.length >= 3 && value.length <= 100;

//EMAIL
const isEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

//AGE

const isValidAgeRange = (age) => age >= 18 && age <= 120;

//PASSWORD
const hasAtLeastOneDigit = (password) => /[\d]/.test(password);

const hasAtLeastOneLowerCaseCharacter = (password) => /[a-z]/.test(password);

const hasAtLeastOneUpperCaseCharacter = (password) => /[A-Z]/.test(password);

const hasAtLeastOneSpecialCharacter = (password) =>
  /[^A-Za-z0-9]/.test(password);

const hasNotSpaces = (password) => /[^\s]/.test(password);

const hasValidLength = (password) =>
  password.length >= 8 && password.length <= 32;

module.exports = {
  isNotEmpty,
  isValidLength,
  isEmail,
  isValidAgeRange,
  hasAtLeastOneDigit,
  hasAtLeastOneLowerCaseCharacter,
  hasAtLeastOneUpperCaseCharacter,
  hasAtLeastOneSpecialCharacter,
  hasNotSpaces,
  hasValidLength,
};
