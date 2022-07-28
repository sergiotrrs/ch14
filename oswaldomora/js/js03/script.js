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

//Condicional ternario
//Como un if, pero chikito

edad = 19
let esMayor = (edad>=18) ? true:false;
console.log("¿Puede votar "+ esMayor);

//Ejercicio de comparación
let age = "19"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);