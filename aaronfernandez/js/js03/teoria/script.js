console.log("Teoría de la sesion js03")

let nombre = "Sebastian"

{
    let nombre = "Valeria"
    var apellido = "Mojica"
    console.log("Nombre " + nombre)
}

console.log("Nombre fuera del bloque: " + nombre)
console.log("Apellido fuera del bloque: " + apellido)

let edad = 20;
console.log("Instrucción antes del if")
if (edad > 18) {
    console.log("if se ejecuta si la condición es verdadera")
    

console.log("Instrucción después del if")
}

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
