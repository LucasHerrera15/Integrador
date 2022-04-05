function marcaData (sequelize, DataTypes){
    
    alias = 'marca';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        nombreMarca: {type: DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const marcas = sequelize.define(alias,cols,config);

    marcas.assiociate = function(models){
        marcas.hasMany(models.zapatilla, {
            as: "zapatillas",
            foreingKey: "marcaFK",
            timestamps: false
        })
    }


    return marcas;
}

module.exports = marcaData;