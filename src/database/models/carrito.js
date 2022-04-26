function carritoData (sequelize, DataTypes){
    
    alias = 'Carrito';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        usuarioFK: {type:DataTypes.INTEGER},
        zapatillaFK: {type:DataTypes.INTEGER},
        modelo: {type: DataTypes.STRING(200)},
        imagen: {type:DataTypes.STRING(100)},
        precio: {type: DataTypes.STRING(50)},
        talle: {type: DataTypes.STRING(50)}, 
        cantidad: {type:DataTypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Carrito = sequelize.define(alias,cols,config);

    Carrito.assiociate = function(models){
        Carrito.belongsTo(models.Zapatilla, {
            as: "Zapatilla",
            foreingKey: "zapatillaFK",
            timestamps: false
        })
    }

    return Carrito;
}

module.exports = carritoData;