var nombre="",apellido="",email="",telefono="",direccion="",ciudad="",codigoPostal="",edad="",dni="",sexo="";

/*
                                EL METODO addEventListener

                Orientado a la percepcion de un evento, que lo indicará el navegador que esté atento a dicha
                interaccion del usuario. Ofreciendo una ventaja clara a JS, al ser definido totalmente en este
                escenario, sin necesidad de pasar por estructuras docType

            Descripción desde la Sintaxis:

            Inicia y permite añadir una escucha DEL EVENTO INDICADO (Primer parámetro), en el caso de que ocurra
            tal evento(true) se ejecutará la funcion() asociada (Segundo parámetro), de forma opcional, podemos
            pasar un tercer parametro o estructura
            Sintaxis:
            target(evento).addEventListener('tipo de evento', funcion(a lanzar),booleano)
*/

//1º definicio  del evento, y la funcion a ejecutar
enviar.addEventListener('click',capturarForm);

//2º Funcion a ejecutar
function capturarForm() {

nombre=document.getElementById('inputNombre').value;
apellido=document.getElementById('inputApellido').value;
direccion=document.getElementById('inputDireccion').value;
ciudad=document.getElementById('inputCiudad').value;
codigoPostal=document.getElementById('cp').value;
email=document.getElementById('inputEmail').value;
telefono=document.getElementById('inputTelefono').value;
edad=parseInt(document.getElementById('inputEdad').value);//PARASEAMOS con la intencion de manejar el error de numero
dni=parseInt(document.getElementById('inputDni').value);
sexo=document.getElementById('inputSexo').selectedIndex;

//3º Redundacia de Funcion
validarDatos();
    
}


function validarDatos() {

    if (!(isNaN(nombre))) {
        MostrarError('inputNombre');//Definido como campo de texto
    }
    if (apellido=="") {
        MostrarError('inputApellido');
    }
    if (direccion=="") {
        MostrarError('inputDireccion');
    }
    if (ciudad=="") {
        MostrarError('inputCiudad');
    }
    if (!(/^\d{5}(?:[-s]d{4})?$/.test(codigoPostal))) {
        MostrarError('cp');
    }
    if (email=="") {
        MostrarError('inputEmail');
    }
    if (!(/^\d{9}$/.test(telefono))) {
        MostrarError('inputTelefono');
    }
    if (isNaN(edad)) {
        MostrarError('inputEdad');//Definido campo numerico
    }
    if (isNaN(dni)) {
        MostrarError('inputDni');
    }
    if (sexo==null || sexo==0) {
        MostrarError('inputSexo');
    }
    
}

function MostrarError(id){
    document.getElementById(id).value="⚠";//Añadiendo un valor al error
    swal('Faltan campos por rellenar en el formulario');
    document.getElementById(id).classList.add("warning") ;// ClassList metodo para acceder a distintas clases, sean nativas (is-invaid{Bootstra}) o propias (warning)
}


function exito() {
    swal("Formulario Enviado Correctamente");
}