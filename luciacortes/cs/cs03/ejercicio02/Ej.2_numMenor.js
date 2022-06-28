
let numA = prompt("Escribe un número de 1 a 100");
let numB = prompt("Escribe otro número de 1 a 100");
let numC = prompt("Escribe otro número de 1 a 100");

if (numA > numB && numB > numC) {
    alert("El número más pequeño es " +numC);
}
else if (numA > numB && numB < numC) {
    alert("El número más pequeño es " +numB);
}
else {
    alert("El número más pequeño es " +numA);
}
