console.log('se inicia el programa');

// Como definir un arreglo
const miArreglo = ["dato string", false, 23, true];
console.log(miArreglo);
console.log(miArreglo.toString()); /* asi se coniverte un arreglo a string */
console.log(miArreglo.join("-")); /*Asi se concatenan los datos del arreglo como string*/

//Elinimar el ultimo dato del arreglo y pasarlo a una variable funcion .pop()
const frutas = ["mango", "pepino", "mélon", "guanabana", "aguacate", "kiwi"];
let fruta = frutas.pop(); /* Con este metodo se elimina el ultimo dato del arreglo y en el let se obtiene el valor eliminado */
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al final del arreglo .push()
console.log(frutas.push("uvas")); // Con este comando se agrega el elemento al final del arreglo y devuelve la longitud del arreglo con el log
console.log(frutas.join(" - "));

//Eliminar el pimer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al inicio del arreglo y devuelve la longitud del arreglo con el log
console.log(frutas.unshift("fresa"))
console.log(frutas.join(" - "));

//Metodo que se utilizarian para hacer un FIFO en arreglo
// FIFO PEPS: push -> shift
// LIFO UEPS: push -> pop}
let index = 0;
for (; index < 10; index = index + 1) {
    console.log(index);
}
console.log("Instruccion al final del for");
console.log("El valor de index es " + index);

let i = 0, a = 0;

for (; i < 3; i++, a += 2) {
    console.log(a, i);
}

console.log(`final index ${i} - ${a}`);

//El ciclo for puede no llevar parametros de inicializacion, evalucacion y expresion final

index = 0;
for (; ;) {
    if (index > 3) break;
    console.log(index);
    index++;
}

//El ciclo for podria no tener cuerpo (bloque) de intrucciones
let j = 0;
for (; j < 100; j++);
console.log(j);
/**
 * sintaxis del ciclo while el cual se detiene cuando la condicion ya no se cumple
 while (condition) {
    statement
 }
 */

//  while (confirm("¿Quieres continuar?")) console.log(`Pulso aceptar`);

i = 0;
while (i < 10) {
    if (i == 5) {
        break;
    }
    console.log("\n");
    console.log(`El valor del while es ${i}`);
    i++;
}
//El hermano de while se llama do-while el cual siempre se ejecuta primero y luego valida la condicion
/* let numConciertos = 1;
do {
    console.log("Veces que fui al concierto " + numConciertos);
    numConciertos++;
} while (confirm("Puedo ir al concierto?"));

let numMuseo = 1;
while (confirm("Puedo ir al museo?")) {
    console.log("Veces que fui al museo " + numMuseo);
    numMuseo++;
} */
/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} a primer numero a sumar 
 * @param {number} b segundo numero a sumar
 * @returns suma de a + b
 */
function suma(a, b) {
    return a + b;
}
//Formas de iterar un arreglo
const carros = ["VW", "Audi", "Seat", "BMW"];
//for
for (let i = 0; i < carros.length; i++) console.log(carros[i]);
//usando foreach
carros.forEach((auto) => console.log("Con forEach " + auto));
// Con for in sirve para iterar un arreglo
for (let auto in carros) console.log("Con for in " + carros[auto]);
// con for of
for (let auto of carros) console.log("Con for of "+ auto);
//Arreglos de dos dimensiones
const cohortes = [
    ["Mariana", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
            //[F]eliz [C]umpleaños

// console.log(cohortes[0][2]); /* Este primero busca por fila y luego por columna */
   
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}


for (const fila of cohortes) {
    for (const columna of fila) {
        console.log("Con for of "+columna);
    }
}
