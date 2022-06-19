/*Código para revisar si un número es múltiplo de dos*/
let numero = window.prompt("Inserte un número entero");

numero = parseInt(numero);

if (numero%2 == 0) {
    window.alert(`Según mis cálculos, el número ${numero} es número par`);
}
else {
    window.alert(`Según veo, el número ${numero} no es un número par`);
}