function facturaData (sequelize, DataTypes){
    
    alias = 'factura';

    cols = {
        id: {type: DataTypes.INTEGER},
        tipoFactura: {type: DataTypes.STRING(50)},
        formaDePago: {type: DataTypes.STRING(50)},
        usuarioFK: {type: DataTypes.INTEGER},
        zapatillaFK: {type: DataTypes.INTEGER},
        fechaCompra: {type: DataTypes.DATE}
    }

    config = {camelCase: false, timestamps: false};

    const facturas = sequelize.define(alias,cols,config);

    return facturas;
}