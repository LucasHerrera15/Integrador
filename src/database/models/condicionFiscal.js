function condicionFiscalData (sequelize, DataTypes){
    
    alias = 'condicionFiscal';

    cols = {
<<<<<<< HEAD
        id: {type: DataTypes.INTEGER, primaryKey: true},
=======
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
>>>>>>> c7bc6fa2889851ba7d66e014baac687b1ee255d9
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