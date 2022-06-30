/**
 * Teoría de JS04
 * Matrices y bucles @GenerationMX
 * Arrays & loops
 */

console.log("linkeado");
let text = document.getElementById("demo").innerHTML;
// Cómo definir un arreglo

const array = ["string", true, 42, null, false, undefined, "uff"];
/*
-------------------
ARRAYS
----------------------
*/
console.log(array);
console.log(array.toString());
console.log(array.join("-,"))

const frutas = ["kiwi", "manzana", "platano", "melon", "papaya", "aguacate"];
let frutaEliminada = frutas.pop(); //Last In First Out (LIFO)
//pila

console.log(frutas.join(" + "));
console.log(`Y la fruta que ya no se compró, por fea, es ${frutaEliminada}`);

let frutaFinal = "uvas";
frutas.push(frutaFinal); //Entra al final
//push devuelve el elemento al final del arreglo luego de poner elemento
console.log(`La nueva fruta final es ${frutaFinal}`);
console.log(frutas.join(" - "));

frutaEliminada = frutas.shift(); //First In First Out (FIFO)
//cola
console.log(`La fruta eliminada, era la primera: ${frutaEliminada}`);
console.log(frutas);

frutas.unshift("sandia"); //Entra al inicio
//Retorna unshift la longitud del arreglo
console.log(frutas);

document.getElementById("demo").innerHTML = frutas;


/* 
------------------------------
LOOP FOR 
-----------------------
*/
for (let i= 0; i <=5; i++) console.log(i);
//recordar que for e if sólo jalan una instrucción, que puede ir en su misma línea

//console.log(`Valor de index es ${i}`);

for (let i= 0; i <=5; i++) {
    document.getElementById("demo").innerHTML = i;
    console.log(i);
    console.log(`Valor de index es ${i}`);
}

//for ([initialization]; condition; [finalexpression])
let i=0, j=0, x=0;