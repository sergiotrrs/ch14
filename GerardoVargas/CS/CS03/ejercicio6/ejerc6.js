//Elaborar un algoritmo para leer un número y determinar si es par o impar.

let número = 80;  
let dividendo = 2; 
let modulo = número % dividendo;  

if (modulo == 0){
    console.log("El número es par");
}

else if (modulo != 0){
    console.log("El número es impar");
}