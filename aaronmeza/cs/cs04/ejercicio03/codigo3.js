let array1 = [1,2,3,4];
let sum = 0;
let prod = 1;

for (let i = 0; i <= array1.length-1; i++) {
    sum = sum + array1[i];
}
console.log(sum);   
for (let i = 0; i <= array1.length - 1; i++) {
    prod = prod * array1[i]
}
console.log(prod);
