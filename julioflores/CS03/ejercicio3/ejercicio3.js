/* Ejercicio 3:
Realizar un algoritmo para adivinar un número entre el 1 
y el 100 en el menor número de pasos posibles
*/
console.log ("elige un número del 1 al 100");
numeroAzar = 40;

if (numeroAzar == 50) {
    console.log ("El numero Elegido es 50");
}
else if (numeroAzar < 50) {
    function ciclo() {
        let i = 0;
    for (; i <= numeroAzar; i++){
    console.log (i);
    }
        return i;
    }
}
else if (numeroAzar > 50) {
    function ciclo2 () {
        let i = 51;
    for (; i <= numeroAzar; i++){
    console.log (i);
    }
           return i;
    }
}
else {
    console.log("No entendí nada");
}