
function sumar(){
    let a = document.getElementById("NumeroA").value;
    let b = document.getElementById("NumeroB").value;
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    const suma = (num1, num2) => num1 + num2;
    document.getElementById("anonimo").innerHTML = suma (num1,num2);
}
function restar(){
    let a = document.getElementById("NumeroA").value;
    let b = document.getElementById("NumeroB").value;
    const resta = (a, b) => a - b;
    document.getElementById("anonimo").innerHTML = resta (a,b);
}
function multiplicar(){
    let a = document.getElementById("NumeroA").value;
    let b = document.getElementById("NumeroB").value;
    const multi = (a, b) => a * b;
    document.getElementById("anonimo").innerHTML = multi (a,b);
}
function dividir(){
    let a = document.getElementById("NumeroA").value;
    let b = document.getElementById("NumeroB").value;
    const div = (a, b) => a / b;
    document.getElementById("anonimo").innerHTML = div (a,b);
}
