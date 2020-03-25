import db from '../../database/models/index';

const getAll = async () => {
  return await db.authDeps.findAll({
    attributes: ['id', 'name',]
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}