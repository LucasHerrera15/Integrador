function marcaData (sequelize, DataTypes){
    
    alias = 'marca';

    cols = {
        id: {type: DataTypes.INTEGER},
        nombreMarca: {type: DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false};

    const marcas = sequelize.define(alias,cols,config);

    return marcas;
}