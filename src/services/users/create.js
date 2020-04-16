import fs from 'fs';
import db from '../../database/models/index';
  //let dirCustom = './public/images/';


const create = async (name, last_name, email, password, id_dep, id_level, files) => {
   let dir = './public/images/';
  let newname = new Date().getTime();
  let img = newname + files[0].originalname;
 //console.log(files);
  return await db.authUsers.create({
    name, last_name, email, password, id_dep, id_level, img
  }).then(data => {

      fs.createReadStream('./uploads/' + files[0].filename).pipe(fs.createWriteStream(dir + img));
      //borramos el archivo temporal creado
      fs.unlink('./uploads/' + files[0].filename, function (err) {
        if (err) {
          return console.log("Delete error: " + err);
        }
      });


    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}