/* Código para leer tres números
y determinar si alguno
es la suma de los otros dos números dados */

//Inicia el programa y se piden tres números
window.alert("Las siguientes ventanas determinan si algún número es la suma de otros dos números");
let primerNumero = window.prompt("Inserte un primer número");
let segundoNumero = window.prompt("Inserte un segundo número");
let tercerNumero = window.prompt("Inserte un tercer número");

//Se pasa a valores enteros
primerNumero = parseInt(primerNumero);
segundoNumero = parseInt(segundoNumero);
tercerNumero = parseInt(tercerNumero);

//Se revisa qué número es mayor y se recuerda como "posibleNumero"
let posibleNumero = 0;
if (primerNumero > segundoNumero) {
    if (primerNumero > tercerNumero) {
        posibleNumero = primerNumero;
    }
}
if (segundoNumero > primerNumero) {
    if (segundoNumero > tercerNumero) {
        posibleNumero = segundoNumero;
    }
}
if (tercerNumero > primerNumero) {
    if (tercerNumero > segundoNumero) {
        posibleNumero = tercerNumero;
    }
}

console.log(posibleNumero);
/*El siguiente bloque de código revisa que los otros dos números
sumados den el número mayor*/
let suma = 0;
if (primerNumero == posibleNumero) {
    suma = segundoNumero + tercerNumero;
}

if (segundoNumero == posibleNumero) {
    suma = primerNumero + segundoNumero;
}

if (tercerNumero == posibleNumero) {
    suma = primerNumero + segundoNumero;
}

if (suma === posibleNumero) {
    window.alert(`Bueno, ${posibleNumero} es la suma de los otros dos`);
}
else {
    window.alert("Los números sumados no dan el número mayor");
}