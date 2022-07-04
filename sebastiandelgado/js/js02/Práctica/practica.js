console.log("Prueba de inicio");

let a = 0;
let b =0;
function clickBtnUno(){
    const numUno = parseInt(prompt("Dame el primer número: "));
    a=numUno;
    document.getElementById("btnUno").innerHTML = numUno;
}

function clickBtnDos(){
    const numDos =parseInt(prompt("Dame el segundo número"));
    b=numDos;
    document.getElementById("btnDos").innerHTML = numDos;
    document.getElementById("btnResul").innerHTML = ("Selecciona una operación");
}

function clickBtnSuma(){
    const suma = (a, b) =>  a + b ;
    document.getElementById("btnResul").innerHTML = (suma(a, b));
    console.log("la suma es = " + suma(a, b));
}
function clickBtnResta(){
    const resta = (a, b) =>  a - b ;
    document.getElementById("btnResul").innerHTML = resta(a, b);
    console.log("la resta es = " + resta(a, b));
}
function clickBtnMulti(){
    const multi = (a, b) =>  a *b ;
    document.getElementById("btnResul").innerHTML = multi(a, b);
    console.log("la multiplicación es = " + multi(a, b));
}
function clickBtnDiv(){
    const div = (a, b) =>  a / b ;
    document.getElementById("btnResul").innerHTML = div(a, b);
    console.log("la división es = " + div(a, b));
}
function clickBtnClean(){
    document.getElementById("btnUno").innerHTML = ("Inserta el primer número");
    document.getElementById("btnDos").innerHTML = ("Inserta el segundo número");
    document.getElementById("btnResul").innerHTML = ("Resultado");
}