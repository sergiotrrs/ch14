console.log("Teoría de la sesión JS03");

//Declaración de bloque

let nombre ="Sebastián";

{
    let nombre="Valeria";
    var apellido = "Mojica";
    console.log(`Nombre: ${nombre}`)
}

console.log(`Nombre fuera del bloque ${nombre}`);
console.log(`Apellido fuera del bloque ${apellido}`);

/*Las llaves son una caja negra (por eso 'nombre fuera del bloque' no imprime
 Valeria); pero al usar var, la variable se escapa debido a que no tiene scope*/

 let edad =20;
 //Condicional if, else if, else
 if(edad >18){
    console.log("Es mayor de edad: adulto")
 } else if (edad>15){
    console.log("Es aborrecente")
 } else if (edad>6){
    console.log("Es un niño")
 } else {
    console.log("Es un bebé")
 }


 /* Aunque se cumplan varias condiciones, solo realiza la primera que la satisface, 
 luego se sale del if*/