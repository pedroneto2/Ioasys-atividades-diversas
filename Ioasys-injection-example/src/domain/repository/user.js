const connection = require("../../infra/database/connection");

const getUserById = async (id) => {
  const results = await connection.query(
    `SELECT email FROM users WHERE id = ${id}`
  );

  return results.rows;
};

module.exports = {
  getUserById,
};
