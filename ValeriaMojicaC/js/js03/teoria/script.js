console.log("Sesion JavaScript 03");

//Declaracion de Bloque
let nombre = "Sebastian";

{
    //Este codigo esta en un bloque.
    //Esta variable solo existe en este bloque
    let nombre = "Valeria";
    //Var no tiene un scope
    var apellido = "Mojica";
    console.log(`Nombre: ${nombre}`);
    //Al finalizar el bloque la variable se destruye
}

console.log(`Nombre fuera del bloque ${nombre}`);
//Así que se puede usar fuera del bloque
console.log(`Apellido fuera del bloque ${apellido}`);

//Condicional If
let edad = 13;
console.log(`Intruccion antes del If`);

if(edad > 18) {
    console.log(`if se ejecuta si la condicion es verdadera`);
    console.log(`Es mayor de edad`);
} else {
    console.log(`Si la condición es falsa, se ejecuta el else`);
}

console.log(`Intruccion despues del If`);

//Condicional if, else if, else
edad = 16;
if (edad > 18) {
    console.log(`Es mayor de edad, adultos`);
} else if (edad > 15 ){
    console.log(`Es aborrecente`);
} else if (edad > 6){
    console.log(`Es un menor`);
}else { 
    console.log(`Es un bebé`);
}

//Condicional Switch
//Se utiliza principalmente para listas
let opcionE = 1;

//La evaluacion es de forma estricta (Mismo tipo, valor)
switch(opcionE) {
    case 0: { //Para que poamos usar la misma variable subMenu en cada opcion usamos un bloque
        console.log(`Accedio a Ventas`);
        let subMenu = 2;
        switch(subMenu){
            case 0:
                console.log(`Aca amamos a los dinos`);
                break;
            default:
                console.log(`Tambien aca los amamos`);
        }
        break;
    } //Finaliza el bloque 

    case 1: {
        console.log(`Accedio a Credito`);
        let subMenu = 0;
        switch(subMenu){
            case 0:
                console.log(`Pagame`);
                break;
            default:
                console.log(`Elektra te tiene en la mira`);
            break;
        }
        break;
    }

    case 2:
        console.log(`Accedio a Cobranza`);
        break;
    case 9: 
    case 3:
    case 4:
    case 5:
        console.log(`Se tranfiere con un humano`);
        break;
    default: 
        console.log(`Opcion invalida`);
        break;
}
console.log(`Intruccion despues del case`);

//Es el mismo ejemplo que case pero usando if else
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

//Ejemplo de Switch
let Animal = 'Dino';
switch (Animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log(`Este animal subirá al Arca de Noé: ${Animal}`);
        break;
    case 'Dinosaurio':
    default:
        console.log(`Este animal no lo hará: ${Animal}`);
}

//Operador ternario
//Es como un If pero en chiquito
edad = 15;
let esMayor = (edad>=18) ? "Si, Puede Votar" : "No, puede votar"; 
console.log(`¿Puede votar? ${esMayor}`);

//Ejercicio de comparacion
let age = "15";
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);