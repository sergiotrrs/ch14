/// 2. Solicitar 3 números (entre el 1 y el 100) y definir el menor de los tres números.

let a = prompt("En las siguientes pestañas escribe 3 números que esten entre 1 y 100. Primer número:");
    a = parseInt(a);

let b = prompt("Segundo número:");
    b = parseInt(b);

let c = prompt("Tercer número:");
    c = parseInt(c);


if ((a < b) && (a < c)) {
    console.log("Tu primer número (" + a + ") es el menor.");
    }
    else if ((b < a) && (b < c)) {
        console.log("Tu segundo número (" + b + ") es el menor.");
        }
    else if ((c < a) && (c < b)){
        console.log("Tu tercer número (" + c + ") es el menor.");
    } else {
        console.log("Hay 2 o más números iguales");
    }