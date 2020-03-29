import db from '../../database/models/index';

const getOne = async (id_user) => {
  return await db.busAircrafts.findOne({
    where: {
      id_user: id_user
    },
    attributes: ['id', 'name', 'reference', 'id_user', 'status', 'createdAt']
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}