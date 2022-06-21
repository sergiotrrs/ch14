/*
5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
   -Obtener los tres números.
   -Sumar el número 1 con el número 2, comparar el resultado con el número 3 para saber si son iguales.
   -Sumar el número 2 con el número 3, comparar el resultado con el número 1 para saber si son iguales.
   -Sumar el número 1 con el número 3, comparar el resultado con el número 2 para saber si son iguales.
   -Dar los resultados.
*/

let suma;

let num1 = parseInt(prompt("Escribe el primer número."));
let num2 = parseInt(prompt("Escribe el segundo número."));
let num3 = parseInt(prompt("Escribe el tercer número."));

if(num3==(num1+num2)){
    console.log("El número tres es la suma del número uno y el número dos");
}
else if(num2==(num1+num3)){
    console.log("El número dos es la suma del número uno y el número tres");
}

else if(num1==(num2+num3)){
    console.log("El número uno es la suma del número dos y el número tres");
}

else{
    console.log("Ningún número es la suma de los otros dos");
}
