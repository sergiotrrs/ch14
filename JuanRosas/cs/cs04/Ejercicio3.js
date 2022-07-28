let numbers = [1,2,3,4];
let suma = 0;
let multi = 1;
for(let i = 0 ; i < numbers.length ; i++){
    suma = suma + numbers[i];
    multi = multi * numbers[i];
}
console.log(suma);
console.log(multi);