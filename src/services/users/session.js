import db from '../../database/models/index';

const sessionUser = async (id) => {
  let user = await db.authUsers.findOne({
    where: {
      id: id
    },
    include: [{
      model: db.authUserInformations,
      as: 'auth_user_informations',
      attributes: ['name', 'country_id']
    }, {
      model: db.authUserTypes,
      as: 'auth_user_types',
      attributes: ['id', 'name']

    }],
    attributes: []
  }).then(data => { return data }).catch(e => {
    console.log(e);
  });

  let customData = await db.authUsers.findOne(
    {
      include: [{
        model: db.cusCustom,
        as: 'cusCustom',
        required: false,
        attributes: ['id', 'name', 'subtotal', 'total', 'discount', 'answers', 'status'],
        through: {
          model: db.cusAccessCustom,
          as: 'cusAccessCustom'
        },
        include: [{
          model: db.cusCustomProducts,
          as: 'customProducts',
          attributes: ['id', 'custom_id', 'product_id', 'quantity']
        },
        {
          model: db.cusCustomDesigns,
          as: 'desings',
          attributes: ['colors', 'links'],
          required: false
        },
        {
          model: db.cusCustomFiles,
          as: 'files',
          attributes: ['id', 'file', 'location'],
          required: false
        },
        {
          model: db.cusCustomLogos,
          as: 'logos',
          attributes: ['id', 'positions', 'product_mold_id'],
          required: false
        }
        ],
        where: {
          status: 1
        }
      }],
      where: {
        id
      },
      attributes: ['id']

    }).then(data => {
      return data.get({ plain: true });
    }).catch(e => {
      console.log(e);
    });

  for (var customItem of customData.cusCustom) {
    if(customItem.customProducts.length == 0)
    customItem.customProducts = null;
    if(customItem.desings.length == 0)
      customItem.desings = null;
    if(customItem.files.length == 0)
      customItem.files = null;
    if(customItem.logos.length == 0)
      customItem.logos = null;
    else{
      for (var logosItem of customItem.logos) {
        logosItem.positions = JSON.parse(logosItem.positions);
      }
    }
    
  }
  let userInformation = user.auth_user_informations;
  let dataReturn = {
    user,
    custom: customData.cusCustom,
    currency: (userInformation[0].country_id == 48) ? 'COP' : 'USD'
  }
  return dataReturn;
}

module.exports = {
  sessionUser
}