/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let array = [1, 2, 3, 4];
let suma = 0;
let multiplicacion = 1;

function summul(valor, indice, arreglo) {
    suma = suma + arreglo[indice];
    multiplicacion = multiplicacion * arreglo[indice];
    return suma;
    return multiplicacion;
}

array.forEach(summul);
console.log("La suma es "+suma+". La multiplicación es "+multiplicacion);
