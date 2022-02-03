const express = require("express");
const bodyParser = require("body-parser");
const user = require("./api/controllers/users-controller");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ info: "Testing SQL Injection Node-Js" });
});
app.get("/users/:id", user.getOne);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
