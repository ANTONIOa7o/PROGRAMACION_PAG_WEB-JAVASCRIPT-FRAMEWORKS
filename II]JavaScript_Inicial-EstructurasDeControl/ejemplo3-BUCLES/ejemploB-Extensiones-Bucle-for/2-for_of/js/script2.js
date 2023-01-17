/*
HTML5 , llega una gran cantidad de aportaciones a la ejecucion del
doctype, acompañada de muchos recursos (Api´s):
->para mejor el desarrollo de estilo(FrameWork estilos)
->Entraron nuevos selectores y metodos/funciones
->Absorbe funciones de otros lenguajes,desde la funcionalidad
de css pero a travéws de la ejecucion js
    * querySelector()
    Funcionalidad pricipal, tendrá una condicion simila a getElementById, 
    apuntando a la seleccion de determinados elementos.

    (asociado a las clases-css-)

    Al ser usado como instancia del documento(document), realizará una
    busqueda sobre cualquier elemento al que apunte; (Pudiendo trabajar
        tambie realidades del DOM)

    *querySelectorAll()

    Funcionalidad principal, tendrá una condicion similar a 
    getElementByTagName 
    Acompaña a poder trasladar resultados , sin necesidad del id o
    identificar recepcion de objetos

*/
var botones = document.querySelectorAll('button');
for (i of botones) {
    i.addEventListener('click', function () {
    document.querySelector('.objeto').innerHTML = 'Has seleccionado: '+this.innerHTML//Puntero this
    });

}