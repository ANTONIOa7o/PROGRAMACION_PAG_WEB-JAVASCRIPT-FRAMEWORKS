function jugar() {
    var numero = parseInt((Math.random() * 50) + 1);
    console.log(numero);
    var adivina = '';
    var intentos = 5;
    //Aclaracion-Matización: Mirar SweetAlert o SweetAlert2 para las llamadas de interfaces
    do {
        adivina = parseInt(window.prompt('Adivina el nº entre el 1 y el 50'));
        if (adivina > numero) {
            alert(`te has pasado ....' te quedarian  ${intentos--}`);//Estructuras de Template
                                                                    // simbolo $ la representacion de la variable acotado entre llaves{}
        } else if (adivina < numero) {
            alert(`<div> te has quedado corto.... te quedarian  ${intentos--}`);
        }

    } while (adivina != numero && intentos > 0);

    if (numero == adivina) {
        swal('Enhorabuena has acertado'+ adivina);
    } else {
        swal('Lo sentimos no lo has adivinado, el numero'+ adivina+' se han agotado lo itentos')
    }
}