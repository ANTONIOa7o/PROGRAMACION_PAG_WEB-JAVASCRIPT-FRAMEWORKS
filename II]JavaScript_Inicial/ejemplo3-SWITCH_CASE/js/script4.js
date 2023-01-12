function inicio() {

    var hoy = new Date();
    //reloj
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();

    //calendario
    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();

    //Decenas de minutos y los segundos
    m = Decena0(m);
    s=Decena0(s);

    //pm y am

    
   /* Una forma de trasladarlo  h = amPm(h)+h; */
   ap=amPm(h);

    document.getElementById('reloj').innerHTML =
        '🕗 ' + h + ':' + m + ':' + s +"  "+ ap;

    switch (mes) {
        case 0:
            mes = 'Enero'
            break;
        case 0:
            mes = 'Febrero'
            break;
        case 0:
            mes = 'Marzo'
            break;
        case 0:
            mes = 'Abril'
            break;
        case 0:
            mes = 'Mayo'
            break;
        case 0:
            mes = 'Junio'
            break;
        case 0:
            mes = 'Julio'
            break;
        case 0:
            mes = 'Agosto'
            break;
        case 0:
            mes = 'Septiembre'
            break;
        case 0:
            mes = 'Octubre'
            break;
        case 0:
            mes = 'Noviembre'
            break;
        case 0:
            mes = 'Diciembre'
            break;


        default:
            mes = 'Err#'
            break;
    }

    document.getElementById('calendario').innerHTML =
        dia + " " + mes + ' ' + año;

    /*
    Funcion setTimeout()
    LLamada a una funcion con condicion de ejecucion definida por el tiempo de incio
    Sintaxis:
    argumento 1: la funcion que queremos ejecutar, al terminar el temporizador (definido por el tiempo de inicio)
    argumento 2: temporizador(tiempo de inicio) definido en milisegundo

    setTimeout(argumento 1() {redundancias()}, argumento 2);
    *Conclusiones:
    ->argumento 1 estaria definida dentro de los llamados callback
    (sentencia solicitada a ejecutar cada unidad de tiempo definida)
    ->argumento 2 Podemos no encontrar este argumento, sin definicion de tiempo, en caso de omisión, yo te la ejecuto
    intermitentemente
    ->la propia funcion setTime puede adoptar configuracion de variable
    */

    var t = setTimeout(function () { inicio() }, 1000);

}
/*
Ux hemos de definir claramente las decenas y unidades de minuntos y segundos, por un lado y
por otro a.m(antes del meridiano) y p.m(despues del meridiano)
*/

// Trabajamos una variables implicita sin definir anteriormente, no hay declaracion de la variable
//la vamos a declarar en la propia sentencia misma de la ejecucion de la estructura

function Decena0(i) {
//instante entra en 3 minutos i =3
    if (i < 10) {//true, al ser el 3 menor que 10
        i = '0' + i;
    }
    return i;
}

function amPm (t){
    if (t < 12) {
        ap = "am ☀"
    } else {
        ap='pm 🌗'
    }
    return ap;
}

