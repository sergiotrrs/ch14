// Solicitar 2 números (entre el 1 y el 100) y definir cuál es el mayor:  ----------------------------------------------------

let numeroUno;
let numeroDos;
numeroUno = prompt("Dame el primer numero entre 1 y 100"); 
numeroDos = prompt("dame el segundo número entre 1 y 100");

if(numeroUno > numeroDos){
    alert("El número mayor es el número Uno que es igual a = " +numeroUno);
}
else {
    alert("El número mayor es el número Dos que es igual a = " + numeroDos);
}