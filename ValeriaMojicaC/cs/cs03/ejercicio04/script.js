//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

let numero = parseInt(prompt("Ingresa un numero entre el 100 y 200"));

if (numero % 3 == 0) {
    alert("El numero: " + numero + " es multiplo de 3");
}
else {
    alert("El numero: " + numero + " NO es multiplo de 3");
}