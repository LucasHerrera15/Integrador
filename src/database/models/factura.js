function facturaData (sequelize, DataTypes){
    
    alias = 'Factura';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        total: {type:DataTypes.INTEGER},
        fechaCompra: {type:DataTypes.DATE}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Factura = sequelize.define(alias,cols,config);

    Factura.assiociate = function(models){
        Factura.hasMany(models.venta, {
            as: "venta",
            foreingKey: "facturaFK",
            timestamps: false
        })
    }

    return Factura;
}

module.exports = facturaData;