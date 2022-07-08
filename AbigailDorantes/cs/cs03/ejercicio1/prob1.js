// Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el mayor

let num1 = 55;
let num2 = 14;
let num3 = 44;
let numMay;

if (num1 > num2) {
    numMay = num1;
} else { numMay = num2 }
if (numMay > num3) {
    numMay = numMay;
} else { numMay = num3 }

console.log("el numero mayor es: " + numMay);