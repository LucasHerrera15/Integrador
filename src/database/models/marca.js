function marcaData (sequelize, DataTypes){
    
    alias = 'Marca';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        nombreMarca: {type: DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Marca = sequelize.define(alias,cols,config);

    Marca.assiociate = function(models){
        Marca.hasMany(models.zapatilla, {
            as: "zapatillas",
            foreingKey: "marcaFK",
            timestamps: false
        })
    }


    return Marca;
}

module.exports = marcaData;