const register = {
  name: "Pedro Oliveira",
  years: 27,
  nationality: "Brasileira",
  state: "São Paulo",
  city: "Nhandeara",
  educatiton: "ioasysCamp",
};

const validateRegister = (register) => {
  const registerModel = {
    name: "Pedro Oliveira",
    years: 27,
    nationality: "Brasileira",
    state: "São Paulo",
    city: "Nhandeara",
    educatiton: "ioasysCamp",
  };

  const validRegister = Object.keys(registerModel).every(
    (key) => registerModel[key] === register[key]
  );

  const registerStatus = validRegister ? "Cadastrado!" : "Não cadastrado!";

  console.log(registerStatus);
};

validateRegister(register);
