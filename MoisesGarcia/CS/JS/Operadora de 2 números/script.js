function sumar() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    const suma = (num1, num2) => num1 + num2;
    document.getElementById("resultado").innerHTML = suma(num1, num2);
}
function restar() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    const resta = (a, b) => a - b;
    document.getElementById("resultado").innerHTML = resta(a, b);
}
function multiplicar() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    const multi = (a, b) => a * b;
    document.getElementById("resultado").innerHTML = multi(a, b);
}
function dividir() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    const div = (a, b) => a / b;
    document.getElementById("resultado").innerHTML = div(a, b);
}

function limpiar() {
    document.getElementById("a").value ="";
    document.getElementById("b").value ="";
}