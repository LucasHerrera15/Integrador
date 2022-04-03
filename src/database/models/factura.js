function facturaData (sequelize, DataTypes){
    
    alias = 'factura';

    cols = {
<<<<<<< HEAD
        id: {type: DataTypes.INTEGER, primaryKey: true},
=======
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
>>>>>>> c7bc6fa2889851ba7d66e014baac687b1ee255d9
        total: {type:DataTypes.INTEGER},
        fechaCompra: {type:DataTypes.DATE}
    }

    config = {camelCase: false, timestamps: false};

    const factura = sequelize.define(alias,cols,config);

    factura.assiociate = function(models){
        factura.hasMany(models.venta, {
            as: "venta",
            foreingKey: "facturaFK",
            timestamps: false
        })
    }

    return factura;
}

module.exports = facturaData;