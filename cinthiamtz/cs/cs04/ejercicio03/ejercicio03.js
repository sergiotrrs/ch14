/* Ejericicio 03
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
//Declaración del arreglo
const arreglo = [1 , 2, 3, 4];
let suma = 0;
let multiplicacion=1;
for (let i=0; i<arreglo.length; i++){
      suma = arreglo [i] +suma;
      multiplicacion = arreglo [i] * multiplicacion;    
}
//Imprimiendo los resultados en la consola y 
console.log( "El resultado de la suma de los numeros", arreglo.join(" + "), "= " + suma);
alert('El resultado de la suma de los numeros '+ arreglo.join(" + ") + ' = ' + suma);
console.log( "El resultado de la multiplicación de los numeros", arreglo.join(" x "), "= " + multiplicacion);
alert('El resultado de la multiplicación de los numeros '+ arreglo.join(" x ") + '= ' + multiplicacion);
