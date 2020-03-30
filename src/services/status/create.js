import db from '../../database/models/index';

const create = async (name) => {
  return await db.busStatus.create({
   name
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}