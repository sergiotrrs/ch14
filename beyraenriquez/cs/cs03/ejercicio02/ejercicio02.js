// 2. Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números.

let numeroA = 5;
let numeroB = 25;
let numeroC = 93;

if (numeroA < numeroB && numeroA < numeroC) {
    console.log ("El número menor es: ", numeroA);
}
else if (numeroB < numeroA && numeroB < numeroC) {
    console.log ("El número menor es: ", numeroB);
}
else if (numeroC < numeroA && numeroC < numeroB) {
    console.log ("El número menor es: ", numeroC);
}
else {
    console.log ("Error al definir el valor");
}