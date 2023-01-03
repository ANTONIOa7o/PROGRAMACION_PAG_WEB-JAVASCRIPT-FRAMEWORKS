/*
El metodo getElementById() ⇔ NOS DEVUELVE EL ELEMENTO QUE CONTIENTE AHÍ EL ATRIBUTO (id="") CON EL VALOR
ESPECIFICADO EN EL DOCUMENTO;
*/

function funcionesMath() {
    document.getElementById('resultado').innerHTML=
    "Logaritmo: " + Math.log(1000)+'<br>'+
    "Exponencial: " + Math.exp(8)+'<br>'+
    "Raiz cuadrada:" + Math.sqrt(9)+'<br>'+
    "*Potencia2^8: " + Math.pow(2,8)+'<br>'+
    "*Valor Absoluto: " + Math.abs(-666)+'<br>'+
    "*Redondeo Medio: " + Math.round(6.3458)+'<br>'+
    "Redondeo Baja: " + Math.floor(6.3458)+'<br>'+
    "Redondeo Alza: " + Math.ceil(6.3458)+'<br>'+
    "*Random o semilla: " + Math.random()+'<br>'+
    "*Random o semilla del 1 al 10: " + Math.random()*10+'<br>'+
    "Valor maximo: " + Math.max(1,4,5,8,9)+'<br>'+
    "Valor minimo: "+ Math.min(1,4,5,9,8)+'<br>'+
    "Coseno Pi: " + Math.cos(Math.PI)+'<br>'
       
}
function funcionesString() {
    var texto ='JAVASCRIPT con Estructura de Cadena de Texto';
    document.getElementById('resultado').innerHTML=
    "Minuscula: "+ texto.toLocaleLowerCase()+'<br>'+
    "Mayusculas" + texto.toLocaleUpperCase()+'<br>'+
    "⚠Longitud del String"+ texto.length+'<br>'+
    "Localizacion de un caracter: " + texto.indexOf('@')+'<br>' 
   
}

function funcionesDate() {
    var fecha = new Date();
    //orientado Objetos
    document.getElementById('resultado').innerHTML=
    "*Hora: " + fecha.toLocaleTimeString()+'<br>'+
    "Fecha " + fecha.toLocaleDateString()+'<br>'+
    "Minutos:" + fecha.getMinutes()+'<br>'+
    "Segundos: " + fecha.getSeconds()+'<br>'+
    "Milisegundos "+ fecha.getMilliseconds()+'<br>'+
    "Mes: " + (fecha.getMonth()+1)+'<br>'+//+1 corregir la lectura de numeracion de los array
    "Dia: " + fecha;


    
}

