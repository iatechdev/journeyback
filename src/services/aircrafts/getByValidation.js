import db from '../../database/models/index';

const getByValidation = async (validation_code) => {
  return await db.authUsers.findOne({
    where: {
      validation_code
    }
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getByValidation
}