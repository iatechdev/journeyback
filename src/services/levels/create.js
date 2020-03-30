import db from '../../database/models/index';

const create = async (name) => {
  return await db.authLevels.create({
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