
async function editarProducto(req, res) {
    const db = require('../models');
    
    try{
        const producto = await db.Producto.findOne(req.param.id)

        await producto.update(req.body)
        res.json({
            message: 'producto modificado', producto
        })


    }catch(error) {
        console.error(error)
        res.status(500).json({ message: 'error al modificar producto'})
    }
    
}

module.exports = editarProducto;