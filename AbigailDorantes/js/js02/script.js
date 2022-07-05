/*const suma = (num1,num2) => num1+num2;
console.log("la suma es: " + suma());*/

//Se agregan funciones para realizar operaciones suma, resta,  mutiplicacion y division 

const sumar=()=>{ //array function
    let a= parseFloat(document.getElementById('num1').value);
    let b= parseFloat(document.getElementById('num2').value);
    document.getElementById("result").innerHTML = a+b;
}

function resta(){
    let a= parseFloat(document.getElementById('num1').value);
    let b= parseFloat(document.getElementById('num2').value);
    document.getElementById("result").innerHTML = a-b;
}

function multipli(){
    let a= parseFloat(document.getElementById('num1').value);
    let b= parseFloat(document.getElementById('num2').value);
    document.getElementById("result").innerHTML = a*b;
}

function division(){
    let a= parseFloat(document.getElementById('num1').value);
    let b= parseFloat(document.getElementById('num2').value);
    document.getElementById("result").innerHTML = a/b;
}