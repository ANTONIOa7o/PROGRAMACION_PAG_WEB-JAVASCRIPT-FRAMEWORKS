
function cambioPlanta() {
    var respuesta = document.getElementById('resultado');
    switch (event.target.id) {
        case '1':
            respuesta.innerHTML = 'Primera Planta..'
            break;
        case '2':
            respuesta.innerHTML = 'Segunda Planta..'
            break;
        case '3':
            respuesta.innerHTML = 'Tercera Planta..'
            break;

        default:
            break;
    }


    //Rastreo elementos(en este caso será los botones), habrá un metodo

    var botones = document.getElementsByTagName('button');
    /* var botones={1ºbutton:1, 2ºbuttonb:2, 3ºbuttonc:3} */

    //Recorrido para poder identificar el evento, asociado al boton
    for (indice in botones) {
        if (botones[indice].id == event.target.id) {
            document.getElementById(event.target.id).className = 'rojo';//Llamamos a la clase .rojo(selector)
        } else {
            //el resto de botones 
            botones[indice].className = 'azul';
        }
    }
}