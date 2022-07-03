console.log("Teoria de la sesión JS03");

//Declaración de bloques************
let nombre = "Sebastian"

{
    //Este codigo está en un bloque.
    //solo funciona lo que esta dentro del bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);

}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if
console.log("Intruccion antes del if");
//Otra forma de realizar el if
if (true) console.log("La condición if se ejecutara si la condición es verdades");

let edad = 15;
if (edad > 18) {
    console.log("if se ejecutara si la condición es verdades");
    console.log("Es mayor de edad");
} else {
    console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Intruccion después del if");

//Condicional if, else, if, else if
edad = 20;
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("Es un aborrecente");
} else if (edad > 6) {
    console.log("Es un menor");
} else {
    console.log("es un bebe");
}

//conditional Switch*********************

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

//Condicional Ternario******************************************
edad=19;

let esMayor =(edad>=18)? true:false;
console.log("¿Puede votar? "+ esMayor);

esMayor =(edad>=18)? "Puede votar":"No puede votar";
console.log("¿Puede votar? "+ esMayor);


//Ejercicio de comparación*********

//let age="19Monse"; este es untipo de variable NaN
//este programa te dice si es un numero o no tomarlo mucho en cuenta
let age = "19"
let voteable;
age = Number(age);
if (isNaN(age)) {//isNaN pregunta si es un NaN
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);
