let numX = parseInt(prompt("Escribe un número del 1 al 100"));
let numY = parseInt(prompt("Escribe otro número del 1 al 100"));
let numZ = parseInt(prompt("Escribe otro número del 1 al 100"));

if ((numX + numY) == numZ) {
 console.log ("Tu número " +numZ+ " es la suma de " +numX+ " y " +numY);
}
 else if ((numY + numZ) == numX) {
 console.log ("Tu número " +numX+ " es la suma de " +numY+ " y " +numZ);
 }
 else if ((numZ + numX ) == numY) {
 console.log ("Tu número " +numY+ " es la suma de " +numZ+ " y" +numX); 
 }
else {
console.log("De esos números ninguno es la suma de los otros dos")
}