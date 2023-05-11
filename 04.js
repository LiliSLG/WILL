/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:

/*   var numeroStr = num.toString();
  var esCapicua = true;
  for (let index = 0; index < numeroStr.length; index++) {
     if(numeroStr[index] !== numeroStr[numeroStr.length -1 - index]){
        esCapicua = false
     };   
  }
  return esCapicua
 */

var numString = num.toString();
var longitud = numString.length;
for (let index = 0; index < Math.floor(longitud/2); index++) {
  if(numString[index] !== numString[longitud - 1 - index]){
    return false
  } 
}
return true

  //return ""+num === (""+num).split("").reverse().join("")
  //return num.toString() === (num.toString()).split("").reverse().join("")
}

//console.log(numeroSimetrico(1331))

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico