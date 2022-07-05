console.log("Teoría de la sesión JS03");

//Declaración de bloque*****************************
let nombre = "Sebastian";
{
    //Este código está en un bloqueo
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Nombre fuera del bloque: " + apellido);

//Condicional if
let edad = 3;
console.log("Instrucción antes de if");
if (edad > 18) {
    console.log("La condición if se ejecuta si es verdadera");
    console.log("Es mayor de edad");
}
else {
    console.log("Si la condición es falsa, se ejcuta else");
}
console.log("Instrucción después del if");

//  Condicional if, else, else**************************
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("Es aborrecente");
} else if (edad > 6) {
    console.log("Es un menor");
} else {
    console.log("Es un bebé");
}
console.log("Instrucción después de if");

//Condicional Switch
let opcionElegida = 1;
switch (opcionElegida) {
    case 0:
        console.log("Accedió a ventas");
        let subMenu = 2;
        switch (subMenu) {
            case 0:
                console.log("Aca amamamos los dinosaurios");
                break;
            default:
                console.log("Cualquier opciones, nos quedamos con los dinos");
                break;
        }
        break;
    case 1: {
        console.log("Accedió a ventas");
        let subMenu = 2;
        switch (subMenu) {
            case 0:
                console.log("Pagame");
                break;
            default:
                console.log("Elektra te tiene en la mira");
                break;
        }
    }
        break;
        console.log("Accedió a crédito");
        break;
    case 2:
        console.log("Accedió a finanzas");
        break;
    case 9:
        console.log("Se transfiere a un humano");
        break;
    default:
        console.log("Opción inválida");
        break;
}
console.log("Instrucción después de case");

//Operador ternario***************************
//Es como un if, pero en chiquito <3
edad = 15;
let esMayor = (edad>=18) ? "Puede votar" : "No puede votar";
console.log("¿Puede votar? " + esMayor);

//Ejercicio de comparación**********************
let age = "19"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);