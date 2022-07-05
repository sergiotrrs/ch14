console.log("teoria de la sesion js03")


//Declaracion de bloque*************************************
let nombre = "Sebastian"

{
    // este codigo esta en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);

}
console.log("Nombre fuera del bloque " + nombre);
console.log("Apellido fuera del bloque " + apellido);

//Condicional if**********************************************
let edad = 20
console.log("Instruccion antes de if")
if (edad > 18) {
    console.log("If se ejecutara si la condicion es verdadera");
    console.log("Es mayor de edad");
} else {
    console.log("Si la condicion es falsa, se ejecuta else");
}

//Condicional if/ else/ else if************************
edad = 15
if (edad > 18) {
    console.log("Es mayor de edad, adulto")
}
else if (edad > 15) {
    console.log("Es aborrecente")
}
else if (edad > 6) {
    console.log("Es un menor")
}
else {
    console.log("Es un bebe")
}
console.log("Instruccion despues de if");

/* Connditional switch */
let opcionElegida= 0;
switch(opcionElegida){ /* La evaluacion es de forma estricta */
    case 0:
    console.log("Acccedio a ventas");
    let submenu=2;
    switch(submenu){
    case 0:
        console.log("Aca amamos a los dinosaurios")
    break;
    default:
        console.log("Cualquier cosa, preferimos a los dinos")
    break;
    }
    case 1:
    console.log("Accedio a credito")
    break;
case 2:
    console.log("Accedio a cobranza")
    ;
case 9:
case 8:
case 7:
case 6:
case 5:
case 4:
    console.log("Se transfiere con un humano")
    break;
default:
    console.log("Opcion invalida")
}

console.log("Instruccion despues de case")

//Operador condicional Ternario*************************************************
//Es como un if, pero chiquito
edad=1
let mayorEdad= (edad>= 18) ? "Puede votar" : "No puede votar";
console.log("Puede votar? " + mayorEdad 
)

//Ejercicio d comparaion****************************************************
let age= "19"
let voteable;
age= Number(age);
if(isNaN(age)){
    voteable= "Input is not a number";
}else{
    voteable = (age < 18) ? "Too young" : "Old enought";

}
console.log(voteable)