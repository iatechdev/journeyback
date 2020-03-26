import db from '../../database/models/index';

const update = async (id, name, last_name, email, password, id_dep, id_level, img) => { 
  return await db.authUsers.update({
    name, last_name, email, password, id_dep, id_level, img
  }, {
    where : {
      id: id
    }
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  update
}