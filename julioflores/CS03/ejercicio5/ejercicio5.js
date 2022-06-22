/* Ejercicio 5:
Elaborar un algoritmo para leer 3 números 
y determinar sí uno es la suma de los otros dos
*/
let numeros = [5, 65, 20];
let numeroMayor;
numeroMayor = numeros [1];
let numeroMenor;
numeroMenor = numeros [0];
numeros;
let numeroMedio = numeros [2];
function suma(a,b) {
    return a+b
}
if (numeroMayor == suma(numeroMedio + numeroMenor)) {
    console.log ("Numero mayor igual a la suma de los otros 2");
}
else {
    console.log("Numero mayor es diferente de la suma de los otros 2");
}