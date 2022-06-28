/* Ejercicio 4:
Solicitar un entero (entre el 100 y el 200) 
y determinar si es múltiplo de 3
*/
let numero = 150.3;
// numero = 50.5
if (numero >= 100 && numero <= 200) {
    console.log ("True");
}
else if (numero < 100 || numero > 200) {
    console.log ("False");
}
else {
    console.log("Elige otro número");
}

let numeroEntero;
numeroEntero = parseInt (numero);

let valor = 3;
function dividir(a,b) {
    return a/b
}
let numeroMulti = dividir(numeroEntero, valor);
let numeroMultiplo1 = dividir(numeroMulti, valor);
let numeroMultiplo2 = dividir(numeroMultiplo1, valor);

console.log ("¿El resultado será multiplo de 3?")
if (numeroMultiplo2 == 3) {
    console.log ("Si es multiplo de 3");
}
else {
    console.log("No es multiplo de 3");
}
