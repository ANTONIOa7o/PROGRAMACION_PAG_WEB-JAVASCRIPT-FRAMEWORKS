/*
OBJECT XMLHttpRequest (xhr); Cuales serán sus caracteristicas de accion principales:
    1- Realizar peticiones a servidores web, directivas de llamada open();
    2-enviar peticiones concretas y definidas , directivas de peticion send();
    3-recibir las respuestas solicitadas, directivas de propieda responseText()

(ejemplo simplificado url tranformada en objeto)
*/
var xhr;

function buscarPokemon() {
    // 1º creo mi objeto 
    xhr = new XMLHttpRequest();
    // 1.1 Recoger el dato, nombre pokemon
    var dato = nombre.value

    //2º Preparar la peticion
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + dato, true)//true= respuesta Asincronia,en 2º plano

    //3º Como quiero la respuesta, de origen
    xhr.setRequestHeader('accept', 'application/json');

    //4º Procesamos la respuesta, a traves de una funcion gestionar dato
    xhr.onreadystatechange = procesarRespuesta;

    //5º Enviar la peticion [abierta la comunicacion canal abierto de entrada y salida]
    xhr.send();
    //6º UX Pueda percibir error de 
    xhr.onerror = procesarError;
}
function procesarRespuesta() {
    if (xhr.readyState = 4) { // solicitud finalizada, 
        var respuesta = JSON.parse(xhr.responseText);
        console.log(respuesta);
        document.getElementById('resultado').innerText =
            'Nombre: ' + respuesta.name + '\n' +
            'Altura: ' + respuesta.height + '\n' +
            'Peso: ' + respuesta.weight + '\n' +
            'Habilidades: ' + '\n'
        var habilidades = respuesta.abilities
        for (var i in habilidades) {
            document.getElementById('resultado').innerText += '' + habilidades[i].ability.name
        }
    }

}


/** ABIERTO ERROR PARA UX */
function procesarError() {
    document.getElementById('resultado').innerHTML = '#Error'
}