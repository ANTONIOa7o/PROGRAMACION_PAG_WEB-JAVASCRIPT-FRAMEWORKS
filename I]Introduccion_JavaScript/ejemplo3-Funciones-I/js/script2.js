
var n1 =parseInt(window.prompt("Introduce el primer nº"));
var n2=parseInt(window.prompt('Introduce el segundo nº'));

function sumar(n1,n2) {
    //Variables Globales
swal('Suma: ' + (n1+n2));    
}

function restar(n1,n2) {
    //Variable residual, en entornos locales
    var resultado = n1-n2;
    swal('Resta: ' + resultado);
}

function multiplicar(n1,n2) {
    var resultado2 =n1*n2;
    swal('Multiplicacion: '+ resultado2)
}

function dividir(n1,n2) {
    var resultado = n1/n2;
    swal('Dividir: '+ resultado);
}
