
import db from '../../database/models/index';


const resetPass = async (id, password) => {
  return await db.authUsers.update({
    password,
  }, {
    where: {
      id: id
    }
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  resetPass
}