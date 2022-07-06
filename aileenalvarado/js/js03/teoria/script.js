console.log("Teoria de la sesion JS03");

//Declaracioon de bloqye 

{
    //este codigo esta en un bloque. 
    let nombre = "Mojca";
    var apellid = "Mojica";
    console.log("Nombre: " + nombre);
}

//Esta linea no se ejecuta debido a la variable solo vive dentro del bloque
//console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque");


//Condicional if
let edad = 15;
console.log("Instruccion antes de if")

//Si solo hay una condicion a evaluar, se pueden omitir las llaves en un if
if (edad > 18) {
    console.log(" if se ejecuta si la condicion es verdadera")
    console.log("La edad es mayorde edad");
} else {
    console.log("Si ls condicion es falsa se ejecuta else");
}
console.log("Instruccion despues de if");

//Condicional if, else if, else 
edad = 18;
if (edad > 18) {
    console.log("Es mayor de edad, adulto")
} else if (edad > 15) {
    console.log("Es adolescente")
} else if (edad > 6) {
    console.log("Es un menor")
} else if (edad > 6) {
    console.log("Es un bebe")
}


//Condicional switch

let opcionElegida = 1;
switch (opcionElegida) { //La evaluacion es de forma estricta
    case 0:
        console.log("Accedio a ventas");
        break;
    case 1:
        console.log("Accedio a credito");
        break;
    case 2:
        console.log("Accedio a cobranza");
        break;
    case 9:
        console.log("Se transfiere con un humano");
        break;
    default:
        console.log("Opcion invalida");
        break;
} 
console.log("Intruccion despues del case") 

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

/*let opcionElegida = 0;

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

//Operador ternario 
//Evalua dos condiciones en la misma linea 
edad = 5
let esMayor = (edad >=18) ? true : false; 
console.log("Puede votar? " + esMayor); 

//Ejercico de comparacion 
let age = "19";
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);

