

async function priceController (req, res) {
    const db = require ('../models');
    try{
        const pAscendente = await db.Producto.findAll({
            order: [
                ['precio', 'ASC']
            ]
        })
   
        if(pAscendente) {
            return res
            .status(200)
            .send(pAscendente)
        }
        else{
            return  res
            .status(400)
            .json( {message: 'Error'})
        }
    }catch (error){
        console.log(error);
        
    }
}

module.exports = priceController;