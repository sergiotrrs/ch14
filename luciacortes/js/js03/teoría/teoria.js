console.log("Teoría de la sesión JS03");
//Declaración del bloque**************
let nombre = "Sebastián"
{
//Este código está en un bloque
let nombre ="Valeria";
var apellido="Mojica";//no usar var
console.log("Nombre: "+nombre);
}//aquí termina el bloque
console.log ("Nombre fuera del bloque: "+ nombre);
console.log ("Apellido fuera del bloque: "+ apellido);// Si imprime el apellido por el uso de var

//Condicional if
let edad =15
console.log("instrucción antes de if");
if (edad>18)    console.log("if se ejecuta si la condición es verdadera");
//el if ejecuta solo una instrucción, aun sin llaves está dentro de la codición.
console.log("es mayor de edad");

//el bloque con llaves para más de una instrucción
if (edad>18) {
    console.log("es mayor de edad");
    console.log("if se ejecuta si la condicón es verdadera");
} else {
    console.log("si la condición es falsa, se ejecuta else");
}
console.log("Instrucción después de if");

//Condicional if, else if, else *****
edad= -100;
if (edad >18){
    console.log("Es mayor de edad, adulto");
} else if (edad>15){
    console.log("Es adolescente");
} else if (edad>6){
    console.log("Es infante");
} else{
    console.log("Es bebé");
}