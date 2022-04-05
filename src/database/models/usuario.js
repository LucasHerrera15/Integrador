function usuarioData (sequelize, DataTypes){
    
    alias = 'Usuario';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true, null:false},
        nombreCompleto: {type: DataTypes.STRING(50)},
        fechaNaciemento: {type: DataTypes.INTEGER},
        email: {type: DataTypes.STRING(50)},
        contrasenia: {type: DataTypes.STRING(50)},
        domicilio: {type: DataTypes.DATE},
        nombreUsuario: {type: DataTypes.STRING(50)},
        telefono: {type: DataTypes.STRING(50)},
        fotoPerfil: {type: DataTypes.STRING(50)},
        condicionFiscalFK: {type: DataTypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false, freezeTableName:true};

    const Usuario = sequelize.define(alias,cols,config);
    
    Usuario.assiociate = function(models){
        Usuario.belongsTo(models.zapatilla, {
            as: "zapatillas",
            through: "venta",
            foreingKey: "u_compradorFK",
            foreingKey: "u_vendedorFK",
            otherKey: "zapatillaFK",
            timestamps: false
        });
        Usuario.belongsTo(models.condicionFiscal, {
            as: "condicionFiscal",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }


    return Usuario;
}

module.exports = usuarioData;