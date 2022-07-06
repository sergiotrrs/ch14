//Exercise #3
const numeros = [5, 10, 15, 20, 25];
let suma = 0;
let multiplicacion = 1;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    multiplicacion *= numeros[i];
};

console.log(suma);
console.log(multiplicacion);
