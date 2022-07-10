console.log("Teoría JS03");

//Declarar bloque
let nombre = "Sebastian";
{
    //Código dentro del bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//If
let edad = 15;
console.log("Instrucción antess del if");

if (edad > 18) {
    console.log("if si es verdadero");
    console.log("Es mayor de edad");
}else {
    console.log("Si la condición es falsa");
}
console.log("Instrucción después del if");

//Condicional else if else
edad=16;
console.log("Instrucción antes del if");
if (edad > 18) {
    console.log("Es mayor de edad");
} else if (edadZ15) {
    console.log("Es adolescente");
} else if (edad > 6) {
    consol.log("Es una menor");
} else {
    console.log("Es una bebé");
}
console.log("Instrucción después del if");

//condicional switch
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
/* IF en vez de SWITCH 2:50
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
}*/
//Operador ternario (if chiquito)
edad = 5;
let esMayor = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log("¿Puede votar?" + esMayor);

//Ejericio de comparación
let age = "15";
let voteable;
age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);