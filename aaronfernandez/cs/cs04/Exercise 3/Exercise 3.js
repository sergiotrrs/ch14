/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

let arr = [1, 2, 3, 4];
let addition = 0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
    addition += arr[i];
}
console.log("The sum is:", addition)

for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
console.log("The multiplication is:", product)