'use strict';
module.exports = (sequelize, DataTypes) => {
    const Provincia = sequelize.define('Provincia', {
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        },

        pais: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "El campo es requerido" },
            }
        }
    }, {tableName: 'Provincias'});




    return Provincia;
}