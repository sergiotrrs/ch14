/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const elements = [1,2,3,4];
let sum = 0;
let mult = 1;

for (let i = 0; i < elements.length; i++){
        sum += elements[i];
        mult *= elements[i];

}

console.log("Los elementos son: " + elements)
console.log("La suma de los elementos del array es " + sum);
console.log("El producto de los elementos del array es " + mult);
