
const formulario = document.getElementById("formulario-registro")
const name = document.getElementById("nombre");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telefono = document.getElementById("telefono");
const usuario = document.getElementById("usuario");
const password2 = document.getElementById("password2");
const resultado = document.querySelector("resultado")
const btn = document.getElementById("boton-registro");

btn.addEventListener("click",(e)=>{

    e.preventDefault();
    let error = validarCampos();
    if(error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else{
        resultado.innerHTML = "Registrado correctamente";
        resultado.classList.add("green")
        resultado.classList.remove("red")
    }

    
    formulario.submit();
})


const validarCampos = ()=>{
    let error = [];
    if (name.value.length < 5 || name.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre no es valido";
        return error;
    } else if (email.value.length < 5 ||
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1 ) {
        error[0] = true;
        error[1] = "El e-mail no es valido";
        return error;
    } else if (edad.value < 18 || edad.value > 100){
        error[0] = true;
        error[1] = "La edad debe ser mayor a 18 años y menor a 100";
        return error
    } else if(password.value.length < 8){
        error[0] = true;
        error[1] = "La contraseña es invalida";
        return error;
    } else if(password2.value =! password.value){
        error[0] = true;
        error[1] = "Las contraseñas deben ser iguales";
        return error;
    } else if(usuario.value.length < 3 || usuario.value.length > 30){
        error[0] = true;
        error[1] = "El nombre de usuario es invalido";
        return error;
    } else if(telefono.value.length < 8 || telefono.value.length > 14){
        error[0] = true;
        error[1] = "El numero telefonico es invalido";
        return error;
    }
    error[0] = false;
    return
} 



  