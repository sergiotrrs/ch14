console.log("teoria de la sesion JS03");

// declaracion de bloque
{
    let nombre= "valeria";
    var apellido="mojica";
    console.log("nombre"+ nombre);
}
//console.log("nombre"+ nombre);
console.log("nombre"+ apellido);
//condicinal if
let edad = 20;
console.log("instruccion antes de if")
if(edad >18)console.log("if se ejecutara si la condicion es verdadera");
if (true){
    console.log("if se ejecutara si la condicion es verdadera");
}
console.log("instruccion despues de if")

//condicional if, else if, else
edad= 18;
if(edad>18){
    console.log("es mayor de edad,adulto");
}
else if(edad>15){
    console.log("es aborrecente");
}
else if(edad>6){
    console.log("es un menor");
}
else{
    console.log("es un bebe");
}

//condicional switch****************88
 let opcion = 2;
 switch(opcion){ //la evaluacion es estricta
    case 0:
       console.log("accedio a ventas");
       break;
    case 1:
       console.log("accedio a credito");
       break;
    case 2:
       console.log("accedio a cobranza");
       break;
    case 9:
    case 3:
    case 4:
       console.log("se transfiere cun humano");
       break;
    default:
        console.log("opcion invalida");
        break;
 }
 /* let opcionElegida = 0;

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
 */
//condicional ternario
// es como if pero en chiquito
edad = 19;
let mayoEdad = (edad>=18) ? true :false;
console.log("puede votar?" + mayoEdad);
//ejercicio de comparacion
let age = "19"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);
