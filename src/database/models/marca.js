function marcaData (sequelize, DataTypes){
    
    alias = 'marca';

    cols = {
<<<<<<< HEAD
        id: {type: DataTypes.INTEGER, primaryKey: true},
=======
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
>>>>>>> c7bc6fa2889851ba7d66e014baac687b1ee255d9
        nombreMarca: {type: DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false};

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