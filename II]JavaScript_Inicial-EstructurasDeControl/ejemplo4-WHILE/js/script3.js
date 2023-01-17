/* Otros metodos de poder rastrear/acceder/apuntar
 dentro del doctype valores o elementos: 
 (Los metodos utilizados hasta ahora, id.value getElementByid('').value)
    ->apuntando al atributo name
    nameElementoAnterior.nameElmentoPosterior

 */
function incremento() {

    var num = document.repetir.numero.value;
/*
Otra forma de trasladar el parseo de string a valor, es directamente
asociandolo a la:  Number(string) === parseInt(Valor absoluto)
*/
var num = Number(num);

var texto =document.getElementById('resultado');//elemento volcado

var producto =0; //Variable residual

if (num < 1 || num > 10 || isNaN(num)== true) {
    texto.innerHTML='Admite como maximo 10 unidades, escriba de nuevo y pulse el botón'
    
} else {// 1 Opcion: planteado hasta ahora de manera directa operacional, v
    var precio=10.95;
    var total=precio*num;
   /*  texto.innerHTML='el importe a abonar sería: ' + total.toFixed(2)+"€" */
    while (producto <num) {//2 Opcion: Producto de los elementos basado en un recorrido, generado por el incremento
        producto++;
        var total=precio*producto
        texto.innerHTML=' <strong> el importe a abonar sería: ' + total.toFixed(2)+"€"
        
    }
}

    
}