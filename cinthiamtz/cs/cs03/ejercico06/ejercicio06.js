// Algoritmo 6: Determinar si un numero es par o impar

alert('Programa que determina si un numero es par o impar');

//Definicióm de variables
let numero = prompt("Ingresa un numero");
let modulo = numero % 2;

//Condicionales
if ( modulo == 0){
    console.log ("El", numero , "es un numero par");  
    alert('El ' + numero + ' es un numero "PAR"');  
}
else {
    console.log ("El", numero , "es un numero impar");
    alert('El ' + numero + ' es un numero "IMPAR"');
}