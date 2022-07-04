console.log("Teoria de la sesión JS02");

//Declaración de bloque ***** Debe de estar dentro de la llave {}
let nombre ="Sebastian";
{
    //Este código está en un bloque.
    let nombre = "Margarita";
    var apellido = "Flores";
    console.log("Nombre: " + nombre);
}
console.log("Nombre fuera del bloque: " + nombre);
console.log("Apellido fuera del bloque: " + apellido);

//Condicional if//
let edad = 15;
console.log("Instrucción antes de if");

if (edad > 18){
console.log("If se ejecutara si la condición verdadera");
console.log("Es mayor de edad");
} else {
    console.log("Si la condición es falsa, se ejectura else");
}

console.log("Intrucción después de if");
//Condicional if. else if, else **************
edad = 18;
if (edad >18){
    console.log("Es mayor de edad, adulto");
    } else if (edad >15 ) {
    console.log("Eres puberto");
        } else if (edad >6 ){
             console.log("Eres un cacahuate");
} else{
    console.log("Es un bebe");
}

//Condicional Swithc*************+

let opcionElegida = 0;

switch (opcionElegida){ //La evaluación es de forma estricta (===)
    case 0:
        console.log("Accedió a ventas");
    let submenu = 2
    switch (submenu){
        case 0:
            console.log("Acá amamos los dinosaurios");
            break;
        default:
            console.log("Cualquier opción");
    }
        break;
    case 1:{
        console.log("Accedió a crédito");
        let submenu = 0;
        switch (submenu){
            case 0:
                console.log("Págane");
                break;
            default: console.log("Elektra te tiene en la mira");
        } break;
    }
        case 2:
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
console.log("Intruscciones después de case");
//Ejemplo del mismo algoritmo pero con if
let opciomElegida=5;

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

//Another example//
let Animal = 'Cerdo';
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
}

//Operador ternario//**********
//Es como un if, pero en chiquito 

edad = 19
let esMayor = (edad>=18) ? true : false;
console.log("¿Puede votar? " + esMayor);

//Ejercicio de comparación
let age = "18"
let voteable;
age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else{
    voteable = (age <18) ? "Too young" : "Old enough";
}
console.log(voteable);