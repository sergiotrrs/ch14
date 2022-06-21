const numbers = [1, 2, 3, 4];
let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}
console.log("The sum is " + sum);

for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]; 
}
console.log("The product is " + product);