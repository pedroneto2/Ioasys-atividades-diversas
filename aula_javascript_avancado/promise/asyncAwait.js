const delay = (milliseconds) =>
  new Promise((resolve, rejected) => {
    console.log("log 1");
    setTimeout(() => {
      console.log("log 3");
      resolve("finish");
    }, milliseconds);
  });
const main = async () => {
  const response = await delay(2000);
  delay(3000).then((response) => console.log(response));
};

main();
