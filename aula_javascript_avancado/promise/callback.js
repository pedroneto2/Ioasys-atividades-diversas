const text = (text = "teste") => {
  console.log(text);
};

const delay = (cb, milliseconds) => {
  setTimeout(cb, milliseconds);
};

delay(() => text("Hello World"), 2000);
delay(() => text("Nova menssagem"), 1000);
