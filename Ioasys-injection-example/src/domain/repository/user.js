const connection = require("../../infra/database/connection");

const getUserById = async (id) => {
  const results = await connection.query(
    // `SELECT email FROM users WHERE id = ${id}`  <<-- query vulenerável à injeciton

    `SELECT email FROM users WHERE id = $1`, [id] // query higienizada

    // POSSIVEIS VALORES PASSADOS PARA ID PARA FAZER INJECTION:

    /*
      
      # retorna todos os usuarios
      id = 1 or 1=1 

      # insere um novo usuario
      id = INSERT INTO users (email,password) VALUES ('jerry@example.com','1234')

  
      # retorna o usuario e senha do usuario com id = id
      id = SELECT email FROM users WHERE id = ${id} OR 1 = 1 UNION SELECT users.password from users

    */
  );

  return results.rows;


    
// outra maneira de fazer uma requisicao correta é utilizando ORMs, por exemplo:

/*
 Considere User vindo de uma ORM, como sequelize

 const results = await User.findOne({[attributes:'email'], where: { id: ${id} }});

 return results;
*/

};



module.exports = {
  getUserById,
};
