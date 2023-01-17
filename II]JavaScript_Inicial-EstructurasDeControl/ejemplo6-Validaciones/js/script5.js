function acceso() {
    var clave = 'Helsinki';
  
    var intentos = false;
    var contador = 0;

    while (contador < 3 && intentos == false) {
        var claveAcceso = window.prompt('Introduce Clave administrador:');
        if (claveAcceso == clave) {
            intentos = true;
            document.getElementById('resultado').innerText = 'Acceso Permitido...'
        }
        contador++
    }
    if (!intentos) {
        document.getElementById('resultado').innerText = 'Lo sentimos, contacte con el departamento de Sistemas'

    }

}
/* Control + u accede a la visualizacion del doctype
el metodo .oncontextmenu(), podemos acceder al famoso menu contexto, del 
boton drch.,implicando con el retur false, de todas las funiciones asociadas
al mismo, false igualmente como desactivarlas
*/
document.oncontextmenu = function(){
    return false;
}