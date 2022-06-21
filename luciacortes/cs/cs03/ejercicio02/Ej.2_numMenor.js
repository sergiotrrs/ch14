/*Ejercicio 2. Solicitar 3 números (entre el 1 y el 100) 
y definir el menor de tres números
*/

let numA = prompt("Escribe un número de 1 a 100");
let numB = prompt("Escribe otro número de 1 a 100");
let numC = prompt("Escribe otro número de 1 a 100");

if (numA > numB && numB > numC) {
    console.log ("El número más pequeño es " +numC);
}
else if (numA > numB && numB < numC) {
    console.log ("El número más pequeño es " +numB);
}
else {
    console.log ("El número más pequeño es " +numA);
}
