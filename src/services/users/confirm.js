import db from '../../database/models/index';

const confirm = async (id, status) => {
  status = status || 1;
  return await db.authUsers.update({
    status
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
  confirm
}