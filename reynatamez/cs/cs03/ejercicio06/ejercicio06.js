//Elaborar un algoritmo para leer un número y determinar si es par o impar.

let número = 100;  //Dividendo
let dividendo = 2; //Divisor
let modulo = número % dividendo;  //Residuo

if (modulo == 0){
    console.log("El número es par");
}

else if (modulo != 0){
    console.log("El número es impar");
}