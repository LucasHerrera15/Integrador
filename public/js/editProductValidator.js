window.addEventListener('load', function (){
    let formulario = document.querySelector('form.editProduct');
    formulario.addEventListener('submit', function(e){
        
        let errores = [];
        
        let campoEmail = document.querySelector('input.email');
        let expReg = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
        let emailValido = expReg.test (email.value);
        if(campoEmail.value ==''){
           alert('Debes escribir un E-mail');
        } else if ( emailValido == false){
            errores.push('Debes ingresar un correo válido')
        }
        
        let campoPassword = document.querySelector('input.password');
        if(campoPassword == ''){
            errores.push('Debes escribir una contraseña')
        }

        if(errores.length > 0){
            e.preventDefault();
            
            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++){
                ulErrores.innerHTML +=  '<li>' + errores[i] + '</li>' 
            }
        }
        formulario.submit();
    })
    
})
