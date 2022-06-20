/*
6. Elabora un algoritmo para leer un número y determinar si es par o impar
   -Obtener el número.
   -Dividir el número entre 2, si el resultado es 0, el número es par, en caso contrario es impar.
   -Dar el resultado.
*/

let num = parseInt(prompt("Escribe el número al que se determinará si es par o impar"));
let residuo = num%2;

if(residuo==0){
    console.log("El número es par");
    
}
else{
    console.log("El número es impar");
}
