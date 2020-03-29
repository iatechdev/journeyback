import db from '../../database/models/index';

const getAll = async () => {
  return await db.busMsgs.findAll({
    attributes: ['id', 'msg', 'id_user', 'id_aircraft', 'createdAt']
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}