const db = require('../models');
const salesController = (req, res) => {

  db.Pedido.findAll({

    attributes: ['producto_id', [db.sequelize.fn('SUM', db.sequelize.col('cantidad')), 'top_ventas']],
    group: ['producto_id'],
    include: [{
      model: db.Producto
    }]

  }).then(items => res.status(200).json(items)).catch(error => console.error(error))

}

module.exports = salesController;