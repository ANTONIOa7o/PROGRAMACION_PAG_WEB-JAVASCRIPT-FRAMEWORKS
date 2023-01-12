

var input = document.getElementById('inputNumero');
/* var input = inputNumero.value; */
/*
El valor de la variable. aunque sea llamada desde un ambito global, la variable numero esta supeditada a la
operacion asignada a la variable tabla
var numero = parseInt(document.getElementByid('inputNumero')) ------> #Error
*/
function multiplicacion() {
    var numero = parseInt(input.value)
    var tabla = "";
    for (i = 1; i <= 10; i++) {

        tabla += numero + 'x' + i + '=' + numero * i + '<br>';
        /*
        Conclusiones:
        ->Operador de Asignación +=, a la variable le iremos añadiendo valores, y retornado los siguiente
        de forma acumala, sumativa o declativa
        ->Al ambito del recorrido,no confundir la declaracion de una variable,frente a la de recorrido de la 
        variable (valores)
        */
        document.getElementById('resultado').innerHTML = (tabla);
    
    }
    
    console.log(tabla)
} 
