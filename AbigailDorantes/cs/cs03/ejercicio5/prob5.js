//5.	Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let num1 = parseInt(prompt("Introduce numero 1: ", 0));
let num2 = parseInt(prompt("Introduce numero 2: ", 0));
let num3 = parseInt(prompt("Introduce numero 3: ", 0));

let suma1 = (num2) + (num3);
let suma2 = (num1) + (num3);
let suma3 = (num2) + (num1);

if (suma1 == num1) {
    console.log("El la suma de numero 2 y numero3 da: " + num1);
} else {
    if (suma2 == num2) {
        console.log("El la suma de numero 1 y numero3 da: " + num2);
    } else {
        if (suma3 == num3) {
            console.log("El la suma de numero 2 y numero 1 da: " + num3);
        } else { console.log("Ningún numero es igual a la suma de los otros dos "); }
    }
}

