/*
Dos conceptos
Calcula imc
imc=peso/Altura al cuadrado

Los baremos segun imc
18.5 imc Peso HiperDelgadez  a lo normal: flaco
hasta 24.5 Normal o Saludable
hasta 29.9 Peso SobrePeso a lo normal
por encima de 30 Obesidad: gordo
*/

function calcular() {

    var peso = parseFloat(document.getElementById('calculoPeso').value);
    var altura = parseFloat(calculoAltura.value);
    var imc = 0
    imc = peso / (Math.pow(altura, 2));//variable eje
    var respuesta = document.getElementById('resultado');//variable residual

    /*
     * Estructura de control ⇓
    */
    if (imc <= 18.5) {
        respuesta.innerHTML = 'Hiperdelgado';

    } else if (imc <= 24.9) {
        respuesta.innerHTML = 'Estupendisimo';

    } else if (imc <= 29.9) {
        respuesta.innerHTML = 'Deja comer patatas fritas';

    } else {
        respuesta.innerHTML = 'Se te ha ido de las manos';

    }

    /*
    Lipiezas de formulario
    */
   document.getElementById('limpiar').reset();

}
/* function limpiar() {

    window.onreset();
}  */
