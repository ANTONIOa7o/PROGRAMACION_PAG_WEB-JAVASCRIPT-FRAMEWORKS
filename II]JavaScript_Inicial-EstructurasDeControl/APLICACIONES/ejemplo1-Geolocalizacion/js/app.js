var mapa;

function mostrarMapa() {
    /*1º Comprobar las configuraciones del navegador, cuales son:
        -> Dispositivo soporta o inhabilitada la geolocalizacion
        -> Rastreo de Errores
    */
    if (navigator.geolocation) {//true
        //2º Obtener la ubicacion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError)//true, concurrar las funciones en true
    } else {
        alert('Tu dispositivo o navegador no accede a la geolocalizacion');
    }
    /*3º Generaremos:
        a.Opciones- Api de GoogleMaps
        b.Declarada la variables asignamos Valor(Dicho valor vendra definido como objeto)
    */
    var opciones = {//Formato json
        zoom: 12,//posicion 0
        mapTypeId: google.maps.MapTypeId.ROADMAP//posicion 1 Tipos de Mapa HIBRID,ROADMAP,SATELLITE,TERRAIN
    }//!!!
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones)
    /*
    Simulacion Comparada:
    var fecha = new Date() 
    var hora = fecha.gethour()

    var mapa = new google.maps
    var representacionMapa = mapa.Map

    */
}

function mostrarLocalizacion(position) {
    //4º Obtencion de las coordenadas
    var posicion = new google.maps.LatLng(40.43519777528677, -3.6519978955397727)
    //5º Añadimos texto a la marca de posicion & Marca
    var informacion = new google.maps.InfoWindow({
        map: mapa,
        position: posicion,
        content: 'Centro Formacion Calderon'
    });
    var marca = new google.maps.Marker({//1 Revisar error
        position: { lat: 40.43519777528677, lng: -3.6519978955397727 },
        map: mapa,
        title: 'negocio?'
    });
    //6º Posicion centrada
    mapa.setCenter(posicion);//2 Revisar Error

}
//7º Experiencia del Usuario, trasladar los porqués de no mostrar el mapa
function manejarError(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso Denegado...')
            break;
        case error.TIMEOUT:
            alert('Tiempo de espera Agotado...')
            break;
        case error.POSITION_UNVAILABLE:
            alert('No detecta la ubicación...')
            break;
        case error.UNKNOWN_ERROR:
            alert('ERROR DESCONOCIDO...')
            break;

        default:
            alert('Reiniciar la aplicacion')
            break;
    }

}
