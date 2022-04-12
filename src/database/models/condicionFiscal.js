function condicionFiscalData (sequelize, DataTypes){
    
    alias = 'CondicionFiscal';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        tipo: {type:DataTypes.STRING(50), null:true}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const CondicionFiscal = sequelize.define(alias,cols,config);

    CondicionFiscal.assiociate = function(models){
        CondicionFiscal.hasMany(models.Usuario, {
            as: "Usuario",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }
    return CondicionFiscal;
}

module.exports = condicionFiscalData;