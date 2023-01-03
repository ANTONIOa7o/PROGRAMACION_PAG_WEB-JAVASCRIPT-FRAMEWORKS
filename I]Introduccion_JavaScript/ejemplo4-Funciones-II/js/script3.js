

function mensajeIn() {
    var miClave=document.getElementById('clave').value;
    //Otra forma de acceder al valor ⇓
    var eMail =email.value;

    document.getElementById('resultado').innerHTML=
    "Bienvenido al usuario: " + eMail +'<br>'+
    "pulse para ingrear"+"(" + miClave + ")"

    
}

function mensajeOut() {
    document.getElementById('resultado').innerHTML="";
}

function ordenSecundaria() {
  //  location.href="ejercicio2-value.html";ahcia una pagina de mi proyecto
  // location.href="http://www.google.com" hacia pagina externa
  window.print();//imprimir -> guardar pdf
}