import db from '../../database/models/index';

const update = async (id, name, reference, id_user, status, img) => {
  return await db.busAircrafts.update({
    name, reference, id_user, status, img
  }, {
    where : {
      id: id
    },
    attributes: ['id', 'name', 'reference', 'id_user', 'status', 'img' ]
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  update
}