//5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos.

let numA = 1;
let numB = 1;
let numC = 2;

if (numA + numB == numC) {
    console.log ("El", numC, "es la suma de", numA, "más", numB);
}
else if(numA + numC == numB) {
    console.log ("El", numB, "es la suma de", numA, "más", numC);
}
else if(numB + numC == numA) {
    console.log ("El", numA, "es la suma de", numB, "más", numC);
}
else {
    console.log ("Ninguno de los números es la suma de los otros dos");
}