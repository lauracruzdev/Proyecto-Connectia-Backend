const db = require('../models');
const  profile = (req, res) => {

  
    const email = req.params.email
    db.Usuario.findOne({
        where: {
            email: `${email}`
        },
        include: [{
            model: db.Pedido,
            include:[{
                model:db.Producto
            }] 
              }] 
    }).then(user => { return res.status(200).send(user)})
    .catch(err => console.error(err) )

}


module.exports =  profile;
