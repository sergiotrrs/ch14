/*Ejercicio 1 para revisar qué número es el menor de tres números
en un rango de 0 a 100*/

let primerNumero = window.prompt("Introduzca un primer número entero entre 1 y 100");
let segundoNumero = window.prompt("Introduzca un segundo número entero entre 1 y 100");
let tercerNumero = window.prompt("Introduzca un tercer número entero entre 1 y 100");

//Este bloque manda todos los números a enteros, en caso de que usaran decimales
primerNumero = parseInt(primerNumero);
segundoNumero = parseInt(segundoNumero);
tercerNumero = parseInt(tercerNumero);

//Este bloque debería checar que los números no pasen de donde deben
while (true) {
    if (primerNumero >= 0 && primerNumero <= 100 && segundoNumero >= 0 && segundoNumero <= 100 && tercerNumero >= 0 && tercerNumero <= 100) {
        break;
    }
    else {
        if (primerNumero >= 100 || primerNumero <= 0) {
            primerNumero = window.prompt("El número no está entre uno y 100. Introduzca un primer número entero entre 1 y 100");
        };

        if (segundoNumero >= 100 || segundoNumero <= 0) {
        segundoNumero = window.prompt("El número no está entre uno y 100. Introduzca un segundo número entero entre 1 y 100");
        };
        if (tercerNumero >= 100 || tercerNumero <= 0) {
            tercerNumero = window.prompt("El número no está entre uno y 100. Introduzca un tercer número entero entre 1 y 100");
        };
    }
};

//Este bloque va a revisar que el primer número sea el menor
if (primerNumero < segundoNumero) {
    if (primerNumero < tercerNumero) {
        window.alert(`El primer numero, el ${primerNumero}, es el número menor`);
    }
}
//Este bloque revisa que el segundo número sea menor
if (segundoNumero < primerNumero) {
    if (segundoNumero < tercerNumero) {
        window.alert(`El segundo numero, el ${segundoNumero}, es el número menor`);
    }
}
//Este bloque termina el código, al declarar que el tercer número es el menor
if (tercerNumero < primerNumero) {
    if (tercerNumero < segundoNumero) {
        window.alert(`El tercer numero, el ${tercerNumero}, es el número menor`);
    }
}