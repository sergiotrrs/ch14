console.log("hola");

//Declaración de bloque

{
  let nombre = "Gerardo";
  console.log(`Nombre: ${nombre}`);
}

//Condicional

let edad = 19;
console.log("Instrucción antes del if");

if (edad > 18) {
  console.log("if se ejecuta si la condición es verdadera");
  console.log("Es mayor de edad");
} else {
  console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Instrucción despues del if");

//Condicional if, else if, else......

edad = 20;
if (edad > 18) {
  console.log("Es mayor de edad");
} else if (edad > 15) {
  console.log("Es un adolescente");
} else if (edad > 6) {
  console.log("Es un niño");
} else {
  console.log("es un bebé");
}

//cae

let opcionElegida = 0;

switch (opcionElegida) {
  case 0:
    console.log("Accedio a ventas");
    let submenu = 2;
    switch (submenu){
        case 0:
        console.log("Acá amamos los dinosaurios");
        break;
        default:
            console.log("Nos quedamos con los dinos")
    }
    break;
  case 1:
    console.log("Accedió a crédito");
    break;
  case 2:
    console.log("Accedió a cobranza");
    break;
  case 9:
    console.log("Se transfiere a un humano");
    break;
  default:
    console.log("Opción invalida");
    break;
}

console.log("Instruccipon despues de case");


//Operador ternanrio
edad = 15;
let esMayor = (edad>= 18) ? "Puede votar y tomar alcohol" :"A su casa niño";
console.log(`Puede? ${esMayor}`)

//Ejercicio de comparación 
let age = "20"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable)

