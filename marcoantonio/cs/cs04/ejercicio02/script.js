/* Exercise #2
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

/* Escribe una función que:
Toma una matriz de números.
Duplica el valor de cada número en la matriz.
Imprime la nueva matriz actualizada.
Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10] */

let numbers = [1, 2, 4, 5];
let length = numbers.length;
for (let i = 0; i < length; i++) {
  arr =[numbers[i]*= 2];
}
