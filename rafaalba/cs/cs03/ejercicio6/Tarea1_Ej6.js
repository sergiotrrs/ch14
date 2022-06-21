//6. Elabora un algoritmo para leer un número y determinar si es par o impar.

let number = 0;
number = prompt("Escribe un número entero");
   console.log(number)

//let number = 10; //Dividendo
let dividendo = 2; //Divisor

let modulo = number % dividendo; //Residuo

if (modulo == 0){
    console.log("El número es par");
}

else if (modulo != 0){
    console.log("El número es impar");
}