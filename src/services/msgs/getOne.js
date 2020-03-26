import db from '../../database/models/index';

const getOne = async (id_aircraft) => {
  return await db.busMsgs.findOne({
    where: {
      id_aircraft: id_aircraft
    },
    attributes: ['id', 'msg', 'id_user', 'id_aircraft']
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}