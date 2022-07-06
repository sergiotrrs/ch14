// Solicitar un número entero (entre 1 y 100) y determinar si es un número múltiplo de 3 ----------------------------------------------------
let numero;

numero = prompt("dame un número entero entre 1 y 100");

if(numero%3 == 0){
    alert("El número es múltiplo de 3");
}
else{
    alert("El número no es un número múltiplo de 3");
}
