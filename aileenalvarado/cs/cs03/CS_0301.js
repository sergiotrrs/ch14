                               //Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor 
alert ("Introduce 3 números y te diré cual es el mayor");
let numero1 = prompt ("Introduce un numero, (entre el 1 y el 100) ");
let numero2 = prompt ("Introduce un numero, (entre el 1 y el 100) ");
let numero3 = prompt ("Introduce un numero, (entre el 1 y el 100) "); 

numero1 = parseInt(numero1); 
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);

if(numero1 > numero2 && numero1 > numero3){
    alert("1 El numero mayor es: " + numero1);  
} 
else if (numero2 > numero3){
    alert ("2 El numero mayor es: " + numero2);
} 
else {
    alert ("3 El numero mayor es: " + numero3);
}