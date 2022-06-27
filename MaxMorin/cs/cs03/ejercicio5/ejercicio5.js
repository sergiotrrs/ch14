/*Elaborar un algoritmo para leer 3 numeros y determinar si uno es la suma de los otros dos*/

let numero1 ;
let numero2 ;
let numero3 ;

numero1 = parseInt(prompt("Ingresa el numero 1"));
numero2 = parseInt(prompt("Ingresa el numero 2"));
numero3 = parseInt(prompt("Ingresa el numero 3"));

if (numero1 == (numero2 + numero3)){
    console.log("la suma de numero 2 y numero 3 son iguales");
}
else if 
    (numero2 == (numero1 + numero3)){
    console.log("la suma de numero 1 y numero 3 son iguales");
}

else if (numero3 == (numero1 + numero2)){
    console.log("la suma de numero 1 y numero 2 son iguales");
}

else {
    console.log("ningun numero es igual a la suma de dos numeros");
}