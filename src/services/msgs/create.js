import fs from 'fs';
import db from '../../database/models/index';


const create = async (msg, id_user, id_aircraft, files) => {
    let file = "";
    let dir = './public/files/';
    let newname = new Date().getTime();
    console.log(files[0]);
    if (files[0]) {
      file = newname + files[0].originalname;
    }

  return await db.busMsgs.create({
   msg, id_user, id_aircraft,file
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}