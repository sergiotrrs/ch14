/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let array3 = [1, 2, 3, 4];
let s = 0;
let p = 1;

for (let i = 0; i < array3.length; i += 1) {
    s += array3[i];
    p *= array3[i];
}
console.log('La suma de todos los numeros es:' + s + ' y el producto es: ' + p); 