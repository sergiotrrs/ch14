/*Elabora un algoritmo para leer un número y determinar si es par o impar*/


let numero = 0;

numero = prompt("indique su numero: ", "");

if ((numero % 2) ==0) {
    console.log( numero + " es par" ) 
    
} else {
    console.log(numero + " es impar")
}