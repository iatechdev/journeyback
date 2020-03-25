
// import { userEmitter } from '../../subscribers/user.listener'
//import MailerService from '../mailer/mailer';
import db from '../../database/models/index';


const resetPassword = async (id,  password) => {
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
  resetPassword
}