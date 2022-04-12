function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

const db = require('../database/models');


let btn = document.getElementById("boton-registro");

btn.addEventListener("click",function(e){


    e.preventDefault();

    
    let formulario = document.getElementById("formulario-registro")
    let name = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let email = document.getElementById("email");
    let condicionFiscal = document.getElementById("condicionFiscal");
    let password = document.getElementById("password");
    let telefono = document.getElementById("telefono");
    let usuario = document.getElementById("usuario");
    let password2 = document.getElementById("password2");

    if ((name.value.length < 2) || (name.value.length > 30)){
        alert("El nombre es incorrecto");
            return;
    }

    if ((edad.value < 18) || (edad.value > 100)){
        alert("La edad es incorrecta");
        return;
    }

    if (isNaN(edad.value)){
        alert("El dato es incorrecto");
            return
    }

    db.usuario.findAll({
        where:{
            email
        } 
    })
    .then((emails)=>{
        console.log(emails)



    })



    if(validar_email(email.value) )
    {
        
    }
    else
    {
        alert("El email es incorrecto");
            return;
    }

    if(password.value.length < 8){
        alert("La contraseña es incorrecta")
        return;
    }

    if(password2.value != password.value){
        alert("Las contraseñas deben ser iguales")
        return;
    }
    if((telefono.value.length < 8) && (telefono.value.length > 11)){
        alert("El telefono es incorrecto")
        return;
    }

    if(usuario.value.length > 15){
        alert("El usuario es incorrecto")
        return
    }
    
    formulario.submit();

})