function zapatillasData (sequelize, DataTypes){
    
    alias = 'zapatilla';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        modelo: {type: DataTypes.STRING(50)},
        talle: {type: DataTypes.STRING(50)},
        precio: {type: DataTypes.STRING(50)},
        descuento: {type: DataTypes.STRING(50)},
        fechaCreacion: {type: DataTypes.DATE},
        descripcion: {type: DataTypes.STRING (100)},
        stock: {type: DataTypes.BOOLEAN},
        imagen: {type: DataTypes.STRING(50)},
        usuarioFK: {type: DataTypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false};

    const zapatillas = sequelize.define(alias,cols,config);

    return zapatillas;
}