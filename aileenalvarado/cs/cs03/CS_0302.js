  //Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

alert("Introduce 3 numeros (entre el 1 y el 100) y te dirè cual es el menor."); 

let number1 = prompt("Introduce un numero, (entre el 1 y el 100) ");
let number2 = prompt("Introduce un numero, (entre el 1 y el 100) ");
let number3 = prompt("Introduce un numero, (entre el 1 y el 100) "); 

number1 = parseInt(number1); 
number2 = parseInt(number2); 
number3 = parseInt(number3); 

if(number1 < number2 && number1 < number3){
    alert("El numero menor es: " + number1); 
} 
else if(number2 < number3){
    alert("El numero menor es: " + number2);
} 
else {
    alert("El numero menor es: " + number3);
}