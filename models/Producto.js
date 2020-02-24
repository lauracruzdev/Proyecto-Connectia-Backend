'use strict';
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        popularidad: {
            type: DataTypes.INTEGER(3),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },
        stock: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        precio: {
            type: DataTypes.FLOAT(6, 2),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        descripcion: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        categoria_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(1000),
            allowNull:false
        }

    }, {
        
    });
    Producto.associate = models => {
        Producto.belongsTo(models.Categoria, {foreignKey: 'categoria_id'});
        Producto.hasMany(models.Pedido, {foreignKey: 'producto_id'});
    };
   

    return Producto;
};