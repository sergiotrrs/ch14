console.log("Acá pongo mi código");
/*
Aquí merito, por favor.
*/
/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

let array1 = [1, 2, 3, 4];
let plus = array1.reduce((a,b) => a + b); //Para la suma
let product = array1.reduce((c,d) => c*d); //Para la multiplicacion

console.log(array1);
console.log("The sum is: " + plus);
console.log("The product is: " + product);