console.log("Sesión JS04");

//Como definir un arreglo ************

const miArreglo = ["dato String", false, 23, null, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable **
const frutas = ["mango", "platano", "melón", "Guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop(); //Se elimina el último elemento del arreglo
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al final del arreglo ************************
console.log(frutas.push("uvas")); //agregamos el elemento al final del arreglo
//y devuelve la longitud del arreglo
console.log(frutas.join("  "));
//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al inicio del arreglo ***********
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * FIFO: unshift - shift 
 *       0,1,2,3     
 *      [a,b,c,d] -> [e,a,b,c,d] -> [a,b,c,d]
 * LIFO: unshift - pop
 * i    0,1,2,3       0,1,2,3,4     
 *      [a,b,c,d] -> [e,a,b,c,d] -> [e,a,b,c]
 *      
 */

/**
 * for ([initialization]; [condition]; [final-expression])
  statement
 */
for (let index = 0; index < 10; index = index + 1) console.log(index);
//console.log("valor de index " + index);
console.log("Instrucción al final del for");
//-------------------------------------------------------------------
for (var maga = 0; maga < 5; maga = maga + 1) {
    console.log(maga);
}
var maga = 30; //con VAR se puede redeclarar una variable
var maga = 29;
console.log("valor de MAGA " + maga); //Esto no está en el alcance de la vaariable 

/**
 * let abue = 30; con LET no se puede volver a declarar
 * let abue = 56;
 */
for (let index = 10; index > 0; index = index - 1) console.log(index);
//------------------------------------------------------------------
//  index = index + 1 -> index++;
// Utilizar dos variables en mi ciclo for:
let index = 0, a = 0;
for (; index < 3; index++, a += 2) {
    console.log(a, index); //0 -0 // 2-1 // 4-2 // Nom cumple 6 - 3
}
console.log('final index ${a} - ${index}');

//El ciclo for, puede no llevar parametros de inicializacion, evaluación, y expresión final

index = 0
for (; ;) {
    if (index > 3) break;
    console.log(a, index);
    index++;
}
//El ciclo for podría no tenner un cuerpo (bloque) de instrucciones.
let i = 0
for (; 1 < 100; i++);
console.log(i);
/**
 * Sintaxis del ciclo While
 * while (condition)
 * statement
 * 
 */
//while ( confirm ("¿Quieres continuar?") ) console.log("Pulse aceptar");
/*
i = 0
while (i < 10) {
    console.log("Valor de i while" + i);
    i++;
}
*/
i=0
while (i <10){
    if (i==5)break;
    console.log("Valor de i en while " + i);
    i++;
}
//El hermano de While, se llama Do-While************************************
let numConciertos=1;
do{
    console.log("Vces que fui al concierto " + numConciertos);
    numConciertos++
} while( confirm ("¿Puedo ir al concierto?"));

let numMuseo = 1;
while (confirm ("¿Puedo ir al museo?")){
    console.log("Veces que fui al museo " + numMuseo);
    numMuseo++;
}

/**
 * Suma de dos números y devuelve el resultado
 * @param {number} a primer númmero a sumar
 * @param {number} b segundo número a sumar
 * @returns suma de a + b
 */
function suma(a , b){
    return a + b;
}

//**** for in
// Formas para iterar un arreglo
const carros = ["VW" , "Audi", "Seat", "BMW"];
for (let i=0 ; i<carros.length; i++) console.log(carros[i]);
//Usando forEach
carros.forEach((auto) => console.log("Con for each " + auto));
//Usando for in
for (let auto in carros) console.log("Con for-in " + carros [auto]);

//Arreglos de dos dimensiones
const cohortes = [["Marihan", "Adrián", "Gustavo"], 
["Miri", "Emiliano", "TuTiaAbi"]];
//[F]eliz [C]umpleaños                         
console.log(cohortes[0])[2]; //Primer corchete te indica la fila el indica empieza con 0
                            // el segundo corchete te indica la columna
/**
 * Marihan
 * Adrián
 * Gustavo
 * Miri
 * Emiliano
 * TuTiaAbi
 */

