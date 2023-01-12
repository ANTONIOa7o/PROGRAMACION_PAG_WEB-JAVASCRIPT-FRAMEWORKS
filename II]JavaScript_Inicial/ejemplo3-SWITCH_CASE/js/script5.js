function promocion() {

    //variables residuales
    var precio = 0;
    var dto = 0;
    var precioFinal = 0;
    //variable eje; el valor del input, apuntaremos a través de su id='opcion'
    var opcion = document.getElementById('opcion').value;//recojo la variable a comparar
    var respuesta = document.getElementById('resultado');
    switch (opcion) {
        case 'PREMIUM':
            respuesta.innerHTML = 'Aplicacion de dto del 25% en su proxima compra..'

            break;
        case 'DELUXE':
            precio = 100;
            dto = 50;
            precioFinal = precio - dto
            respuesta.innerHTML = 'Aplicacion de dto en compras de 100€..' + '<br>'+ ' <strong> Se aplicará un dto de:  ' + dto + '€' +
            '<br>' + 'PAGARÍA :' + precioFinal + '€'
            break;
        case 'REGAL01OO':
            respuesta.innerHTML = 'Aplicacion de dto del 35% en su proxima compra..'
            break;

        default:
            swal('No ha introducido codigo promocional o error de codigo')
            break;
    }

}