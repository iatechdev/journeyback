import db from '../../database/models/index';
//import jwt from 'jsonwebtoken';
//import { secret } from '../../config/config'

const login = async (username, password) => {
  if (username && password) {
    return await db.authUsers.findOne({
      where: {
        email: username,
        password: password
      },
      attributes: ['id', 'name', 'last_name', 'email', 'id_dep', 'id_level', 'img']
    }).then(data => {
      if (data) {
        return {
          success: true,
          data: data,
          message: 'Authentication successful !'
          
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