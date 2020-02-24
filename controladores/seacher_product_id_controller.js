const db = require('../models');

const seacher_product_id =(req, res) => {

    db.Producto.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))
        
}

module.exports = seacher_product_id;