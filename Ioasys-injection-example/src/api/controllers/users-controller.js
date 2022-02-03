const User = require("../../domain/repository/user");

const getOne = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await User.getUserById(id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ error });
  }
};

module.exports = {
  getOne,
};
