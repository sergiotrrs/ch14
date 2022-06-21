/* Algoritmo 5 
Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos*/

let num1 = parseInt(prompt("Escribe un número"));
let num2 = parseInt(prompt("Escribe un número"));
let num3 = parseInt(prompt("Escribe un número"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
    document.write("Ingresa solo números");
} else if(num1==(num2+num3)){
    document.write(num1 + " El primer número es la suma del número 2 y número 3");
} else if (num2 == (num1+num3)){
    document.write(num2 + " El segundo número es la suma del número 1 y número 3");
} else if (num3 == (num1+num2)){
    document.write(num3 + "  El tercer número es la suma del número 1 y número 2");
} else {
    document.write("Ningún número es la suma de los otros")
}