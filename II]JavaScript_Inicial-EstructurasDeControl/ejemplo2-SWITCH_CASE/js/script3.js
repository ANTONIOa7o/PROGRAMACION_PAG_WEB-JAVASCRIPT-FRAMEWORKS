
function ejecutar() {
    var eleccionUsuario = document.getElementById('opcion').value;//Recogida delos Datos-variable eje
    var respuesta = document.getElementById('resultado');//Soltando datos desde una variable


//Estructura de Control de la variable
    switch(eleccionUsuario){

        case '1':
            respuesta.innerText ="FORMATEANDO EL DISCO,"+ '\n' + "por favor...espere";
        break;
        case '2':
            respuesta.innerText ="RECOPILANDO DATOS PARA ELIMINACIOND EL DISCO, por favor...espere";
        break;
        case '3':
            respuesta.innerText ="LOCALIZANDO UBICACION DE POSICION, por favor...espere";
        break;
        case '4':
            respuesta.innerText ="NAVEGADOR SIENDO MONOTORIZADO..."+ navigator.userAgent;
            
        break;
        case '5':
            respuesta.innerText ="FORMATEANDO EL DISCO, por favor...espere";
        break;
        default: 
        respuesta.innerText ='ES NECESARIO ELEGIR UNA DE LAS OPCIONES'
    }


}