async function seacher_product_title_controller (req, res){
    const db = require('../models');
    const Op = require('sequelize').Op;
    
    const productoBuscado = req.params.nombre
    
    try{
        const productos = await db.Producto.findAll({
            where: {
                nombre:{
                    [Op.like]: `${productoBuscado}%`
                }
            }
        })
        if(productos){
         return   res
            .status(200)
            .send(productos)
        }else {
            return res.status(400).json( {message: `No se ha encontrado producto`})
        }
    }catch (error) {
        console.log(error);
        
    }
} 

module.exports=seacher_product_title_controller;