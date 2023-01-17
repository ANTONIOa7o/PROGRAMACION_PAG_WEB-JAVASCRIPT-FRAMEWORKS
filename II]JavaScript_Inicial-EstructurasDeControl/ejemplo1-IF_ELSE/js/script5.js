/*
Calculos de Crédito personal sencillo
crt(credito*redito*tiempo)
Calculo de un credito::after
* a 24 meses tipo de interes 5%
* a 60 meses tipo de interes 8%
* a partir de 60 tipo de interes 10%
*/
function calcular() {

    var capital = parseFloat(window.prompt('Intruduce el importe que cumple tu sueño'));
    var tiempo = parseInt(window.prompt('Elige el nº de meses para abonar comodamente'));//Respuesta eje
    var redito = 0//residual

    if (tiempo <= 24) {
        redito = 0.5
    } else if (tiempo >= 60) {
        redito = 0.8
    } else {
        redito = 0.10
    }

    var interes = (capital * redito / tiempo);
    document.getElementById('resultado').innerHTML =
        'Credito solicitado:' + capital + '€' + '<br>' +
        'Tipo de interes: ' + redito * 10 + '%' + '<br>' +
        'Meses de abono: ' + tiempo / 12 + 'años' + '<br>' +
        'Interes a abonar: ' + interes + '€';

    var cuota = (capital + interes) / tiempo;
    document.getElementById('resultado2').innerHTML =
        'El total de su cuota a abonar cada mes será: ' + cuota.toFixed(2) + '€';

    /*
    metodo de ajuste de decimales para variables number .toFixed(2)
    */
}

/* function guardar(){ 
    window.print();
} */