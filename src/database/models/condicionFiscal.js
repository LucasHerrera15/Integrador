function condicionFiscalData (sequelize, DataTypes){
    
    alias = 'condicionFiscal';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        tipo: {type:DataTypes.STRING(50), null:true}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const condicionFiscal = sequelize.define(alias,cols,config);

    condicionFiscal.assiociate = function(models){
        condicionFiscal.hasMany(models.Usuario, {
            as: "Usuario",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }
    return condicionFiscal;
}

module.exports = condicionFiscalData;