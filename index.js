const express = require("express");

const app = express();

const add = (num1, num2) => {
    return num1 + num2
}

const sub = (num1, num2) => {
  return num1 - num2;
};

app.get("/add", (req, res) => {
    const sum = add(5, 3);
    res.send(sum);
});

app.get("/sub", (req, res) => {
  const sub = sub(5, 3);
  res.send(sub);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
