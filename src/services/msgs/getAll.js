import db from '../../database/models/index';

const getAll = async () => {
  return await db.busMsgs.findAll({
    attributes: ['id_aircraft',[db.sequelize.fn('count', db.sequelize.col('id_aircraft')), 'count_aircraft']],
    group: ['id_aircraft']
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getAll
}