/*
Presentacion de 3 variables genericas
*/
var texto = "String: Cadena de texto"; //Valor Cadenas de Texto
var numero = 8.4; // Valor numerico
var buleana = false; //Valor boolean

document.write(texto + "<br>");
document.write(numero + "<br>");
document.write(buleana + "<br>");

/*
 * Recalcar el concepto de elemento concatenador '+' 
 * siempre entendido como union de variable o variables
*/
/*
Caracteres de Escape(backslash) acompañados de \
Utilizados para resolver determinadas acciones de posicion
en javaScript
Secuencia               Resultado
\'                      Comilla simple
\"                      Comillas dobles
\n                      Salto de linea
\t                      Tabulacion
*/
alert('\t'+texto+'\n'+numero+"\n"+buleana);