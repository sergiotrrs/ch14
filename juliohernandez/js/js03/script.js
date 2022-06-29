console.log("Teoría de la sesión JS03");

//Declaración de bloque

let nombre = "Sebastián";
let miNombre = "Julio"

{
   let nombre = "Valeria";
   var apellido = "Mojica";
   console.log(`Nombre: ${nombre}`)
   console.log(`Nombre fuera`)
}

console.log(`Nombre fuera del bloque ${nombre}`);
console.log(`Apellido fuera del bloque ${apellido}`);

/*Las llaves son una caja negra (por eso 'nombre fuera del bloque' no imprime
 Valeria); pero al usar var, la variable se escapa debido a que no tiene scope*/

let edad = 20;
//Condicional if, else if, else
if (edad > 18) {
   console.log("Es mayor de edad: adulto")
} else if (edad > 15) {
   console.log("Es aborrecente")
} else if (edad > 6) {
   console.log("Es un niño")
} else {
   console.log("Es un bebé")
}


/* Aunque se cumplan varias condiciones, solo realiza la primera que la satisface,
luego se sale del if. Esto debido a que son if's anidados:
 
if(edad >18){
   console.log("Es mayor de edad: adulto")
} else 
    if (edad>15){
       console.log("Es aborrecente")
    } else 
        if (edad>6){
            console.log("Es un niño")
        } else {
        console.log("Es un bebé")
        }

*/

//Switch es lo mismo que else if 
let opcionElegida = 2;
switch (opcionElegida) { //La evaluación es de forma estricta
   case 0:
      console.log("Accedió a ventas");

   case 2:
      console.log("Accedió a cobranza");
      break;
   case 1:
      console.log("Accedió a otracosa");

      //Submenú
      let submenu = 2;
      switch (submenu) {
         case 0:
            console.log("Acá amamos los dinosaurios");
            break;
         default:
            console.log("Cualquier opción, nos quedamos con los dinos");
      }

      break;
   case 9: case 3: case 4: case 5: //Si es 9, se ejecuta el 3...
      console.log("Se transfiere con un humano");
      break;
   default: //Para todas las demás opciones
      //No importa en dónde se coloca el default
      console.log("Opción inválida");
      break;
}


//Switch de arriba convertido a if-else if-else
/*{
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

}*/