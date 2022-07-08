console.log("ejercicio02 cs04");

/*Escribe una función que:
 Toma en una serie de números.
 Duplica el valor de cada número en la matriz.
 Imprime la nueva matriz actualizada.
Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10] */

const numbers = [1, 2, 4, 5];
let length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers [i] *= 2;
 
}

//console.log(numbers);