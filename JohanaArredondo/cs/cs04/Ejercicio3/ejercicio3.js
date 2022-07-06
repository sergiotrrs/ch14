// Exercise #3

let arr = [1, 2, 3, 4]; 
let sum = 0;
let mul = 1;

for(i=0;i<arr.length; i++){
    sum= arr[i] + sum;
    mul= arr[i] * mul;
}

console.log("La suma de tu arreglo es: "+sum);
console.log("El producto de tu arreglo es: "+mul);