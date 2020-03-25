import db from '../../database/models/index';
///  cargamos los modelos de la base de datos 
//   los modelos en plural 


// los services son los que van a lelvar la logica y estan separador por 
// funcionalidad para tener un mejor orden 
// si quieres mostrar un campo  varios campos solo debes ajsutarlos aca y realizar la logica necesaria
// que el controlador muestra lo que le enviemos desde aca
const getAll = async () => {
  return await db.authUsers.findAll({
    attributes: ['id', 'name', 'last_name','email', 'id_dep', 'id_level','img']
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}