function facturaData (sequelize, DataTypes){
    
    alias = 'factura';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        total: {type:DataTypes.INTEGER},
        fechaCompra: {type:DataTypes.DATE}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

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