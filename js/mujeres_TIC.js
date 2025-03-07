// VALIDACION DEL FORMULARIO---------------------------------------------------
window.addEventListener('load', ()=>{
    document.querySelector('#botonEnvia').addEventListener('click', enviarFormulario);
});
// Función para enviar el formulario

function enviarFormulario(){
    let camposValidados = 0;

    if(validaNombre()) camposValidados++;
    if(validaApellido()) camposValidados++;
    if(validaMail()) camposValidados++;
    if(validaPolitica()) camposValidados++;

    if(camposValidados === 4){
        alert('Formulario enviado con éxito, gracias!')
        document.formulario1.submit(); 
    }
    
}
// Validacion del nombre
function validaNombre(){
    let nombreUsuario = document.querySelector('#nombre').value;
    let entrada = document.querySelector('#nombre');
    let spanError = document.querySelector('#nombreError');
    let expresion = /^\s+$/;

    if(nombreUsuario == null || nombreUsuario.length == 0 || expresion.test(nombreUsuario)){
        spanError.innerHTML = '* Introduzca un nombre, por favor';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    }
}

// Validacion del apellido
function validaApellido(){
    let apellidoUsuario = document.querySelector('#apellido').value;
    let entrada = document.querySelector('#apellido');
    let spanError = document.querySelector('#apellidoError');
    let expresion = /^\s+$/;

    if(apellidoUsuario == null || apellidoUsuario.length == 0 || expresion.test(apellidoUsuario)){
        spanError.innerHTML = '* Introduzca un apellido, por favor';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    }
}

// Validacion del mail
function validaMail(){
    let mailUsuario = document.querySelector('#correo').value;
    let entrada = document.querySelector('#correo');
    let spanError = document.querySelector('#correoError');
    
    let expresion = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

    if(!(expresion.test(mailUsuario))){
        spanError.innerHTML = '* Introduzca un mail, por favor';
        spanError.className = 'error';
        entrada.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        entrada.className = 'noborderror';
        return true;
    }
}

// Validacion del checkbox politica de privacidad

function validaPolitica(){
    let politicaPrivacidad = document.querySelector('#condiciones');
    let spanError = document.querySelector('#politicaError');

    if(!politicaPrivacidad.checked){
        spanError.innerHTML = '- Debe aceptar nuestra politica de privacidad';
        spanError.className = 'error';
        return false;

    }else{
        spanError.className = 'noError';

        return true;
    }
}


