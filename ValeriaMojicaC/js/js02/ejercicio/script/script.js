function suma(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 + num2;
};

function resta(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 - num2;
};

function multiplicacion(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 * num2;
};

let division = (num1 = parseFloat(document.getElementById("num1").value), num2 = parseFloat(document.getElementById("num2").value)) => document.getElementById("resultado").value = num1 / num2;

/*function division(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").value = num1 / num2;
};*/

function borrar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").value = "";
}