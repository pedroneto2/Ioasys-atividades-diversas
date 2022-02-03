const { Client } = require("pg");
const config = require("../../config/database-credentials");

const client = new Client(config);
const createSeed = async () => {
  await client.connect();
  await client.query(`INSERT INTO users (email,password)
  VALUES ('jerry@example.com','1234'), ('george@example.com','1234'), ('michael@example.com','1234');`);

  await client.end();
};

createSeed();
