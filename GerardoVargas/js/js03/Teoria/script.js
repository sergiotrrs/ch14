
console.log("Teoria de la sesión JS03");

//DECLARACIÓN DE BLOQUE*****************
let nombre = "Sebastian";


{
    //Este código está en un bloque.
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if
let edad = 15;
console.log("Instrucción antes if");
if (edad > 18) {
    console.log("if se ejecuta si la condición es verdadera");
    console.log("Instrucción despúes de if");
} else {
    console.log("Sila condición es falsa, se ejecuta else");
}
console.log("Instrución despúes de if");

//Condicional if, else if, else *******************************
edad = 15;
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("Es aborrecente");
} else if (edad > 6) {
    console.log("Es una menor");
} else {
    console.log("Es un bebé");
}
console.log("Instrucción despúes de if");


//Condicional Switch*************************************** Es más eficiente son menos lineas de código (hay que ver para que será usado)
// Se ocupa para menús y submenus

let opcionElegida = 0;

//La evaluación es de forma estricta
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


// Hacer lo mismo de arriba pero con if - else
/*
let opcionElegida = 5;

if (opcionElegida === 0) {
    console.log("Accedio a ventas");
} else if (opcionElegida === 1) {
    console.log("Accedio a crédito");
} else if (opcionElegida === 2) {
    console.log("Accedió a cobranzas");
} else if (opcionElegida === 9 || opcionElegida === 4 || opcionElegida === 5 || opcionElegida === 6) {
    console.log("Se transfiere con un humano");
} else {
    console.log("Opcion inválida");
}
*/
let age = "15"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);