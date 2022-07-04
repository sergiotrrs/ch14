console.log("Teoría de la clase JS03");

//Declaración de bloque****
let nombre = "Sebastian";
{
  //Este código es un bloque.
  let nombre = "Valeria";
  var apellido = "Mojica";
  console.log("Nombre: " + nombre);
}
console.log("Nombre fuera de bloque: " + nombre);
console.log("Apellido fuera de bloque: " + nombre);

//Condicional if****************************************
let edad = 15;
console.log("Instrucción antes del if");
if (edad > 18) {
  console.log("if se ejecuta si la condición es verdadera");
  console.log("Es mayor de edad");
} else {
  console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Instrucción después del if");

//Condicinal if, else if, else ***********************************
edad = 3;
if (edad > 18) {
  console.log("Es mayor de edad");
} else if (edad > 15) {
  console.log("Es aborrecente");
} else if (edad > 6) {
  console.log("Es un niñito");
} else {
  console.log("Es un bebé");
}

//Condicional Switch******************************
// //Ejemplo
// switch(expression){
//     case x:
//         /*bloque de código*/
//         break;
//     case y:
//         /*bloque de código*/
//         break;
//     default:
//          /*Si ninguno de los casos anteriores se cumple se pone default*/
// }

let opcionElegida = 1;

switch (opcionElegida){//La evaluación es de forma estricta
    case 0:
        console.log("Accedió a ventas");
        break;
    case 1:
        console.log("Accedió a crédito");
        let submenu = 2
        switch (submenu){
        case 0:
            console.log("Acá amanos los dinosaurios");
            break;
        default:
            console.log("Cualquier opción, nos quedamos con los dinos");
    }
        break;
    case 2:
        console.log("Accedió a cobranza");
        break;
    case 3:
    case 4:
    case 5:  
    case 6:
        console.log("Se transfiere con un humano");
        break;
    default:
        console.log("Opción inválida");
        break;
}
console.log("Instrucción después del case");
//Otro ejemplo de switch
// let Animal = 'Jirafa';
// switch (Animal) {
//   case 'Vaca':
//   case 'Jirafa':
//   case 'Perro':
//   case 'Cerdo':
//     console.log('Este animal subirá al Arca de Noé.');
//     break;
//   case 'Dinosaurio':
//   default:
//     console.log('Este animal no lo hará.');
// }
//Caso con if, se observa que es mucho más engorroso que el switch, se debe distinguir cuándo es mejor usar if o switch.
// let opciomElegida=4;

// if (opciomElegida===0){
//     console.log("Accedio a ventas");
// }else if(opciomElegida===1){
//     console.log("Accedio a crédito");
// }else if(opciomElegida===2){
//     console.log("Accedió a cobranzas");
// }else if(opciomElegida===9|| opciomElegida===4||opciomElegida===5||opciomElegida===6){
//     console.log("Se transfiere con un humano");
// }else{
//     console.log("Opcion inválida");
// }

//Operador condicional ternario*** es como un if pero en chiquito*******
edad = 19
let esMayor = (edad >= 18) ? "Puede votar": "No puede votar";
console.log("¿Puede votar? " + esMayor);

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