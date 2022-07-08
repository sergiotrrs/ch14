/*PROGRAMA PARA LEER 3 NÚMEROS Y DETERMINAR SI UNO ES LA SUMA DE LOS OTROs 2*/
alert("A continuación escriba 3 números para determinar si uno es la suma de los otros 2.")
let x = parseInt(prompt("Escriba un número X:"));
let y = parseInt(prompt("Escriba un número Y:"));
let z = parseInt(prompt("Escriba un número Z:"));

if (x + y - z == 0){
    console.log("El número " + z + " es la suma de " + x + " y " + y + ".");
}
else if (x + z - y == 0){
    console.log("El número " + y + " es la suma de " + x + " y " + z + ".");
}
else if (y + z - x == 0){
    console.log("El número " + x + " es la suma de " + y + " y " + z + ".");
}
else{
    console.log("Ni uno de los números es la suma de los otros 2.");
}