console.log("Teoria de la sesion JS03");

//DECLARACION DE BLOQUE
let nombre = "Sebastian";
{
    //ESTE CODIGO ES UN BLOQUE.
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido feura del bloque: " + apellido);

//condicional if
let edad = 16;
console.log("instruccion antes del if");
if (edad > 18) {
    console.log("if se ejecuta si la condicion es verdadera");
    console.log("es mayor de edad");
}
else {
    console.log("Si la condicion es falsa, se ejecuta else");

}

console.log("Instruccion despues de if");

//condicional if , else if, else************************
if (edad > 18) {
    console.log("Es mayor de edad, adulto");
} else if (edad > 15) {
    console.log("es un aborrecente")
} else if (edad > 6) {
    console.log("Es un menor");
}
else {
    console.log("es un bebe");
}
console.log("Instruccion despues de if");
//condicional Switch


let opcionElegida = 1;

switch (opcionElegida) { //La evaluacion es de forma estricta
    case 0: {
        console.log("Accedio a ventas");
        let submenu = 0;
        switch (submenu) { // puede haber un switch dentro de un switch
            case 0:
                console.log("Aca amamos los dinosaurios")
                break;
            default:
                console.log("Cualquier opcion, nos quedamos con los dinos")
        }
        break;
    }
    case 1: {
        console.log("Accedio a credito");
        let submenu = 1;
        switch (submenu) { // puede haber un siwtch dentro de un switch
            case 0:
                console.log("Pagame")
                break;
            default:
                console.log("Elektra te tiene en la mira")
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
        console.log("Se transfiere con un humano");
        break;
    default:
        console.log("Opcion invalida");
        break;
}
console.log("Instruccion desoues del case");
//EJEMPLO SWITCH CON STRINGS
/* let Animal = 'Perro';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    console.log('Este animal no lo hará.');
} */

//condicional ternario***************************
//es omo un if, pero chiquuito
edad= 17
let esMayor = (edad>=18)? "Si Puede Votar" : "No puede votar";
console.log("¿Puede Votar? " + esMayor);

//ejercicio de comparacion********************
let age = "15"
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);

typeof(3);
console.log("se imprime" + typeof());