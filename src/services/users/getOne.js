import db from '../../database/models/index';

const getOne = async (id) => {
  return await db.authUsers.findOne({
    where: {
      id : id
    },
    attributes: ['id', 'name', 'last_name', 'email', 'id_dep', 'id_level', 'img']
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}