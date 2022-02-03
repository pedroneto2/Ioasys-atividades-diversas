const { Client } = require("pg");
const config = require("../../config/database-credentials");

const client = new Client({ ...config, database: "postgres" });

const createDatabase = async () => {
  await client.connect();
  await client.query(`DROP DATABASE IF EXISTS ${config.database};`);
  await client.query(`CREATE DATABASE ${config.database};`);
  await client.end();
};

createDatabase();
