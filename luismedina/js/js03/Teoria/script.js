console.log("teoria de la sesion JS03");

//Declaracion de bloque

let nombre = "Sebastian";
{
    //Este codigo esta en un bloque

    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}

console.log("Nombre fuera del bloque " + nombre);
console.log("Apellido fuera del bloque " + apellido);


//condicional if
let edad = 15

console.log("Intruccion antes del if");

if (edad > 15) {
    console.log("If se ejecuta si la condicion es verdadera");
    console.log("Es mayor de edad");
}
else {
    console.log("Si la condicion es falsa, se ejecuta else");
}
console.log("Instruccion despues del if");


//Condicional if, else if, else
edad = 15;
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("Es aborrecente");
} else if (edad > 6) {
    console.log("Es un menor");
} else {
    console.log("Es un bebe");
}

// Condicionl Switch

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



// Condicional Ternary
// Es como un if pero en chiquito
edad = 19
let esMayor = (edad >= 18) ? "si" : "no";
console.log('Puede votar ' + esMayor);


//Ejercicio de comparacion
let age = "15"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);

