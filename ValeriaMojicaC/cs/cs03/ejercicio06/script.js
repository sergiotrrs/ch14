//Elabora un algoritmo para leer un número y determinar si es par o impar
let numero = parseInt(prompt("Ingresa un numero: "));

if (numero % 2 == 0) {
    alert("El numero: " + numero + " es par");
}
else if (numero % 2 !== 0) {
    alert("El numero: " + numero + " es impar");
}
else {
    alert("Ingresa un numero valido")
}