const func1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("1");
    }, 2000);
  });

const func2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("2");
    }, 4000);
  });

const findByLogin = async ({ email, pass }) => {
  const user = func1();
  const compare = func2();
  const result = [await user, await compare];
  console.log(result);
};

findByLogin({ email: "teste", pass: "som" });
