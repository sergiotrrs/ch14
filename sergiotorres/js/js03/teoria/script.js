console.log("Teoría de la sesión JS03");

//Declaración de bloque**********************************
let nombre = "Sebastian";
{
  //Este código está en un bloque.
  let nombre = "Valeria";
  var apellido = "Mojica";
  console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if*****************************************
let edad = 15;

if (edad > 18) {
  console.log("if se ejecuta si la condición verdadera");
  console.log("Es mayor de edad");
} else {
  console.log("Si la condición es falsa, se ejecuta else");
}

//Condicional if, else if, else ***************************
edad = 16;
console.log("Instrucción antes de if");

if (edad > 18) {
  console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
  console.log("Es aborrecente");
} else if (edad > 6) {
  console.log("Es una menor");
} else {
  console.log("es un bebé");
}

console.log("Instrucción después de if");

//Condicional Switch***************************************

let opcionElegida = 0;

//La evaluación es de forma estricta**********************
switch (opcionElegida) {
  case 0: {
    console.log("Accedió a ventas");
    let submenu = 2;
    switch (submenu) {
      case 0:
        console.log("Acá amamos los dinosaurios");
        break;
      default:
        console.log("Cualquier opción, nos quedamos con los dinos");
    }
    break;
  }
  case 1: {
    console.log("Accedió a crédito");
    let submenu = 0;
    switch (submenu) {
      case 0:
        console.log("Págame");
        break;
      default:
        console.log("Elektra te tiene en la mira");
    }
    break;
  }
  case 2:
    console.log("Accedió a cobranza");
    break;
  case 9:
  case 3:
  case 4:
  case 5:
    console.log("Se transfiere con un humano");
    break;
  default:
    console.log("Opción inválida");
    break;
}
console.log("Instrucción después de case");

//Operador ternario***************************************
//Es como un if, pero en chiquito <3
edad = 5;
let esMayor = (edad>=18) ? "Puede votar" : "No puede votar";
console.log("¿Puede votar? " + esMayor);

//Ejercicio de comparación*******************************
let age = "15"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);