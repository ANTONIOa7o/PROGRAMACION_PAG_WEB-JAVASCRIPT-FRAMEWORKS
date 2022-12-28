

//1º Creo mi variable
var dato =window.prompt("Escribe un numero decimal");
console.log(dato);
/*
Metodo de conversion
a. parseFloat(): Método para convertir, una cadena/string devolviendo
un numero FLOTANTE(un decimal);
Referencia de exception
Nan(no es un numero) cuando no puede convertir el primer caracter en numero
*/
var conversion= parseFloat(dato);
console.log(conversion);
/*
b. parseInt(): Método comprueba el primer argumeto, devuelve el primer
numero entero de la base especifica
*/
var conversion2=parseInt(dato);
console.log(conversion2);
/**
 * Asumiendo las propiedad de los numeros, podremos trabajar
 * la algoritmia de los mismo +,/,-,*
*/
console.log("Suma de variables: " + (conversion + conversion2));
console.log("Division de variables: " + (conversion / conversion2));
console.log("Producto de variables: " + (conversion * conversion2));
console.log("Resta de variables: " + (conversion - conversion2));

/**
 * RESUMEN
 */
var entero = parseInt(dato);
var numero=6;
var boolean=true;

console.log("Dato: "+ dato + " de tipo:" + typeof(dato) );
console.log("Conversion: "+ conversion + " de tipo:" + typeof(conversion) );
console.log("Conversion2: "+conversion2 + " de tipo:" + typeof(conversion2) );
console.log("Entero: "+ entero + " de tipo:" + typeof(entero) );
console.log("Numero: "+ numero + " de tipo:" + typeof(numero) );