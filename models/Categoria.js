'User strict';
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
              notNull: { msg: "El campo es requerido" },
            }
        }
    }, {tableName: 'Categorias'});
    return Categoria;
};