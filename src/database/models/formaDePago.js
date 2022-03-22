function formaDePagoData (sequelize, DataTypes){
    
    alias = 'formaDePago';

    cols = {
        id: {type: DataTypes.INTEGER},
        tipoDePago: {type:DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false};

    const tipoPagos = sequelize.define(alias,cols,config);

    return tipoPagos;
}