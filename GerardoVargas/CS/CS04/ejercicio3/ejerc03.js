//Escriba un programa para calcular la suma y el producto (multiplicación) de una matriz de números.
//Imprime la suma y el producto.
//Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24

let numeros = [1, 2, 3, 4];
let suma = 0;
let multiplicar =1;

for ( let i = 0; i < numeros.length; i++ ) {
    suma += numeros[i];
}
console.log(suma);
 
for ( let j= 0; j<numeros.length; j++ ){
    multiplicar *= numeros[j];
}
console.log(multiplicar);