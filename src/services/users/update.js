import fs from 'fs';
import db from '../../database/models/index';;

const update = async (id, name, last_name, email, id_dep, id_level, files) => {
     let dir = './public/images/';
     let newname = new Date().getTime();
     let img = newname + files[0].originalname;
  return await db.authUsers.update({
    name, last_name, email, id_dep, id_level, img
  }, {
    where : {
      id: id
    },
    attributes: ['id', 'name', 'last_name', 'email', 'id_dep', 'id_level', 'img']
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
  update
}