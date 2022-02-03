const func1 = (user) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(user === "teste");
    }, 1500);
  });

const func2 = (pass) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pass === "som");
    }, 500);
  });

const findByLogin = async ({ email, pass, desc }) => {
  let t0 = performance.now();
  const user = await func1(); //simula pegar arquivo no banco
  const compare = await func2(); //simula validar a senha
  let t1 = performance.now();
  const tempo = t1 - t0;
  console.log(desc);
  if (!user || !compare)
    return console.log("Credenciais Inválidas, tempo decorrido: " + tempo);
  return console.log("Tudo certo! Tempo decorrido: " + tempo);
};

findByLogin({ email: "teste", pass: "som", desc: " # SENHA E EMAIL VÁLIDOS " });

findByLogin({
  email: "teste",
  pass: "senhaErrada",
  desc: " # SENHA INVÁLIDO E EMAIL CORRETO ",
});

findByLogin({
  email: "emailErrado",
  pass: "senhaErrada",
  desc: " # SENHA E EMAIL INCORRETO ",
});
