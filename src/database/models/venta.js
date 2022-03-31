 function ventaData (sequelize, DataTypes){
    
    alias = 'venta';

    cols = {
        id: {type: DataTypes.INTEGER},
        u_compradorFK: {type: DataTypes.INTEGER},
        u_vendedorFK: {type: DataTypes.INTEGER},
        zapatillaFK: {type: DataTypes.INTEGER},
        precio: {type: DataTypes.INTEGER},
        cantidad: {type: DataTypes.STRING(255)},
        subTotal: {type: DataTypes.INTEGER},
        facturaFK: {type: DataTypes.INTEGER},
    }

    config = {camelCase: false, timestamps: false};

    const venta = sequelize.define(alias,cols,config);

    venta.assiociate = function(models){
        venta.belongsTo(models.factura, {
            as: "factura",
            foreingKey: "facturaFK",
            timestamps: false
        })
    }
    
    return venta;
}

module.exports = ventaData; 