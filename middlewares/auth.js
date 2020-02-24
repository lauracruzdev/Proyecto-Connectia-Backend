const db = require('../models');

const {decodeJWT} = require('../servicios/autentificacion')

async function authorizationMiddleware(req, res, next) {
  try {
    const jwt = req.headers.authorization;
    const user = await db.Usuario.findOne({where: {token: jwt}});
    console.log('El usuario es', jwt)
    if(!user) throw new Error('no user found');

    req.user = await decodeJWT(jwt);
    req.token = jwt;
    next()


  } catch (error) {
      console.log(error);


        res.status(401).json({message: 'invalid jwt'})
  }
}

module.exports =authorizationMiddleware;