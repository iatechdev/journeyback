import db from '../../database/models/index';

const create = async (name, reference, id_user, status) => {
  return await db.busAircrafts.create({
    name, reference, id_user, status
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}