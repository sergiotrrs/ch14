console.log("JS03");

//Declaración de nombre***

let nombre = "Sebastian";

{
    // Esto es un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}

console.log("Nombre es " + nombre);
console.log("Apellido es " + apellido);

// Condicional if
/* Se ejecuta if si es verdad, puede no usarse llave si solo es una linea,
y puede ir o no con un else*/

if (false) {
    console.log("if se ejecuta si es true");
}

console.log("Después de if");

let edad = 20;

if (edad < 18) {
    console.log("Se imprime If si es verdadera");
}
else {
    console.log("Se imprime si es falsa");
}

//Condicional if, else if, else 
edad = 10;
if (edad > 18) {
    console.log("Es mayor de edad");
}
else if (edad > 15) {
    console.log("Adolescente");
}
else if (edad > 6) {
    console.log("Es niño grande");
}
else {
    console.log("Es bebé");
}

// Condicional Switch ****

let opcionElegida = 2;

switch (opcionElegida) { // La evaluación es estricta ===
    case 0:
        console.log("Accedió a ventas");
        break;
    case 1:
        console.log("Accedió a crédito");
        break;
    case 2:
        console.log("Accedió a cobranza");
        break;
    case 9:
        console.log("Se transfiere a un operador");
        break;
    default:
        console.log("Opción inválida");
        break;

}

//Operador ternario
//Como un if chiquito

edad=19 
let Mayor =(edad>=18) ? true : false;
console.log("Puede votar?" + Mayor);

// Ejercicio de comparación ***
let age = "19"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
