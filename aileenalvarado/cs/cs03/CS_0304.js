 //Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

alert("Introduce un numero (entre el 100 y el 200) y te dirè si es multiplo de 3 ");

let numero = prompt("Introduce un numero"); 

numero = parseInt(numero); 

if(numero % 3 == 0){
    alert("Tu numero es multiplo de 3.");
} 
else {
    alert("Tu numero no es multiplo de 3.");
}
