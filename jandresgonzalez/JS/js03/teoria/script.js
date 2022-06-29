/**
 * 
 * Ejercicios de teoría de JS03.
 * Realizados en 29/06/22
 * atGenerationMexico
 * 
 **/
console.log("TeoríaCS03");

let nombre = "Santis";

//Block declaration
{
    // Código en un bloque
    //Este flujo de trabajo tiene su propio variable scope
    let nombre="ValeriaMojica"
    //variable scope de var es más grande, sin importan declaración de bloque
    var apellido="Gayosso";

    console.log(nombre);
}
console.log("Var jala todo el apellido: " + apellido);

//If se realiza cuando el statement en parámetro es verdadera
if (nombre) {
    console.log("Le gusta el color");
}
else {
    console.log("No hay nombre");
}

//If en una línea:
if (true) console.log("Se ejecuta esta línea");

let edad = 3;
if (edad > 18) console.log("veamos edad");
//aquí no se ejecutaría lo del if
//console.log("es mayor de edad");

//if en bloque
if (edad > 18) {
    console.log("Esto se ejecutó en bloque");
}
else {
    console.log("Chales, no es mayor de edad");
}

//If, else if, else

if (edad >= 18) {
    console.log("Mayor de edad");
}
else if (edad >= 15 && edad < 18) {
    console.log("Adolescente");
}
else if (edad < 15 && edad > 6) {
    console.log("Es un niñ__");
}
else {
    console.log("Es un_ baby");
}