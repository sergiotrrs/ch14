console.log("Teroria de la seción js03");

// Declaración de bloque

{
    // Este codigo esta en un bloque
    0
    let nombre = "mujica";
    var apellido = "Valeria";
    console.log("Nombre:" + nombre);

}

console.log("Nombre fuera del bloque" + nombre);
console.log("Apellido fuera del bloque:" + apellido);


let edad = 15;
console.log("Introducción antes del if");

if (edad > 18) {
    console.log("if se ejecuta si la condición es verdadera");
    console.log("Es mayor de edad");

} else {
    console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Introducción despues de if");

//Condicional if , els if , else 

if (edad > 18) {
    console.log("Es mayor de edad, adulto");

} else if (edad > 15) {
    console.log("Es adolecente");

} else if (edad > 6) {
    console.log("es un bebé");
}


console.log("Instrucción despues del if");



// consición de Switch****************************

let opcioneElegida = 2;

switch (opcioneElegida) {
    case 0:
        console.log("Accedio a ventas");
        break;

    case 2:
        console.log("Accedio a credito");
        break;
    case 9:
        console.log("Se tranfiere con un humano");
    default:
        console.log("Opción invalida");
        break;
}

console.log("Introducción después de casa");




let opciomElegida=4;

if (opciomElegida===0){
    console.log("Accedio a ventas");
}else if(opciomElegida===1){
    console.log("Accedio a crédito");
}else if(opciomElegida===2){
    console.log("Accedió a cobranzas");
}else if(opciomElegida===9|| opciomElegida===4||opciomElegida===5||opciomElegida===6){
    console.log("Se transfiere con un humano");
}else{
    console.log("Opcion inválida");
}


// operador ternario 

edad = 17
let esMayor = (edad >= 18 )? "Puede votar" : "No puede votar" ;  /**es boleano */
console.log("¿Puede votar? " +esMayor;




// ejercicio de comparación ************

let age = "19"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}

console.log(voteable);