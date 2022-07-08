/* 1. Solicitar 3 números diferentes (entre el 1 y el 100) y definir cual es el mayor*/
let numeroA = 5;
let numeroB = 25;
let numeroC = 93;

if (numeroA > numeroB && numeroA > numeroC) {
    console.log ("El número mayor es: ", numeroA);
}
else if (numeroB > numeroA && numeroB > numeroC) {
    console.log ("El número mayor es: ", numeroB);
}
else if (numeroC > numeroA && numeroC > numeroB) {
    console.log ("El número mayor es: ", numeroC);
}
else {
    console.log ("Error al definir el valor");
}