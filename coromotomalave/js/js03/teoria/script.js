console.log("Teoria de la sesion JS03")

//Declaracion de bloque

//PRIMER CASO

/*let nombre = "Sebastian";

{
    let nombre = "Mojica";
    console.log("nombre: " + nombre)
}*/

//console.log("Nombre fuera del bloque: " + nombre);no funciona porque esta adentro del scope let y let solo funciona adentro.

//console.log("Nombre fuera del bloque: " + nombre);


//En este caso imprime Nombre fuera del bloque: Sebastian y Nombre fuera del bloque: Valeria porque adentro del scope declaramos var y su scope si sale afuera de las funciones.


//SEGUNDO CASO

/*let nombre = "Sebastian";

{
    let nombre = "Mojica";
    var apellido = "Valeria";
    console.log("nombre: " + nombre)
}

console.log("Nombre fuera del bloque: " + nombre);//lo imprime porque esta afuera let nombre= "Sebastian" pero el que esta dentro del scope no.

console.log("Nombre fuera del bloque: " + apellido);//lo imprime porque esta var apellido = "Valeria"; con la palabra var funciona afuera del scope.*/

//CONDICIONALES IF
/*let edad = 15;
console.log("condicion antes del if")// solo se esta utilizando if y lo que esta afuera de la condicion funciona.

if (edad > 18) {

    console.log("Es mayor a 18");
    console.log("Es");
}

console.log("No es mayor a 18");*/

//CONDICIONALES IF ELSE

/*let edad = 15
console.log("condicion antes del if")

if (edad > 18) {

    console.log("Es mayor a 18");
    console.log("Es");
}
else {
    console.log("Else");
}

console.log("No es mayor a 18");*/

/*let edad = 18; 

if(edad > 18) {
    console.log("Es mayor de edad, adulto")
}
else if(edad > 15) {
    console.log("Es adolescente")
}else if(edad > 6){
    console.log("Es un bebe")
}*/

// CONDICIONAL SWITCH

//primera parte
/*let opcionElegida = 0;

switch(opcionElegida){
    case 0:
        console.log("Accedio a ventas");
    case 1:
        console.log("Accedio a credito");
        break;
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
        console.log("Opcion invalida")
        break;         
}*/


//Segunda parte

/*let opcionElegida = 0;

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
console.log("Instrucción después de case");*/



let Animal = 'Jirafa';
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




/*let opciomElegida=4;

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


//CONDICIONALES TERNARIO: es como else luego de los dos puntos es como un else
/*let edad = 5;
let esMayor = (edad >= 18) ? true: false;
console.log("Puede votar?" + esMayor);*/

let age = "19"
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable)