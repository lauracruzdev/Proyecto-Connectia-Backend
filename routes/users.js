const express = require('express');
const router = express.Router();
const authcontroller =require('../middlewares/auth')


const provincia = require('../controladores/provincias_controller')
const loginController = require('../controladores/login_controller')
const registerController = require('../controladores/register_controller')
const profileController = require('../controladores/profile_controller')
const logoutController = require('../controladores/logout_controller')

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/registro', registerController);

router.post('/login', loginController);
router.post('/logout', authcontroller,logoutController);

router.get('/perfil/:email', profileController)

router.get('/provincia/:nombre', provincia);

module.exports = router;

