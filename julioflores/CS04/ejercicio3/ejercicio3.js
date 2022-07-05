/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/
const arr = [2,4,6,8];
let sum = 0;
let mult = 1;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    mult *= arr[i];
}
console.log("The sum is:", sum);
console.log("The product is:", mult);