const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const conSecreta = process.env.JWT_SECRET || 'ADLSNVLSNDLKNVSDFT';

async function contrasenyaConHash(contrasenya){
    return await bcrypt.hash(contrasenya, 10)
}

async function compararContrasenya(contrasenya, hash){
    return await bcrypt.compare(contrasenya, hash)
}

async function crearJWT(data){
    return jwt.sign(data, conSecreta);
}

async function decodeJWT(token){
    return jwt.verify(token, conSecreta)
}

function validarContrasenya (contrasenya) {

    const enoughCharacters = contrasenya.length >= 8;
    const containsUpperCase = (/[A-Z]/).test(contrasenya);
    const containLowerCase = /[a-z]/.test(contrasenya);
    const containNumbers = /[0-9]/.test(contrasenya);

    if (enoughCharacters && containLowerCase && containNumbers && containsUpperCase) {
        return true;
    } else {
        throw new Error('invalidPasswordError');
    }

}

 
module.exports = {
    contrasenyaConHash,
    compararContrasenya,
    crearJWT,
    decodeJWT,
    validarContrasenya
}