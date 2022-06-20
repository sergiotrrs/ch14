/* Ejercicio 4. Solicitar un entero (entre el 100 y el 200)
    y determinar si es múltiplo de 3
*/

let x= prompt("Escribe un número entre 100 y 200");
let y= 3;
 
 if ((x % y) == 0){
   console.log ("Tu número " +x+ " es múltiplo de 3");
}
else {
   console.log ("Tu número " +x+ " no es múltiplo de 3");
}
