import db from '../../database/models/index';

const getAll = async () => {
  return await db.busAircrafts.findAll({
    attributes: ['id', 'name', 'reference', 'id_user', 'status', 'img', 'createdAt', 'updatedAt']
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}