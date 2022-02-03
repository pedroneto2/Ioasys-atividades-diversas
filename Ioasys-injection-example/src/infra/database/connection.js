const { Client, Pool } = require("pg");
const config = require("../../config/database-credentials");
const client = new Client(config);

const connection = new Pool(config);
module.exports = connection;
