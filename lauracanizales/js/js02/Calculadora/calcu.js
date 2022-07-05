//Funcion flecha suma
const suma= () => {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    return document.getElementById("resultado").innerHTML= parseInt (a)+ parseInt(b);
};

//Funcion resta
const resta= () => {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    return document.getElementById("resultado").innerHTML= a - b;
};

//Funcion multiplicacion
const multi= () => {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    return document.getElementById("resultado").innerHTML= a * b;
};

//Funcion division
const div= () => {
    let a = document.getElementById("valor1").value;
    let b = document.getElementById("valor2").value;
    return document.getElementById("resultado").innerHTML= a / b;
};


