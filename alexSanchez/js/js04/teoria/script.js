console.log("Sesion js04")

// Como definir un arreglo*************************

const miArreglo = ["dato string", false, 23, null, true];
console.log(miArreglo)
console.log(miArreglo.toString("-"))
console.log(miArreglo.join("-"))

//Eliminar el ultimo dato del arreglo y pasarlo a una variable*****************
const frutas = ["mango", "platano", "melon", "guanabana", "aguacate", "kiwi"];
let fruta = frutas.pop() // Se elimina el ultimo arreglo
console.log(frutas.join(" * "))
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al final del arreglo*************************************

console.log(frutas.push("uvas")); //Agregamos el elemento final del arreglo
//y devuelve la longitud del arreglo
console.log(frutas.join(" - "));
//Eliminar el primer elemento del arreglo y pasarla a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "))
console.log("Fruta eliminada " + fruta)

//Agregar un elementto al inicio del arreglo***********************************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));
//Metodos que se utilizarian para hacer un FIFO en arreglo
/**
 * FIFO: push- shift
 * []
 * [a]
 * [a,b]
 * [a,b,c]
 *       1 2 3 4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push- pop
 *indice 0 1 2 3   
 *      [a,b,c,d] -> [a,b,c,d,e] -> {a,b,c,d]
 */

/** for([initialization]; [condition] ; [final expretion])
 * statement
 */
for (let index = 0; index < 10; index = index + 1) console.log(index);
//console.log("valor de index "+index); //no esta al alcance de la variable
console.log("instruccion final for");

for (var maga = 0; maga < 5; maga = maga + 1) {
    console.log(maga);
}
console.log("valor de MAGA " + maga); //no esta al alcance de la variable


//varias variables

for (let index = 10; index > 0; index = index - 1) console.log(index);

for (let index = 0, a = 0; index < 3; index++, a += 2) {
    a++,
        console.log(a, index)
}

let index = 0, a = 0;
for (; index < 3; index++, a += 2) {
    console.log(a, index);
}
console.log(`final index ${index} - ${a}`);

//el ciclo fro puede no llevar parametros

index = 0;
for (; ;) {
    if (index > 3) break;

    console.log(index);
    index++;
}


//el for puede no tener cuerpo (bloque) de instrucciones
let i = 0;
for (; i < 100; i++);
console.log(i);

//while

//while (confirm("Quieres continuar?") ) console.log("Pulso aceptar");

i = 0;
while (i < 10) {
    console.log("Valor de i en while " + i);
    i++;
}

console.log("\n");

i = 0;
while (i < 10) {
    if (i == 5) break;
    console.log("Valor de i en while " + i);
    i++;
}

let numConciertos = 1;
do {
    console.log("Veces que fui al concierto: " + numConciertos);
    numConciertos++;
} while (confirm("Puedo ir al concierto?"));

let = numMuseo = 1;
while (confirm("puedo ir al museo?")) {
    console.log("Veces que fui al museo " + numMuseo);
    numMuseo++;
}
let  resultado = suma(4,3);

/* Suma dos numeros y devuelve resultado
@param {number} a primer numero a sumar
@param {number} segundo numero a sumar
@returns suma de a +b */
function suma(a, b){
    return a+b;
}

//Formas de un arreglo************************************************
const carros= ["VW","Audi","Seat","BMW"]
//Usando estructura  for
for (let i=0; i<carros.length; i++) console.log("Con for " + carros)
// Usando forEach
carros.forEach ((auto) => console.log("Con for-each " +auto));
//Usando for in
for (let auto in carros) console.log("Con for-in " + carros[auto]);
//usando for of
for (let auto of carros) console.log("Con for-of " + carros[auto]);



//Arreglos de dimensiones
const cohortes = [
    ["Miriam", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]
]
console.log(cohortes[0].length);
//Con forEach
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)))

//Con for in






