
//declarada la variable nombres, con mas de un elemento
var nombres = [
    'juan',
    'victor',
    'Maria Luisa',
    'Don Jaime de Borbon',
    'Leonor'
];

for (const name of nombres) {
    /* document.write(name+ "<br>"); */
   
    /*1º parte
    Distinta formas de mostrar la propiedad (name)
    document.getElementById('tabla').innerHTML += name + '<br>'
document.getElementById('tabla').innerHTML= name;
document.write(todos); */ 
/*2º parte*/
var todos='<button>' + name + '</button>'//Creado el elemento de html, asociando elementos de html con proiedades del objeto
document.getElementById('tabla').innerHTML+=todos//Trasladarlo al conjunto de la propiedad
document.getElementById('tabla').className='centrado'//Cambios desde la perspectiva css
}


