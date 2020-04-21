import db from '../../database/models/index';

const getOne = async (id) => {
  return await db.authUsers.findOne({
    where: {
      id : id
    },
    include: [{
      model: db.authDeps,
      as: 'authDeps',
      attributes: ['id', 'name' ]
    }],
    attributes: ['id', 'name', 'last_name', 'email', 'id_level', 'img', 'createdAt', 'updatedAt']
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}