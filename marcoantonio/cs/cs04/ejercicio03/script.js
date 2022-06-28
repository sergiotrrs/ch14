/* Write a program to compute the sum and product (multiplication) 
    of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

/*  Escriba un programa para calcular la suma y el producto 
(multiplicación) de una matriz de números. Imprime la suma y el producto.
Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24. */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

function esNumerico(dato) {
    return !isNaN(parseFloat(dato)) && isFinite(dato);
}

function multiplicarContenidoArreglo(contenido) {
    if (!Array.isArray(contenido)) {
        return null;
    }

    let multiplicacion = 1;

    for (let i = 0; i < contenido.length; i++) {
        const elemento = contenido[i];
        
        if (esNumerico(elemento)) {
            multiplicacion *= parseFloat(elemento);
        }
    }

    return multiplicacion;
}

console.log(multiplicarContenidoArreglo([1, 2, 3, 4]));    // 24

