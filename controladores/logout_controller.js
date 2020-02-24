
const db = require('../models')
async function logoutController(req, res, next) {
    try {
        console.log('cuerpo: ',req.user.id)
         const user = await db.Usuario.findByPk(req.user.id);
         console.log("usuario", user)
         user.token = null;
         await user.save();
         res.json({message:'logout done'});
    } catch (error) {
        console.log('error', error)
        res.status(500).json({message: 'ups'})
    }
  }

  module.exports = logoutController;