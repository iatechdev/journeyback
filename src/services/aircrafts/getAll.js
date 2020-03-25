import db from '../../database/models/index';

const getAll = async () => {
  return await db.authUsers.findAll({
    attributes: ['id', 'name', 'last_name','email', 'id_dep', 'id_level','img']
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}