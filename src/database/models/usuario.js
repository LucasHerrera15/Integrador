function usuarioData (sequelize, DataTypes){
    
    alias = 'usuario';

    cols = {
        id: {type: DataTypes.INTEGER},
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

    return usuarios;
}