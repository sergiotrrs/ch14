console.log("Teoria sesión JS03");

//Declaración Bloque******************
let nombre = "Sebastian";

{
    //Este código está en el bloque
    let nombre = "Valeria";
    var apellido = "Mojica";
    console.log("Nombre: " + nombre);
}

console.log("Nombre fuera del bloque: " + nombre);
//El scope o alcance de var rompe con la declaración bloque
console.log("Apellido fuera del bloque: " + apellido);

//Condición if******************************************
let edad = 15;
console.log("Instrucción antes de if");

if (edad>18) {
    console.log("if se ejecuta si la condición es verdadera");
    console.log("Es mayor de edad");
} else {
    console.log("Si la condición es falsa, se ejecuta else");
}

console.log("Instrucción despues de if");


//Condicional if, else if, else ********************************
edad = 18;

if (edad>18) { //si 
    console.log("Es mayor de edad, adulto");
} else if (edad>15) { // de lo contrario, si
    console.log("Es aborrecente");
} else if (edad>6) {
    console.log("Es un menor");
} else { // de lo contrario
    console.log("Es un bebé");
}

//Condicional Swich**********************************************
//funciona como un menú con opciones especiales
let opcionElegida = 2;

switch (opcionElegida){ //La evaluación es de forma estricta (===)
    case 0:{
        console.log("Accedio a ventas");
        let submenu = 2
        switch (submenu){
            case 0:
                console.log("Accedio a jefe de ventas");
                break;
            //default ;
                //console.log("Opción Invalida");
                //break;
        }
        break;}
    case 1:
        console.log("Accedio a compras");
        break;
    case 2:{
        console.log("Accedio a credito");
        let submenu = 2
        switch (submenu){
            case 0:
                console.log("Accedio a jefe de cobranza");
                break;
            /*default;
                console.log("Opción Invalida");
                break;*/
        }
        break;}
    case 9:
        console.log("Transfiere a un operador");
        break;
    default:
        console.log("Opción Invalida");
        break;
}
console.log("Instrucción despues del case");

//Condicional ternario ************************************
//Es como un if, pero en chiquito <3
edad = 19;
let esMayor = (edad>=18) ? true : false;
console.log("¿Puede votar? " + esMayor)

//Ejercicio de comparación ********************************
let age = "15";
age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age < 18) ? "too young" : "Old enough";
}
console.log(voteable);