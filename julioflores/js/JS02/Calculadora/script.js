//desués de un get elemet va el valor
function calcular(){
    let valorA=document.getElementById("valorA").value;
    let valorB=document.getElementById("valorB").value;
    let sum=suma(parseFloat(valorA), parseFloat(valorB));
    //innerHTML es para llevar valor al index html
    document.getElementById("result").innerHTML=" " + sum;
}

function calcular2(){
    let valorA=document.getElementById("valorA").value;
    let valorB=document.getElementById("valorB").value;
    let rest=resta(parseFloat(valorA), parseFloat(valorB));
    //innerHTML es para llevar valor al index html
    document.getElementById("result").innerHTML=" " + rest;
}

function calcular3(){
    let valorA=document.getElementById("valorA").value;
    let valorB=document.getElementById("valorB").value;
    let multi=mult(parseFloat(valorA), parseFloat(valorB));
    //innerHTML es para llevar valor al index html
    document.getElementById("result").innerHTML=" " + multi;
}

function calcular4(){
    let valorA=document.getElementById("valorA").value;
    let valorB=document.getElementById("valorB").value;
    let divi=div(parseFloat(valorA), parseFloat(valorB));
    //innerHTML es para llevar valor al index html
    document.getElementById("result").innerHTML=" " + divi;
}

//Function suma

const suma = (valorA,valorB) => valorA+valorB;
console.log(suma);

//Function resta

const resta = (valorA,valorB) => valorA-valorB;
console.log(resta);

//Function mult

const mult = (valorA,valorB) => valorA*valorB;
console.log(mult);

//Function div

const div = (valorA,valorB) => valorA/valorB;
console.log(div);

