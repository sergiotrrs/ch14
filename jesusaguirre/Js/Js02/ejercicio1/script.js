


/*  function suma(){
    let a= parseInt( document.getElementById('a').value);
    let b= parseInt( document.getElementById('b').value);
    document.getElementById('resultado').value=a+b;
    return a+b;
}
 function resta(){
    let a= parseInt( document.getElementById('a').value);
    let b= parseInt( document.getElementById('b').value);
    document.getElementById('resultado').value=a-b;
    return a+b;
} 

 function division(){
    let a= parseInt( document.getElementById('a').value);
    let b= parseInt( document.getElementById('b').value);
    document.getElementById('resultado').value=a/b;
    return a+b;
}  */


/*  function multiplicacion(){
    let a= parseInt( document.getElementById('a').value);
    let b= parseInt( document.getElementById('b').value);
    document.getElementById('resultado').value=a*b;
    return a+b;
}  */

let suma = (num1 = parseFloat(document.getElementById("a").value), num2 = parseFloat(document.getElementById("b").value)) => document.getElementById("resultado").value = num1 + num2;
let resta = (num1 = parseFloat(document.getElementById("a").value), num2 = parseFloat(document.getElementById("b").value)) => document.getElementById("resultado").value = num1 - num2;
let multiplicacion = (num1 = parseFloat(document.getElementById("a").value), num2 = parseFloat(document.getElementById("b").value)) => document.getElementById("resultado").value = num1 * num2;
let division = (num1 = parseFloat(document.getElementById("a").value), num2 = parseFloat(document.getElementById("b").value)) => document.getElementById("resultado").value = num1 / num2;
