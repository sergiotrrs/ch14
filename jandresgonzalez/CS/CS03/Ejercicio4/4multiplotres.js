/*Ejercicio número 4, que busca que el número ingresado sea
o no sea múltiplo de 3*/

let entero = window.prompt("Ingrese un número entero entre 100 y 200");
//Se convierte a enter el número
entero = parseInt(entero);
//Este bloque de código se asegura de que tengamos un número entre 100 y 200
while (true) {
    if (entero >= 100 && entero <= 200) {
        break;
    }
    else {
        entero = window.prompt("El número que ingresó no está entre 100 y 200. Ingrese un número entero entre 100 y 200");
    }
}

//En esta parte del código se revisa el residuo de la divisón
//Si el residuo es cero, es múltiplo de 3, de lo contrario, no lo es
if (entero%3 == 0) {
    window.alert(`El número ${entero} es un múltiplo de 3`);
}
else {
    window.alert(`El número ${entero} no es un múltiplo de 3`);
}