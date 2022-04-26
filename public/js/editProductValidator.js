window.addEventListener('load', function (){
    let formulario = document.querySelector('form.editProduct');
    formulario.addEventListener('submit', function(e){
            let errores = [];

            let campoModelo = document.querySelector('input.modelo');
            if(campoModelo == ''){
                errores.push('Debes completar todos los campos')
            }
            let campoMarca = document.querySelector('input.marca');
            if(campoMarca == ''){
                errores.push('Debes completar todos los campos')
            }
            let campoTalle = document.querySelector('input.talle');
            if(campoTalle == ''){
                errores.push('Debes completar todos los campos')
            }
            let campoPrecio = document.querySelector('input.precio');
            if(campoPrecio == ''){
                errores.push('Debes completar todos los campos')
            }
            let campoDescuento = document.querySelector('input.descuento');
            if(campoDescuento == ''){
                errores.push('Debes completar todos los campos')
            }
            let campoDescripcion = document.querySelector('input.descripcion');
            if(campoDescripcion == ''){
                errores.push('Debes completar todos los campos')
            }


            if(errores.length > 0){
                e.preventDefault();
                
                let ulErrores = document.querySelector('div.errores ul');
                    for(let i = 0; i < errores.length; i++){
                        ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
                    }
                }
        }) 
        formulario.submit();
})
