const { Client } = require("pg");
const config = require("../../config/database-credentials");

const client = new Client(config);
const createTables = async () => {
  await client.connect();
  await client.query(`CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email VARCHAR(30),
    password VARCHAR(30)
  );`);

  await client.end();
};

createTables();
