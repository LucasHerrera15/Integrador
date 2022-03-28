function zapatillaData (sequelize, DataTypes){
    
    alias = 'zapatilla';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        modelo: {type: DataTypes.STRING(50)},
        talle: {type: DataTypes.STRING(50)},
        precio: {type: DataTypes.STRING(50)},
        descuento: {type: DataTypes.STRING(50)},
        fechaCreacion: {type: DataTypes.DATE},
        descripcion: {type: DataTypes.STRING (100)},
        stock: {type: DataTypes.BOOLEAN},
        imagen: {type: DataTypes.STRING(50)},
        marcaFK: {type: DataTypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false};

    const zapatillas = sequelize.define(alias,cols,config);

    zapatillas.assiociate = function(models){
        zapatillas.belongsToMany(models.usuarios, {
            as: "usuarios",
            through: "venta",
            foreingKey: "zapatillaFK",
            otherKey: "u-vendedorFK",
            otherKey: "u-compradorFK",
            timestamps: false
        });
        zapatillas.belongsTo(models.marca, {
            as: "marca",
            foreingKey: "marcaFK",
            timestamps: false
        });
    }

    return zapatillas;
}

module.exports= zapatillaData;