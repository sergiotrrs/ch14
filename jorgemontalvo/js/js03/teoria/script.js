console.log("Teoria de la sesion JS03");

//declaracion de bloque
let nombre = "Sebastioan";
{
    //Este bloque esta en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica"
    console.log("Nombre: " + nombre);
}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Nombre fuera del bloque: " + apellido);

//Condicional if
let edad = 20;
console.log("Instruccion antes de if");
if (edad > 18) {
    console.log("La condicion if se ejecuta si la condicion es verdadera");
    console.log("Es mayor de edad")
}
else {
    console.log("La condicion if es falsa se ejecuta el else");

}
console.log("Instruccion desues de if");

//Condicional if, else if, else ********
edad = 3
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("Es aborrecente");
} else if (edad > 6) {
    console.log("Es un menor");
}
else console.log("Es un bebe")

//Condicional switch

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



// EJEMPLO DE SWITCH CON STRING
let Animal = 'Jirafa';
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
//ESTO ES LO MISMO QUE EL SWITCH PERO DE LA FORMA DE IF/IF ELSE
let opciomElegida = 4;

if (opciomElegida === 0) {
    console.log("Accedio a ventas");
} else if (opciomElegida === 1) {
    console.log("Accedio a crédito");
} else if (opciomElegida === 2) {
    console.log("Accedió a cobranzas");
} else if (opciomElegida === 9 || opciomElegida === 4 || opciomElegida === 5 || opciomElegida === 6) {
    console.log("Se transfiere con un humano");
} else {
    console.log("Opcion inválida");
}

//CONDICIONAL TERNARIO ************************
//Es como un if pero en chiquitos

edad = 20
let esMayor= (edad>=18) ? true:false;
console.log("¿Puede votar?" +esMayor)

//Ejercicio de compracion************
let age = "19Montse";
let voteable;

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable)
