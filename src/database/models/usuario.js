function usuarioData (sequelize, DataTypes){
    
    alias = 'usuario';

    cols = {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true},
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

    config = {camelCase: false, timestamps: false};

    const usuarios = sequelize.define(alias,cols,config);
    
    usuarios.assiociate = function(models){
        usuarios.belongsTo(models.zapatilla, {
            as: "zapatillas",
            through: "venta",
            foreingKey: "u_compradorFK",
            foreingKey: "u_vendedorFK",
            otherKey: "zapatillaFK",
            timestamps: false
        });
        usuarios.belongsTo(models.condicionFiscal, {
            as: "condicionFiscal",
            foreingKey: "condicionFiscalFK",
            timestamps: false
        })
    }


    return usuarios;
}

module.exports = usuarioData;