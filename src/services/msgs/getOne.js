import db from '../../database/models/index';

const getOne = async (id_aircraft) => {
  return await db.busMsgs.findAll({
    where: {
      id_aircraft: id_aircraft
    },
    order: [
      ['createdAt', 'DESC']
    ],
    include: [{
      model: db.authUsers,
      as: 'authUsers',
      attributes: ['name', 'last_name', 'email', 'img'],
       include: [{
          model: db.authDeps,
          as: 'authDeps',
          attributes: ['id','name']
      }]
    }],
    attributes: ['id', 'msg', 'id_user', 'id_aircraft','file', 'createdAt']
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getOne
}