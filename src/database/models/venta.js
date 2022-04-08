 function ventaData (sequelize, DataTypes){
    
    alias = 'Venta';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        u_compradorFK: {type: DataTypes.INTEGER},
        u_vendedorFK: {type: DataTypes.INTEGER},
        zapatillaFK: {type: DataTypes.INTEGER},
        precio: {type: DataTypes.INTEGER},
        cantidad: {type: DataTypes.STRING(255)},
        subTotal: {type: DataTypes.INTEGER},
        facturaFK: {type: DataTypes.INTEGER},
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Venta = sequelize.define(alias,cols,config);

    Venta.assiociate = function(models){
        Venta.belongsTo(models.factura, {
            as: "factura",
            foreingKey: "facturaFK",
            timestamps: false
        })
    }
    
    return Venta;
}

module.exports = ventaData; 