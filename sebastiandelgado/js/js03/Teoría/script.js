console.log("Teoría de la sesión JS03");

//Declaración de bloque *********************************************************************
let nombre= "Sebastian";
{

    //Este código está en un bloque.
    let nombre= "Valeria";
    var apellido = "Mojica";
    console.log("Nombre fuera del bloque: "+ nombre);
    console.log("Apellido fuera de bloque: " + apellido);
}

console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " +apellido);

//Condicional if

console.log("Instrucción antes de if");
edad=3;

/*if(edad >18 ){ 

} else {
    console.log("si la condición es falsa, se ejecuta else");
}
console.log("Instrucción despues del if");
*/

if(edad > 18){
    console.log("Es mayor de edad, adulto");
}else if (edad >15){
    console.log("Es aborrecente");
}else if(edad >6){
    console.log("Es una menor");
}else {
    console.log("es un bebé");
}


// Condicional Switch *****************************************************
let opcionElegida = 0;

switch (opcionElegida){
    case 0:
        console.log("Accedió a ventas");
        let submenu =2
        switch (submenu){
            case 0:
                console.log("Págame");
                break;
            default:
                console.log("Elektra te tiene en la mira");
        }
        break;
    case 1:
        console.log("Accedió a crédito");
        switch (submenu){
            case 0:
                console.log("Págame");
                break;
            default:
                console.log("Elektra te tiene en la mira");
        }
        break;
    case 2:
        console.log("Accedió a cobranza");
        break;
    case 9:
        console.log("Se transfiere con un operador");
        break;
    default:
        console.log("Opción inválida");

}


// Condicional Ternario
// Es como un if, pero en chiquito <3

edad = 19;
let esMayor = (edad >= 18) ? true : false;
console.log("¿Puede votar? " + esMayor);


//Se verifican si es número o si es mayor de 18 años
let voteable;
let age = "15x"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);