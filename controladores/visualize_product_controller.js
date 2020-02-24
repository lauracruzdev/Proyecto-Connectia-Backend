
const db = require('../models')
async function visualizeProduct  (req, res) {
    try{
        const productos = await db.Producto.findAll()
        console.log(productos)
        res 
        .status(200)
        .send(productos)

    }catch(error){
        console.error('Algo fallo')
    }
}

module.exports = visualizeProduct;