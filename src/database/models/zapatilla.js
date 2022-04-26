function zapatillaData (sequelize, DataTypes){
    
    alias = 'Zapatilla';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        modelo: {type: DataTypes.STRING(200)},
        talle: {type: DataTypes.STRING(50)},
        precio: {type: DataTypes.STRING(50)},
        descuento: {type: DataTypes.STRING(50), allowNull: true},
        fechaCreacion: {type: DataTypes.DATE},
        descripcion: {type: DataTypes.STRING (100)},
        stock: {type: DataTypes.BOOLEAN},
        imagen: {type: DataTypes.STRING(50)},
        marcaFK: {type: DataTypes.INTEGER},
        usuarioFK: {type: DataTypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Zapatilla = sequelize.define(alias,cols,config);

    Zapatilla.assiociate = function(models){
        Zapatilla.belongsToMany(models.Usuario, {
            as: "Usuario",
            through: "venta",
            foreingKey: "zapatillaFK",
            otherKey: "u-vendedorFK",
            otherKey: "u-compradorFK",
            timestamps: false
        });
        Zapatilla.belongsTo(models.marca, {
            as: "marca",
            foreingKey: "marcaFK",
            timestamps: false
        });
        Zapatilla.belongsTo(models.Usuario, {
            as: "Usuario",
            foreingKey: "usuarioFK",
            timestamps: false
        });
        Zapatilla.hasMany(models.Carrito,{
            as: "Carrito",
            foreingKey: "zapatillaFK",
            timestamps: false
        });
    }

    return Zapatilla;
}

module.exports= zapatillaData;