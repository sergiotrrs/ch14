console.log("Teoria de la sesion js03");

//declaracion de bloque
let nombre = "Sebastian";

{
    //Este codigo esta en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre " + nombre);
}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//condicional if
let edad = 15;
console.log("Instruccion antes del if");
if (edad > 18) {
    console.log("if se ejecuta si la condicion es verdadera");
    console.log("Mayor de edad");
} else {
    console.log("Si la condicion es falsa, se ejecuta else");
}
console.log("Instruccion despues del if");

edad = 16;
if (edad > 18) {
    console.log("Mayor de edad, adulto");
}

else if (edad > 15) {
    console.log("adolescente");

}

else if (edad > 6) {
    console.log("menor");

}

else {
    console.log("bebe");

}

//switch condicional

let opcion = 1;

switch (opcion) {

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
        console.log("Se transfiere a un operador");
        break;
    default:
        console.log("Opcion invalida");
}


//Operado ternario (if chiquito)

edad = 19;
let esMayor = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log("Puede votar? "+esMayor);


//comparacion

let age ="19"
let voteable;
age = Number(age);

if (isNaN(age)){
    voteable = "Input is not a number";
} else{
    voteable = (age < 18) ? "Too young" : "Old enough";
}

console.log(voteable);