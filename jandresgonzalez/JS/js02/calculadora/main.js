/*
*
*Script principal. Para proyecto de calculadora 28/06/22
*By: Abue-Jatg-eca. @Generation México
*
*/

/*1. Implementa las siguientes funciones de una calculadora: sumar, restar,
multiplicar y dividir*/
let numberA;
let numberB;
let resultado = 0;

//Esta función obtiene el valor que se pone en los input
function getValue() {
    numberA = document.getElementById("numberA").value;
    numberB = document.getElementById("numberB").value;
}

//5. Debe haber por lo menos una función flecha (Arrow Function)
function changeResult() {
    (() => {console.log("Autoinvoked")})();
    //document.getElementById("result").innerHTML = resultado;
    (() => {document.getElementById("result").innerHTML = resultado;})();
}

//Se utilizan funciones para suma, resta, mult y división
function sumar(a, b) {
    getValue();
    console.log("Suma");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) + (b * 10)) / 10;
    changeResult();
}

function restar(a,b) {
    getValue();
    console.log("Resta");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) - (b * 10)) / 10;
    changeResult();
}

function multiplicar(a,b) {
    getValue();
    console.log("Multiplicacion");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) * (b * 10)) / 10;
    changeResult();
}

function dividir(a, b) {
    getValue();
    console.log("Division");
    a = Number(a);
    b = Number(b);
    resultado = ((a * 10) / (b*10)) / 10;
    changeResult();
}