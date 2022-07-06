console.log("ejercicio03 cs04");

/*  Escriba un programa para calcular la suma y el producto 
de una matriz de números. Imprime la suma y el producto.
Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.
*/


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const vInicial = 0;
const sumaIni = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  vInicial);

console.log(sumaIni);