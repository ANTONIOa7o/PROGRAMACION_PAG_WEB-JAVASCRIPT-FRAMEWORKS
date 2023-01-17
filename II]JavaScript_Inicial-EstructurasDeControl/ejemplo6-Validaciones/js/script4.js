/*
Podemos presentar las variables de una forma ordenada, estructurada y
combinada
 1 var n =[string,number,boolean,objects,]=null
 este mismo planteamiento a la posibilidad que:
 ---Persistencia de Java----
 2 var n =[mySql, conectar con BBDD]
*/

var telefonos = [
    "+34-2-654233455",
    "+34-2-656633455",
    '+34-2-65423345',
    '+34-2-654233455',
    '+34-2 65423355',
    '+34-2-654238855',
    '+56-2-62010105645',
    '+34 2-654233455',
    '+34-2-654233455',
    '+66-2-654233455'
];
//Creamos el pattern o expresion regular
var expresion = /^\+34(\-2\-)\d{9}$/;

//Recorrido de los elementos

for (const tlfn of telefonos) {
    var fila = '<tr>';
    fila += '<td>'+ tlfn+ '</td>';
    fila += '<td>'+ expresion.test(tlfn)+ '</td>';
    /*
    el método test() en la búsqueda de una ocurrencia entre una expresion
    regular y cadena especifica(string) , evaluará en true o false dependiendio
    de su relacion exacta a la comparacion (true)
    */
   fila +=  '</tr>';
   document.getElementById('tabla').innerHTML +=fila
    
}