const db = require('../models');

const provincias = (req, res) => {

    const nomProvincia = req.params.nombre;

    db.Provincia.findOne({
        attributes: ['id'],
        where: {
            nombre: `${nomProvincia}`
        }
    }).then(item => {
        return res.status(200).send(item)

    }).catch(error => console.log(error))
}

module.exports = provincias;