const delay = (milliseconds) =>
  new Promise((resolve, rejected) => {
    setTimeout(resolve, milliseconds);
  });

delay(2000).then(() => console.log("Log 1"));
console.log("Log 2");
