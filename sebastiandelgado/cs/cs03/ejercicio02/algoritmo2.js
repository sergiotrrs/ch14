// Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor:  ----------------------------------------------------

numeroUno = 0;
numeroDos = 0;
let numeroTres;

numeroUno = prompt("Dame el primer numero entre 1 y 100"); 
numeroDos = prompt("Dame el segundo número entre 1 y 100");
numeroTres = prompt("Dame el tercer número entre 1 y 100");

if(numeroUno > numeroDos && numeroUno > numeroTres){
    alert("El número mayor es el primer número que es igual a = " +numeroUno)
}

if(numeroDos > numeroUno && numeroDos > numeroTres){
    alert("El número mayor es el segundo número que es igual a = " +numeroDos)
}

if(numeroTres > numeroUno && numeroTres > numeroDos){
    alert("El número mayor es el tercer número que es igual a = " +numeroTres)
}