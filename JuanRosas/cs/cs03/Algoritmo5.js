let a = 3;
let b = 6;
let c = 3;

suma = a + b;
if (c === suma) {
    console.log("A y B es la suma de C:",suma);
} else {
    suma = b + c;
    if (a === suma) {
        console.log("B y C es la suma de A:", suma);
    } else {
        suma = a + c;
        if (b === suma) {
            console.log("A y C son la suma de B", suma);
        } else {
            console.log("Ninguno es la suma de otros.");
        }
    }
}