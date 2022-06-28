// Elaborar un programa para leer 3 números y determinar si uno es la suma de los otros Dos ----------------------------------------------------

let primero = parseInt(prompt("Dame el primer número"));
let segundo = parseInt(prompt("Dame el segundo número"));
let tercero = parseInt(prompt("Dame el tercer número"));

if (primero == (segundo + tercero)) {
    alert("El primer número es la suma de los otros dos :)");
}
if (segundo == (primero + tercero)) {
    alert("El segundo número es la suma de los otros dos :)");
}
if (tercero == (primero + segundo)) {
    alert("El tercer número es la suma de los otros dos :)");
}