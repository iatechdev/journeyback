import db from '../../database/models/index';
//import jwt from 'jsonwebtoken';
//import { secret } from '../../config/config'

const login = async (username, password) => {
  if (username && password) {
    return await db.authUsers.findOne({
      where: {
        email: username,
        password: password
      }
    }).then(data => {
      if (data) {
        return {
          success: true,
          message: 'Authentication successful!'
        }
      } else {
        return {
          success: false,
          message: 'Incorrect username or password'
        }
      }
    }).catch(e => {
      console.log(e);
    });
  } else {
    return {
      success: false,
      message: 'Authentication failed! Please check the request'
    };
  }
}

module.exports = {
  login
}