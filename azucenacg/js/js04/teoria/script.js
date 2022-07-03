// js04

console.log("Sesión JS04");

/*//Como definir un arreglo ****

const miArreglo = ["dato String", false, 23, null, {a:12, b:34}];
console.log(miArreglo);
console.log(miArreglo.toString());
 */

// Cómo definir un arreglo***********

const miArreglo=["dato string", false, 23, true];
console.log(miArreglo);

// Convertir un arreglo a string
console.log(miArreglo.toString()); 
console.log(miArreglo.join("-")); 


// Eliminar el último dato del arreglo y pasarlo a una variable

const frutas=["mango","platano","melon","guanabana","aguacate","kiwi"];
console.log(frutas.toString()); 
let fruta=frutas.pop(); //Se elimina el ultimo elemento del arreglo
console.log(frutas.join(" * "));
console.log("fruta eliminada: "+ fruta);

// Agregar elemento al final del arreglo ****
console.log(frutas.push("uvas"));
// push nos devuelve la longitud del arreglo
console.log(frutas.join(" - "));

// Eliminar el primer elemento del arreglo y pasarlo
// a una variable

fruta=frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada "+ fruta);

// Agregar un elemento al inicio del arreglo 
console.log (frutas.unshift("fresa"));
console.log(frutas.join(" - "));


// FIFO: [a,b,c,d] [b,c,d] [b,c,d,e] shift y push

// Función for

/*
for (let index = 0; index <10; index= index + 1) console.log(index);

// Para tener varias variables en un mismo for

for (let index=0, a=0;index<3; index++, a+=2){
    console.log(index,a);
}*/

// Utilizando 2 variables

let index=0, a=0;
for (; index < 3; index++, a+=2) {
    console.log(a,index);
    
}
console.log("final index " + a + "- "+ index);

// en este ciclo de arriba podriamos imprimir la suma de los 
// números si le ponemos el ; antes del bloque para que haga 
// las cosas y solo nos de el resultado hasta el final 


// El ciclo puede no llevar parámetros de incialización 
index=0;
for (; ; ){
    if (index>3) break;
    console.log(index);
    index++;
}


// El ciclo podría no tener cuerpo
let i=0
for (;i<100;i++); //aqui se cierra el ciclo con el ;
console.log(i);

// este de arriba es el ejemplo de que se pasa hasta el final 
// y solo imprime el final 


// **************************WHILE***********************************

/**sintaxis
 * while (condition) {
    statement
}
 */

// aqui se continua hasta que se le ponga cancelar
//while (confirm("¿quieres continuar?")) console.log("Pulsó aceptar");


i=0;
while (i<10){
    console.log("valor de i en while: "+ i);
    i++;
}

// while no tiene un numero determinado de iteraciones
/** 
i=o;
while (!confirm("¿Tunúmero es "+ i + " ?")){
    console.log("Su número no es "+ i);
    i++;
}

console.log("Su n+umero pensado es "+ i);
*/



// El hermano de while DO WHILE***
let numCon=1;

do {
    console.log("Veces que fui al concierto: "+ numCon)
    numCon++
}
while(confirm ("puedo ir al concierto?"));


let numMus=1;
while (confirm("puedo ir al museo?")){
    console.log("veces que fui al museo: "+numMus);
    numMus++;

}

// do while : primero lo hace y luego te pregunta
// while: primero te consulta y luego actua

let resultado=suma (4,3);

/**
 * Suma dos números y devuelve el resultado 
 * @param {number} a primer número a sumar
 * @param {number} b segundo número a sumar 
 * @returns suma de a+b 
 */

function suma(a,b) {
    return a+b;
}

let carros= ["Seat", "Audi", "BMW"];

// Usando for 
for (let i=0; i<carros.length; i++) console.log("con for "+ carros[i]);

// Usando for each 
carros.forEach((auto) => console.log("con for each "+ auto));

// Usando for in
for (let auto in carros) console.log("Con for in "+ carros[auto]);

// Arreglos de dos dimensiones
const cohortes= [["Marihan","Adrian", "Gustavo"],
["Miri", "Emiliano", "TitiaAbi"]];

// el 0 y el dos hace referencia a fila y columna 
// Primero va fila y luego columna 
// Nemotecnia: Fight Club= FC
console.log(cohortes[0][2]);

/**
 * Mari
 * adri
 * gus
 * miri
 * emi
 * tuti
 */

 console.log(cohortes[0][0]); //imprime Marihan

 console.log(cohortes[0][0]); //imprime adrian


//  Ejercicios para recorrer el arreglo de cohortes con diferentes for 

// Opción 1 for normal
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}
// opción 2 for in

 for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

// opción 3 for each

cohortes.forEach(fila=>fila.forEach(columna=>console.log("ultimo: "+ columna)));
// for each nos da los indices 
// solo se imprime asi en for ecah porque
//  con for each ya está iterando sobre los 
// elementos de los objetos en el array


// opción 4 for of 
for (let fila of cohortes){
    for (let columna of fila)console.log("for of "+ columna);
}

/*
for of: devuelve los datos DE cada elemento del array;
for in: devuelve el index EN cada uno;
for: permite que se inicialicen los datos, y normalmente itera con un índice los datos de los elementos del array;
forEach();devuelve CADA uno de los datos del elemento del array, y necesita una función para inicializarse
*/
