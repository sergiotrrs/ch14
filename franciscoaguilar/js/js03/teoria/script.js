console.log("Teoría js03");
let nombre = "Sebastian";

/*
Declaración de bloque
 */
{
    // Este código está en un bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre " + nombre);
}

console.log("Nombre fuera del bloque: " +nombre);
console.log("Apellido fuera del bloque: " +apellido);

//Condicional if

console.log("Instrucción antes de if");
if(false){    
console.log("if se ejecuta si la condición es verdadera");
}

console.log("Instrucción después de if");

// OTRO EJERCICIO
let edad = 15;
console.log("Instrucción antes de if");

if(edad>18) console.log("if se ejecuta si la condición es verdadera"); //solo ejecuta una instrucción

console.log("Es mayor de edad");
console.log("Instrucción después de if");

 edad = 15;
console.log("Instrucción antes de if");

if(edad>18){ 
    console.log("if se ejecuta si la condición es verdadera"); 
    console.log("Es mayor de edad");
}
console.log("Instrucción después de if");

//Else

edad = 15;
console.log("Instrucción antes de if");

if(edad>18){ 
    console.log("if se ejecuta si la condición es verdadera"); 
    console.log("Es mayor de edad");
}else{
    console.log("Si la condición es falsa, se ejecuta else"); 
}
console.log("Instrucción después de if");

// Condicional if, else, if, else....
edad = 4;
console.log("Instrucción antes de if");
if (edad>15){
    console.log("Es mayor de edad, adulto");

}else 
    if (edad>15){
    console.log("es aborrecente");

    }else 
        if(edad>6){
    console.log("Es una menor");

        }else{
    console.log("Es un bebé");

        }

//Condicional Switch***********

let opcionElegida = 1;

switch(opcionElegida){
    case 0:{
        console.log("Accedió a ventas.");
        let submenu = 2;
        switch(submenu){
            case 0:
                console.log("Acá amamos a los dinosaurios.");
                break;
            default:
                console.log("Cualquier opción, nos quedamos con los dinos");
        }

        break;}
    case 1: {
        console.log("Accedió a crédito.");
        let submenu = 2;
        switch(submenu){
            case 0:
                console.log("Consulta de crédito.");
                break;
            default:
                console.log("Pedir un crédito nuevo.");
        }

        break;}
    case 2:
        console.log("Accedió a cobranza.");
       break;
    case 3:
    case 4:
    case 5:
    case 9:
        console.log("Se transfiere con un humano.");
        break;
    default:
        console.log("Opción inválida.");
    
}

console.log("Instrucción después de Switch-case");


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



// operador ternario 

edad =5;
let esMayor = (edad>=18) ? "Puede votar" : "No puede votar";
console.log("Puede votar? : " + esMayor);

// Ejercicios de comparación

let age = "5"
age = Number(age);
if (isNaN(age)){
    voteable = "Input is not a number";
}else{
    voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);