'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        usuario_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: false
        },
        producto_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            unique: false
        }
    });

    Pedido.associate = (models) => {
        
        Pedido.belongsTo(models.Usuario, {foreignKey: 'usuario_id'});
        Pedido.belongsTo(models.Producto, {foreignKey: 'producto_id'});
    
    };

    return Pedido;
}