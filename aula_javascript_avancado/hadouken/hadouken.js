const utils = require("./utils");

const user = {
  name: "Rf",
  email: "rafaelrodriguesioasys.com.br",
  age: 8,
  password: "rafael",
  confirmPassword: "Rafael@123",
};

const validateForm = () => {
  try {
    utils.checkFormErrors(user);
  } catch (error) {
    console.error(error);
  }
};

const retrieveUserFromDB = () => {
  try {
    const registeredUser = utils.checkUserRegister(user);
    console.log(registeredUser);
  } catch (error) {
    console.error(error);
  }
};

validateForm();
retrieveUserFromDB();
