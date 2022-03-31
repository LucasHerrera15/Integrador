function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}




let btn = document.getElementById("boton-registro");

btn.addEventListener("click",function(e){

    e.preventDefault();
    
    let formulario = document.getElementById("formulario-registro")
    let name = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if ((name.value.length <2)|| (name.value.length >30)){
        alert("El nombre es incorrecto");
        return;
    }

    if ((edad.value < 18) || (edad.value > 110)){
        alert("La edad es incorrecta");
        return;
    }

    if (isNaN(edad.value)){
        alert("El dato es incorrecto");
        return
    }
    
    if(validar_email(email.value) )
    {
        alert("El email es correcto");
    }
    else
    {
        alert("El email es incorrecto");
        return;
    }

    if (password.value <8){
        alert("La contraseña es demasiado corta");
        return
    }
    
    formulario.onsubmit();

})