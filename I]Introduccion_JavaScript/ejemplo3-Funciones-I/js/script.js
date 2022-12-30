/*
                ===============
                 LAS FUNCIONES
                ==============

        Entendidas y definidas como declaraciones de expresiones
        funcionales
        Consta de la palabra reservada a su llamada fuction
        Sintaxis:
        1. Nombre de la funcion
        2.Lista de parametros de la misma(que la definen),entre parentesis
        y separados por ,
        3.Las declaraciones en general, tanto en js, como en otros entornos
        estará acotada por {

        }
        
*/
/*
                <<<<<<<<<<<<<<<<ENTORNO DE LAS VARIABLES>>>>>>>>>>>>>>>>>>>>>>>>>

        => Variables Globales:
        Variables se puede acceder a su contendido o valor desde cualquier punto de la pagina donde
        resida el js
        -> Ha de ser declarada fuera de cualquier otro procedimiento o funcion definida
        ->Siempre permanecerá en memoria mientras cargada la pagina o el motor de ejecucion
        ->Recomendacion:⚠ Solo para uso exclusivo de variable para entornos que compartan
        ->Sintaxis:
            var total =0;            [variable global]
            function diego(a,b){
                total = a+b             [Declaracion acotada dentro de la funcion]
            }
            diego(7,4);

*/
// variables globales  ⇓
var nombre= window.prompt("Introduce tu nombre");
/* var apellidos=window.prompt("introduce apellidos"); */

function saludar() {

    swal('Hola ' + nombre+ apellidos);
}
/*
        =>Las variable Locales:
        Definidas dentro del entorno de la propia funcion,
        la variable cargará al ejecutarse la funcion, un ahorro considerable de memoria
        y termina al finalizar la funcion, desaloja del motor de memoria 

*/
function despedir() {
    //Variable Local   ⇓
    var apellidos=window.prompt("introduce apellidos"); 
   /*  var apellidos ='Cuadrdo'; */
    swal('Adios alma de cantaro..' + nombre + ' ' + apellidos);
}
// La variable apellidos podria utilizarse en la funcion saludar?
//NO