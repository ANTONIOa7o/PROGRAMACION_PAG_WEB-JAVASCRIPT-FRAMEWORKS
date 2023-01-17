

function mensajeIn() {
    var miClave=document.getElementById('clave').value;
    //Otra forma de acceder al valor ⇓
    var eMail =email.value;

/*
 * Estructura de Control de las varioables email y clave
*/

if ((miClave.length  >= 8) && eMail) {
    /*
    Otra forma de asegurar campos rellenos
    miClave.lenght !=0 && eMail.lenght !=0
    */

       document.getElementById('resultado').innerHTML=
    "Bienvenido al usuario: " + eMail +'<br>'+
    "pulse para ingrear"+"(" + miClave + ")"
} else {
    swal('Son neceario Clave e e-mail');
}


 

    
}



/*  */