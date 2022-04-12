function usuarioData (sequelize, DataTypes){
    
    alias = 'Usuario';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
        nombreCompleto: {type: DataTypes.STRING(50)},
        fechaNacimiento: {type: DataTypes.STRING(50)},
        email: {type: DataTypes.STRING(50)},
        contrasenia: {type: DataTypes.STRING(50)},
        domicilio: {type: DataTypes.STRING(50)},
        nombreUsuario: {type: DataTypes.STRING(50)},
        telefono: {type: DataTypes.STRING(50)},
        fotoPerfil: {type: DataTypes.STRING(50)},
        condicionFiscalFK: {type: DataTypes.STRING(50)}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Usuario = sequelize.define(alias,cols,config);
    
    Usuario.assiociate = function(models){
        Usuario.belongsTo(models.zapatilla, {
            as: "zapatillas",
            through: "venta",
            foreingKey: "u_compradorFK",
            otherKey: "u_vendedorFK",
            otherKey: "zapatillaFK",
            timestamps: false
        });
        Usuario.belongsTo(models.condicionFiscal, {
            as: "CondicionFiscal",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }


    return Usuario;
}

module.exports = usuarioData;