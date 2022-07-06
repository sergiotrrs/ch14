let adivinable = prompt("dame un numero del 1 al 100");

let max = 100;
let min = 1;
let rango3 = Math.round((max + min) / 2);
for (let x = 1; x < 100; x++) {
    if (adivinable == max) {
        alert("Tu numero es " + rango3 + " y se encontro en intentos " + x);
        break;
    } else if (adivinable == min) {
        alert("Tu numero es " + rango3 + " y se encontro en intentos " + x);
        break;
    } else if (adivinable == rango3) {
        alert("Tu numero es " + rango3 + " y se encontro en intentos " + x);
        break;
    } else if (adivinable > rango3) {
        min = rango3;
    } else {
        max = rango3;
    }
    rango3 = Math.round((max + min) / 2);

}