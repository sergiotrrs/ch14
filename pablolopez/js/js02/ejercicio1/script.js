let oper1=0;
let oper2=0;
let sm=0;

/*
    //suma
    //a = document.getElementById("op1").value;
    //console.log(a);
    //b = document.getElementById("op2").value;
    const suma = (a,b) => a + b;
    console.log(suma);
    //document.getElementById("res").innerHTML = suma;


function botonsuma(){
    suma(document.getElementById(parseInt("op1")).value,document.getElementById(ParseInt("op2")).value);
    document.getElementById("res").innerHTML = suma;
};
    
*/

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;

function botonSuma(){
    oper1 = document.getElementById("op1").value;
    oper2 = document.getElementById("op2").value;
    oper1 = parseInt(oper1);
    oper2 = parseInt(oper2);
    //console.log(oper1);
    //console.log(oper2);
    console.log(oper1+"+"+oper2+"="+suma(oper1,oper2));
    document.getElementById("res").innerHTML = suma(oper1,oper2);

}

function botonResta(){
    oper1 = document.getElementById("op1").value;
    oper2 = document.getElementById("op2").value;
    oper1 = parseInt(oper1);
    oper2 = parseInt(oper2);
    //console.log(oper1);
    //console.log(oper2);
    console.log(oper1+"-"+oper2+"="+resta(oper1,oper2));
    document.getElementById("res").innerHTML = resta(oper1,oper2);

}

function botonMultiplicacion(){
    oper1 = document.getElementById("op1").value;
    oper2 = document.getElementById("op2").value;
    oper1 = parseInt(oper1);
    oper2 = parseInt(oper2);
    //console.log(oper1);
    //console.log(oper2);
    console.log(oper1+"*"+oper2+"="+mult(oper1,oper2));
    document.getElementById("res").innerHTML = mult(oper1,oper2);

}

function botonDivision(){
    oper1 = document.getElementById("op1").value;
    oper2 = document.getElementById("op2").value;
    oper1 = parseInt(oper1);
    oper2 = parseInt(oper2);
    //console.log(oper1);
    //console.log(oper2);
    console.log(oper1+"/"+oper2+"="+div(oper1,oper2));
    document.getElementById("res").innerHTML = div(oper1,oper2);

}




//console.log(suma(2,3)+" "+resta(2,3)+" "+mult(2,3)+" "+div(2,3));