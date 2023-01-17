function presiona() {

    var fecha = new Date();
    var dia = fecha.getDay()-1;//variable eje
    var menu = "";//variable residual

    switch (dia) {
        case 0:
            menu = 'Cocido Montañes';
            console.log(dia)//Parte de Domingo, Calendario Anglosajon, Ademas entendiendo 0 como primer elemento 
            break;
        case 1:
            menu = 'Cerrado por descansos';
            console.log(dia)
            break;
        case 2:
            menu = 'Paella Valenciana';
            break;
        case 3:
            menu = 'Judiones A la Cantabra';
            break;
        case 4:
            menu = 'Pote Asturiano';
            break;
        case 5:
            menu = 'Cocido Madrileño';
            break;
        case 6:
            menu = 'Degustación Caza'
            break;
        default:
            menu="Error de Conexion o Tiempo excedido al Servidor"
            break;
    }

document.getElementById('resultado').innerText=
'Tú menú de hoy es: ' + menu;

}