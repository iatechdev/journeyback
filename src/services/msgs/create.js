import db from '../../database/models/index';

const create = async (msg, id_user, id_aircraft) => {
  return await db.busMsgs.create({
   msg, id_user, id_aircraft
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}