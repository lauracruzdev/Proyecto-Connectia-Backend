'use strict';
const fs = require('fs');
const {Producto} = require('../models')
const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    let mapped = db.map(productos => ({

      nombre: productos.nombre,
      popularidad: productos.popularidad,
      stock: productos.stock,
      precio: productos.precio,
      descripcion: productos.descripcion,
      categoria_id: productos.categoria_id,
      imagen: productos.imagen,
      createdAt: new Date(),
      updatedAt: new Date()

    })

    )
    return queryInterface.bulkInsert('Productos', mapped);
  },


  down: (queryInterface, Sequelize) => {
    console.log('undoing games import seeder');
    return Producto.destroy({where: {}})
  }
};
