const db = require('./db');
const helper = require('../helper');
const config = require('../config');
//querys sql ficam nesse arquivo!
//
//

//buscar todos os registros limite listPerPage
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
  FROM programming_languages LIMIT ?,?`,
    [offset, config.listPerPage]
  );

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

//criar novo registro http://localhost:3000/programming-languages/
async function create(programmingLanguage) {
  const result = await db.query(
    `INSERT INTO programming_languages 
  (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
  VALUES 
  (?, ?, ?, ?, ?)`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
    ]
  );
  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programing language created successfuly';
  }
  return { message }; //obj estava passando como variavel
}
//update de um registro http://localhost:3000/programming-languages/:id
async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE programming_languages 
  SET name=?, released_year=?, githut_rank=?, 
  pypl_rank=?, tiobe_rank=? 
  WHERE id=?`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
      id,
    ]
  );
  let message = 'Error in updating programing language'; //esta caindo aki 30/04/2021

  if (result.affectedRouws) {
    message = 'Programming language update successfully';
  }
  return { message }; //obj estava passando como varivel apenas
}

//delete de um registro http://localhost:3000/programming-languages/:id
async function remove(id) {
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`,
    [id]
  );
  let message = 'Erro in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfuly';
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
