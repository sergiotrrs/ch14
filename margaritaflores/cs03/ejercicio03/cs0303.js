//Adivina el número 
let min = 1;
let max = 100;
let aleatorio = Math.floor (Math.random() * max - min + 1 ) + min;
let intentos = 0;
let nombre = prompt ("Bievenidos al juego adivina el número, ¿Cuál es tú nombre?");
let numero;

for(intentos; intentos < 10; intentos++){
    numero = parseInt (prompt (nombre + ", ingresa un número entre el " + min + " y el " + max )); 

    if(numero >= min && numero <= max ){
        if(numero < aleatorio){
            alert ("El numero que ingreso es más bajo ");
          }  else if (numero > aleatorio){
                alert ("El numero que ingreso es más alto ");      
        } else if (numero == aleatorio) {
            break;
        }
    } else{
        alert ("Debe ingresar un numero entre " +min+ " y " +max);
    }
}
if ( numero == aleatorio ){
    alert ( "Felicidades adivinaste el número en " + intentos + " intentos ")
} else {
    alert ("Agotaste el numero de intentos, intentalo de nuevo ");
}
