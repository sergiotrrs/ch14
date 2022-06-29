//Script principal. Para proyecto de calculadora 28/06/22
//By: Abue-Jatg-eca. @Generation México

/*1. Implementa las siguientes funciones de una calculadora: sumar, restar,
multiplicar y dividir*/
console.log("Hola");
let numberA;
let numberB;
let resultado = 0;

function getValue() {
    numberA = document.getElementById("numberA").value;
    numberB = document.getElementById("numberB").value;
}

function sumar(a, b) {
    console.log("Suma");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) + (b * 10)) / 10;

}

function restar(a,b) {
    console.log("Resta");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) - (b * 10)) / 10;
    console.log(resultado);
}

function multiplicar(a,b) {
    console.log("Multiplicacion");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) * (b * 10)) / 10;
    console.log(resultado);
}

function dividir(a, b) {
    console.log("Division");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) / (b*10)) / 10;
    console.log(resultado);
}

//5. Debe haber por lo menos una función flecha (Arrow Function)
function changeResult() {
    document.getElementById("result").innerHTML = resultado;
}