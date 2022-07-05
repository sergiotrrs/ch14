

/*function limpiar() {
    document.getElementById('myform').reset();
}
<button onclick="limpiar();">Nueva operacion</button>*/

function sumar() {
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    alert (x+y);
    document.getElementById("el resultado").innerHTML = x + y;
    
}
function restar() {
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    alert (x-y);
    document.getElementById("el resultado").innerHTML = x - y;
}
function multiplicar() {
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    alert (x*y);
    document.getElementById("el resultado").innerHTML = x * y;
}
function dividir() {
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    alert (x/y);
    document.getElementById("el resultado").innerHTML = x / y;
}






/*const suma = (numA, numB) => numA + numB;
console.log(suma);

const resta = (numA, numB) => numA - numB;
console.log(resta);

const multiplica = (numA, numB) => numA * numB;
console.log(multiplica);

const divide = (numA, numB) => numA / numB;
console.log(divide);*/
