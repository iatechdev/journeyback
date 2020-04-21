import db from '../../database/models/index';


const create = async (name, last_name, email, password, id_dep, id_level, img) => {
  return await db.authUsers.create({
    name, last_name, email, password, id_dep, id_level, img
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}