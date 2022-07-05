console.log("Teoría de la sesión JS03");


// Declaración de bloque 
let nombre = "Sebastian";
{

    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);

}

// "Nombre" deja de ser una variable cuando se sale del bloque 
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

// Condicional if
console.log("Antes del if");
if (false) {
    console.log("La condición if se ejecuta si es vedadera");
}

console.log("Instrucción después del if");

// Otro condicional 
let edad = 18;
if (edad > 18) {

    console.log("If 2do se ejecuta si verdadero");
    console.log("Es mayor de edad");
}

// Si es una sola instrucción no son necesarias las llaves

else {


    console.log("si es falsa la 2da se ejeciuta else")
}

console.log("Instrucción después del if");

// Condicional if, else if, else *****************
edad = 15;
if (edad > 18) {
    console.log("Es mayor de edad 3er condi");
}

else if (edad > 15) {
    console.log("Eres adolescente 3er cond");
}

else if (edad > 6) {
    console.log("Es un niño 3er cond");
}

else {
    console.log("Es un bebe");
}


// Condicional Switch****************************************************************************

// La evaluación es esricta, o sea ===
let opcionElegida =2;

switch (opcionElegida) {
    case 0: 
        console.log ("Accedió a ventas");

        
        break;

    case 1:
        console.log("Accedió a credito");
        break;

    case 2:
        console.log("Accedió a cobranza");
        break;

        // Para los casos 9,3,4 y 5 se imprime que se transfiere
        // cn un humano
    case 9:
    case 3:
    case 4:
    case 5:
        console.log("Se transfiere con un humano");
        break;

    default:
        console.log("Opción invalida");
        break;

}

/*let Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    console.log('Este animal no lo hará.');
}
 */


// Ejercicio de comparación ***************
let age = "19"
let voteable;
age = Number(age);
if (isNaN(age)) { 
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
// isNaN nos va a dar si el número es un número o no
console.log(voteable);