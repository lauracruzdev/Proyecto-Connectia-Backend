const db = require('../models');
const topProvinciasController = (req, res) => {

  db.Pedido.findAll({

    attributes: ['usuario_id', 'producto_id', [db.sequelize.fn('SUM', db.sequelize.col('cantidad')), 'top_provincias']],
    group: ['usuario_id','producto_id'],
    include: [{
      model: db.Usuario,
        include:[{
            model:db.Provincia
        }]      
    },
    {
        model: db.Producto
    }
],
    

  }).then(items => res.status(200).json(items)).catch(error => console.error(error))

}

module.exports = topProvinciasController;