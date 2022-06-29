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

if (nombre) {
    console.log("Le gusta el color");
}
else {
    console.log("No hay nombre");
}

console.log("Var jala todo el apellido: " + apellido);