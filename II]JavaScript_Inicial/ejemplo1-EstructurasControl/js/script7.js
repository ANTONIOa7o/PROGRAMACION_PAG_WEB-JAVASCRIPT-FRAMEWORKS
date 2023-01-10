var estiloBorde = false; //No tiene borde
var estiloColor = false;
var estiloSombra = false;

function borde() {
    if (estiloBorde == false) {
        document.getElementById('cuadrado').style.border = '4px solid #88939c';//1 º onclick
        estiloBorde = true;
    } else {
        document.getElementById('cuadrado').style.border = 'none';//2º onclick
        estiloBorde = false;
    }
}

function color() {
    if (!estiloColor) {
        document.getElementById('cuadrado').style.backgroundColor="pink";
        estiloColor=true;

    } else {
        document.getElementById('cuadrado').style.backgroundColor='#2196f3'
        estiloColor=false;
        
    }
}
function sombra() {
    if (!estiloSombra) {
        document.getElementById(`cuadrado`).className='sombra';// Método .className, funcional para cualquier clase definida 
    } else {
       document.getElementById('cuadrado').className=null 
    }
    estiloSombra=!estiloSombra;
}