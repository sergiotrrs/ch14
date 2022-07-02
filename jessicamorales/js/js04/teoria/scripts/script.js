console.log("Sesión JS04");

//Como definir un arreglo **********************

const miArreglo = ["dato String",false,23,null,{a:12, b:34}];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable**
const frutas=["mango","platano","melón","Guanábana","aguacate", "kiwi"];
let fruta = frutas.pop(); //Eliina el último elemento del arreglo
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al final del arreglo******************
frutas.push("uvas"); //Agregamos el elemento al final del arreglo
                     //y devuelve la longitud del arreglo
console.log(frutas.join(" - ")); 
//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al inicio del arreglo ********************
console.log(frutas.unshift("fresa"));
console.log(frutas);
//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * FIFO: First In First Out
 * LIFO: Last In First Out
 * 
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

/**
 * for ([initization]; [condition]; [final-expression])
 * statement
 */
for (let index = 0; index < 10; index = index + 1)
console.log(index);
console.log("Instruccion al final del for");
//------------------------------------------------------------------
for (var maga = 0; maga < 5; maga = maga + 1){
    console.log(maga);
}
console.log("Valor de index " + maga);//Esto no está al alcance de la variable
//---------------------------------------------------------------------
for(let index = 10; index > 0; index = index - 1) console.log(index);
//--------------------------------------------------
//index = index + 1 -> index++;
//Utilizar dos variables en mi ciclo for
let index = 0, a=0;
for(; index < 3; index++, a+=2){
    console.log(a, index);//0 - 0//2 - 1//4 - 2 //No cumple 6 - 3 
}
console.log(`final index ${a} - ${index}`);//6 - 3

//El ciclo for puede no llevar parámteros de inicialización, evaluación y expresión final

/*index = 0;
for(; ; ){
    if(index > 3) break; //Si no ses pone una condición y break no se romperá el for y hará un ciclo infinito
    console.log(index);
    index;
}*/

//El ciclo for podría no tener un cuerpo (bloque) de instrucciones
let i = 0;
for (; i < 100; i++);
console.log(i);

/**
 * Sintaxis del cilo while
 * while (condition)
 * statement
 */

//while(confirm("¿Quieres continuar?") ) console.log("Pulsó aceptar");
/*i=0;
while(!confirm("¿tu numero es " + i +" ?")){
    console.log("Su número no es " + i);
    i++;
}
console.log("Su número pensado es " + i);*/

console.log("\n -------------------");
i=0;
while(i < 10){
    if(i==5)break;
    console.log("Valor de i en while " + i);
    i++;
}

//El hermano de while, se llama do-while******************
/*let  numConciertos=1;
do{
    console.log("Veces que fui al concierto: " + numConciertos);
    numConciertos++;
}while(confirm("¿Puedo ir al concierto? "));

let  numMuseo=1;
while(confirm("¿Puedo ir al museo?")){
    console.log("Veces que fui al museo: " + numMuseo);
    numMuseo++;
}*/

let resultado = suma(4,3);
/**
 * Suma dos números y devuelve el resultado
 * @param {number} a primer número a sumar
 * @param {number} b segundo número a sumar
 * @returns suma de a + b
 */
function suma(a , b){
    return a + b;
}

//Formar de iterr un arreglo***********/
let carros = ["VW", "Audi", "Seat", "BMW"];
//Usando estructuras for 
for(let i=0; i < carros.length; i++) console.log("Con for " + carros[i]);
//Usando forEach
carros.forEach((auto) => console.log("Con for each " + auto));
//Usando for in
for(let auto in carros) console.log("Con for-in " + auto); //Da el índice de cada elemento
for(let auto in carros) console.log("Con for-in " + carros); //Da los elementos del arreglo

//Usando for of
for(let auto of carros) console.log("Con for-of " + auto);

//Arreglos de dos dimensiones
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"], 
    ["Miri", "Emiliano", "TuTiaAbi", "Olin"]];
    //[F]eliz [C]umpleaños
console.log(cohortes[0][2]);
/**
 * Marihan
 * Adrián
 * Gustavo
 * Miri
 * Emiliano
 * TuTiaAbi
 */

console.log("Con for in");
for(let f in cohortes){
    for(let c in cohortes[f])console.log(cohortes[f][c]);
}

console.log("Con for-Each");
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

console.log("Con for anidados");
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

console.log("Con for of");
for(let f of cohortes){
    for(let c of f)console.log("for of " + c);
}
