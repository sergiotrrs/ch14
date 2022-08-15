function sumar(){
    let a = document.getElementById("NumA").value;//DOM
    let b = document.getElementById("NumB").value;
    let primerNum = parseInt(a);
    let segundoNum = parseInt(b);
    const suma = (primerNum,b) => primerNum + segundoNum; 
    document.getElementById("anonimo").innerHTML = suma (primerNum,segundoNum);
}
function restar(){
    let a = document.getElementById("NumA").value;
    let b = document.getElementById("NumB").value;
    const resta = (a, b) => a - b;
    document.getElementById("anonimo").innerHTML = resta (a,b);
}
function multiplicar(){
    let a = document.getElementById("NumA").value;
    let b = document.getElementById("NumB").value;
    const multi = (a, b) => a * b;
    document.getElementById("anonimo").innerHTML = multi (a,b);
}
function dividir(){
    let a = document.getElementById("NumA").value;
    let b = document.getElementById("NumB").value;
    const div = (a, b) => a / b;
    document.getElementById("anonimo").innerHTML = div (a,b);
}