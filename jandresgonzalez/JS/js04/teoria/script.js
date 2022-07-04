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

let indexOut = 0, a = 0;
for ( ; indexOut < 3; indexOut ++, a+=2 ) {
    console.log(indexOut, a);
}
//Index va a seguir incrementándose hasta quebrar la condition
//Index 0 realiza lo del bloque y sube según la final expression: Index 1
//Index 1 realiza lo del bloque y sube según la final expression: Index 2
//Index 2 realiza lo del bloque y sube según la final expression: Index 3
//Index 3 ya no realiza lo del bloque, pero queda con ese valor
console.log(indexOut, a);

/*
let index = 0;
for ( ; ; ;) {
    if (index > 3) break;
    console.log (index);
    index++:
} */

//El ciclo for puede no tener un bloque de instrucciones
i= 0;
for ( ; i<100; i++);
console.log(i);

/**
 * ------------------
 * WHILE LOOP
 * -----------------
 * 
 * while (condition)
 *  statement
 */

//Acepta una sola líena para una sola cosa
//while (window.confirm ("¿Quieres continuar?") ) console.log("Aceptaron");

/*
console.log("\n ----------------- \t");
while (true) {
    console.log("Yes")
    if  (i != 0) break;
}

console.log(i);

while (i < 103) {
    console.log(i);
    i ++;
}

console.log(`Valor final es ${i}`);


//
//do {
//statement
//}
//while (condition);

let numConciertos = 0;
do {
    console.log("Divertirseeeeeee!", numConciertos , "veces");
    numConciertos ++;
}
while (confirm ("Puedo ir al concierto?"));

console.log("Fui" , numConciertos , "veces");

let numMuseos = 0;
while (confirm ("Puedo ir al museo?")); numMuseos ++;

console.log("Fui al museo", numMuseos , "veces");
*/

let sumita = suma(5,6);
console.log(sumita);
/**
 * Función para sumar dos números
 * @param {number} a //Primer sumando
 * @param {number} b //Segundo sumando
 * @returns //Regresa la suma
 */
function suma (a, b) {
    return a+b;
}

//*****for in sirve para iterar un arreglo más rápido */
//
let cars = ["vocho", "porsche", "golf", "tsuru tuneado"];
//
for (let i = 0; i < cars.length; i++) console.log("For: "+ cars[i]);
//
cars.forEach((autos) => console.log("Arrow:", autos));
//
for (let auto in cars) {
    console.log("For-in ", cars[auto]);
}
//
for (let auto of cars) console.log("For-of", auto);

//Arreglos de dos dimensiones
const cohortes = [
    ["Gustavo", "Bren", "Abi "] ,
    ["Miri", "Emiliano", "Patricio"]];

//console.log(cohortes[1][2])
console.log(cohortes);

for (let x in cohortes) {
    for (let y in cohortes[x]) {
        console.log(cohortes[x][y]);
    }
}

cohortes.forEach(fila => fila.forEach(columna => (console.log("Es:", columna))))

for (let x of cohortes) {
    for (let y of x) {
        console.log("For-of", y);
    }

}

/*
for of devuelve los datos DE cada elemento del array;
for in devuelve el index EN cada uno;
for permite que se inicialicen los datos, y normalmente itera con un índice los datos de los elementos del array;
forEach();devuelve CADA uno de los datos del elemento del array, y necesita una función para inicializarse
*/