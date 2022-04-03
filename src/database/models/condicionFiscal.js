function condicionFiscalData (sequelize, DataTypes){
    
    alias = 'condicionFiscal';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        tipo: {type:DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false};

    const condicionFiscal = sequelize.define(alias,cols,config);

    condicionFiscal.assiociate = function(models){
        condicionFiscal.hasMany(models.usuario, {
            as: "usuarios",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }
    return condicionFiscal;
}

module.exports = condicionFiscalData;