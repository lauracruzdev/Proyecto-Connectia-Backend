const db = require('../models');

async function addProducto(req, res) {
    try {
        const producto = await db.Producto.create(req.body)
        res.status(200).json({
            message: 'register done',
            producto: producto,
        });

    } catch (error) {
        console.error(error).res.status(500).json({ message: 'error al añadir producto' })
    }
}
module.exports = addProducto;