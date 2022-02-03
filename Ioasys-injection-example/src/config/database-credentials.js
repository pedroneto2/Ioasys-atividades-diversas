const dotenv = require("dotenv");
dotenv.config();

const config = {
  user: "postgres",
  host: "localhost",
  database: "injection_example",
  password: process.env.DB_PASSWORD,
  port: 5432,
};
module.exports = config;
