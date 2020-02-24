const db = require('../models');

async function pedidos (req, res){
  try{
      const pedidos = req.body;
      console.log(pedidos)
      const pago = await db.Pedido.bulkCreate(pedidos).then((result) => {
          
      res.status(200).json({menssage: result});
      }).catch(err => console.error(
          err
      ))
    
      

  }catch(err){
      console.log(err);
      
  }

      
}
module.exports = pedidos;