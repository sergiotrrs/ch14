function capturar(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opSuma=suma(parseFloat(valor1),parseFloat(valor2));
    document.getElementById("Resultado").innerHTML= " " + opSuma;
}
function capturar2(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opResta=resta(parseFloat(valor1),parseFloat(valor2));
    document.getElementById("Resultado").innerHTML= " " + opResta;
}
function capturar3(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opMulti=mul(parseFloat(valor1),parseFloat(valor2));
    document.getElementById("Resultado").innerHTML= " " + opMulti;
}
function capturar4(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opDivide=div(parseFloat(valor1),parseFloat(valor2));
    document.getElementById("Resultado").innerHTML= " " + opDivide;
}
/**
 * 
 * @param {number} numero1 primer diminuendo
 * @param {number} numero2 segundo diminuendo
 * @returns suma 
 */

const suma = (numero1,numero2) => numero1+numero2 ;
//console.log ("La suma es " +suma());

const resta = (numero1,numero2) => numero1-numero2 ;
//console.log ("La resta es " +suma());

const mul = (numero1,numero2) => numero1*numero2 ;
//console.log ("La multiplicación es " +mul());

const div = (numero1,numero2) => numero1/numero2;
//console.log ("La división es " +div());

/*
function primerNumero(){
    document.getElementById("numero1").innerHTML = prompt("Ingresa un número");
}
function segundoNumero(){
    document.getElementById("numero2").innerHTML = prompt("Ingresa un número");
}

function resultado(primerNumero, segundoNumero){
    return 
}
*/