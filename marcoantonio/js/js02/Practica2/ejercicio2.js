//Funcion flecha suma
const suma = () => {
    let a = document.getElementById("valorUno").value;
    let b = document.getElementById("valorDos").value;
    return document.getElementById("resultado").innerHTML = (Number(a) * 10 + Number(b) * 10) / 10;

};

//Funcion flecha resta
const resta = () => {
    let a = document.getElementById("valorUno").value;
    let b = document.getElementById("valorDos").value;
    return document.getElementById("resultado").innerHTML = ((a) * 10 - (b) * 10) / 10;
};

//Funcion flecha multiplicación 
const multiplicacion = () => {
    let a = document.getElementById("valorUno").value;
    let b = document.getElementById("valorDos").value;
    return document.getElementById("resultado").innerHTML = a * b;
};

//Funcion flecha división
const division = () => {
    let a = document.getElementById("valorUno").value;
    let b = document.getElementById("valorDos").value;
    return document.getElementById("resultado").innerHTML = a / b;
};