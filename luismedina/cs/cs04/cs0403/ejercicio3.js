const matriz = [2,9,15,2];
console.log(`La matriz es`,matriz);
let suma = 0;
let multi = 1;
for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i];
        multi = multi * matriz[i];
    }
console.log(`El resultado de la suma es ${suma}`)
console.log (`El resultado de la multplicacion ${multi}`)