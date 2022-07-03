console.log("Teoría de la sesión JS03");

//Declaración de bloque ************************************
let nombre = "Sebastian";
{
    //Este código está en un bloque.
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if *******************************************
let edad = 15;
console.log("Instrucción antes de if");

if (edad>18) //Pueden ser una o más instrucciones 
//Si es más de una se utilizan llaves
{
    console.log("if se ejecutará si la condición es verdera");
    console.log("Es mayor de edad");
} else {
    console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Instrucción antes de if");

//Condición if, else if, else ********************************
edad = 16;
if (edad>18){
    console.log("Es mayor de edad, adulto");
} else if (edad>15) {
    console.log("Es aborrecente");
} else if (edad>6) {
    console.log("Es un menor");
} else {
    console.log("Es un bebé");
}

console.log("Instrucción despues de if");

//Condición Switch ********************************************
let opcionElegida = 0;

//La evaluación es de forma estricta
switch (opcionElegida){ 
    case 0: {
        console.log("Se accedió a ventas");
        let submenu = 2;
        switch (submenu) {
            case 0:
                console.log("Acá amamos los dinosaurios");
                break;
            default:
            console.log("Cualquier opción nos quedamos con los dinos");
        }
        break;
    }
    case 1: {
        console.log("Accedió a crédito");
        let submenu = 0;
        switch (submenu) {
            case 0:
                console.log("Pagamé");
                break;
            default:
            console.log("Elecktra te tiene en la mira");
        }
        break;
    }
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
console.log("Instrucción después de case");

//Mismo ejemplo con if
let opciomElegida=4;

if (opciomElegida===0) {
    console.log("Accedio a ventas");
} else if (opciomElegida===1) {
    console.log("Accedio a crédito");
} else if (opciomElegida===2) {
    console.log("Accedió a cobranzas");
} else if (opciomElegida===9|| opciomElegida===4||opciomElegida===5||opciomElegida===6) {
    console.log("Se transfiere con un humano");
} else {
    console.log("Opcion inválida");
}

//Condicional ternario *************************************************
//Es como un if pero en chiquito 
edad = 19
let esMayor = (edad>=18) ? "Si" : "No"; 
//Para más intrucciones se pone un bloque {}
console.log("¿Puede votar? " + esMayor);

//Ejercicio de comparación *********************************************
let age = "15"
let voteable; //Es una variable
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);