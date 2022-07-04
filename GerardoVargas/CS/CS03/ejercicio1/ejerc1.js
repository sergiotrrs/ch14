// Solicitar 3 números (entre el 1 y el 100) y definir cúal es el mayor

let num1 = 10;
let num2 = 9;
let num3 = 8
let numMay;

if (num1 > num2){
    numMay = num1;
}
    else { numMay = num2}
if (numMay > num3){
    numMay = numMay;
}
    else { numMay = num3}

console.log("El numero mayor es: " + numMay);