// function leerDatos(){
//     const a=parseInt(document.getElementById("A").value);
//     const b=parseInt(document.getElementById("B").value);
//     return {a: a, b:b};
// }

// function suma(){
//     dato = leerDatos();
//     document.getElementById("C").innerHTML = dato.a +dato.b;
// }
console.log("Teoria de sesión JS");

//Declaracion de bloque***************
let nombre = "Sebastian"
{
    let nombre = "valeria";
    var apellido = "Mojica";
    console.log("Nombre " + nombre)
}

console.log("Nombre fuera del bloque" + nombre)
console.log("apellido fuera del bloque" + nombre)


//Condicional if 
let edad = 15


if (edad > 18) {
    console.log("if se ejecuta si la condicion es verdadera");
    console.log("es mayor de edade");
}
else {
    console.log("si la condicion es falsa, se ejecuta else")
}

//Condicional if, else if, else *********
edad = 2;
console.log("Instruccion antes de if");
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
}
else if (edad > 15) {
    console.log("Es adolecente");
}
else if (edad > 6) {
    console.log("Es un menor");
}
else {
    console.log("Es un bebe");
}
console.log("Instruccion despues de if");

//Condicional Switch*************

let opcionElegida = 0;

switch (opcionElegida) {//La evaluación es de forma estricta es
    //decir del mismo tipo de dato  y valor 
    case 0: {
        console.log("Accedio a ventas");
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Aca  amamos los dinos");
                break;
            default:
                console.log("Cualquier opcion, nos quedamos con los dinso");
        }
    }

        break;
    case 1: {
        console.log("Accedio a crédito");
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Pagame");
                break;
            default:
                console.log("Electra");
        }
        break;
    }

    case 2:
        console.log("Accedio a cobranza");
        break;
    case 9:
    case 3:
    case 4:
    case 5:
        console.log("Se tranfierre con humano");
        break;
    default:
        console.log("Opcion Invalida");
        break;
}
console.log("instruccion despues de case");

//oPERADOR TERNARIO
edad= 19
let esMayor = (edad >= 18)? "Puede votar" : "No puede votar";
console.log("Puede votar? " + esMayor);


//Ejercicio de comparacion
let age = "19"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);

//Codigo de tonatiuh gomez madrigal 
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

// let Animal = 'Jirafa';
// switch (Animal) {
//     case 'Vaca':
//     case 'Jirafa':
//     case 'Perro':
//     case 'Cerdo':
//         console.log('Este animal subirá al Arca de Noé.');
//         break;
//     case 'Dinosaurio':
//     default:
//         console.log('Este animal no lo hará.');
// }


//Codigo de sergio
// let opcionElegida = 0;

// //La evaluación es de forma estricta
// switch (opcionElegida) {
//   case 0: {
//     console.log("Accedió a ventas");
//     let submenu = 2;
//     switch (submenu) {
//       case 0:
//         console.log("Acá amamos los dinosaurios");
//         break;
//       default:
//         console.log("Cualquier opción, nos quedamos con los dinos");
//     }
//     break;
//   }
//   case 1: {
//     console.log("Accedió a crédito");
//     let submenu = 0;
//     switch (submenu) {
//       case 0:
//         console.log("Págame");
//         break;
//       default:
//         console.log("Elektra te tiene en la mira");
//     }
//     break;
//   }
//   case 2:
//     console.log("Accedió a cobranza");
//     break;
//   case 9:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Se transfiere con un humano");
//     break;
//   default:
//     console.log("Opción inválida");
//     break;
// }
// console.log("Instrucción después de case");




