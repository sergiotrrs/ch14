 //Elabora un algoritmo para leer un número y determinar si es par o impar

alert("Introduce un numero y te dire si es par o impar"); 

let numero = prompt("Introduce un numero"); 

numero = parseInt(numero);


if(numero % 2 == 0){
    alert("Tu numero es par"); 
}  
else {
    alert("Tu numero es impar"); 
}
    