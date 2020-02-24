const db = require('../models');

const categoryProduct = (req, res) => {
console.log("pepe", req.params.id)

const idCategoria = req.params.id
    db.Producto.findAll({
        include: [{
            model: db.Categoria,
            where: {
                id: idCategoria
            }
        }]
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))
}

module.exports = categoryProduct;