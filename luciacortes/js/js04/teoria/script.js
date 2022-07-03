console.log("Sesión JS04");
//Cómo definir un arreglo ***************************

const miArreglo= ["dato String", false,23, null, true];
console.log (miArreglo);
console.log(miArreglo.toString());// método to srign lo va a separar por coma
//Método to join para separarlo por el caracter que quieras.
console.log(miArreglo.join("-"));//aquí se separa por guiones.

//Eliminar el último dato del arreglo y pasarlo a una variable.
const frutas = ["mango", "plátano","melón", "guanábana","aguacate","kiwi"];
//frutas.pop();// da un retorno este método, retorna el elemento eliminado si lo guardo en una variable
let fruta = frutas.pop();// a este punto ya eliminé dos.
console.log(frutas.join (" * ") );
console.log("Fruta eliminada " + fruta );

//Agragar un elemento al final del arreglo***************
console.log(frutas.push("uvas"));//Agregamos el elemento al final del arreglo
                    //devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada "+fruta);

//Agregar un elemento al inicio del arreglo **********************
console.log(frutas.unshift("fresa"));
console.log(frutas.join("-"))

//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * First Input First Output
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * 
 * Last Input First Output
 * LIFO: push - pop
 *       0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */
//For
//for ([initialization]; [condition]; [final-expression])
//statement

//Paso 1 la inicialización pasa al dos que ejecuta la condición el 3 es el statment y el 4 la expresión final
//regresa al paso dos que es verificar la condición.//Igual que if no es necesario aplicar las llaves puedo porner el console.log Hasta que la condición es falsa termina.
//Igual que if no es necesario aplicar las llaves puedo porner el console.log solo ejecuta una instrucción. PAra hacer varias instrucciones se realiza con las llaves, a eso se le llama bloque.
for (let index = 0; index < 10; index = index + 1)
console.log(index);
console.log("Instrucción al final del for");

//******************************************* */
{
    let a=0;
for (let index = 0; index < 3; index++) {
    a++;
    console.log(a, index);    // a es una variable global
}
}

//Para liberar memoria se puede declarar la memoria dentro utilizando dos variable en miciclo
//la variable debe ser separada por comas.
for (let index=0, a=0;index<3; index++, a+=2){ //esta iterando de dos en dos
    console.log(index,a);
}
// for con la vairable fuera
let index= 0, a=0;
for(;index<3;index++, a+=2){
    console.log(a, index);// va imprimiendo 0-0//2-1//4-2// No lo cumple 6-3 pero se generó la instrucción ahi se detuvo y por eso lo imprime en el console final. 
}
console.log(`final index ${index}- ${a}`); //3 -6
// El ciclo for puede no llevar parámetros de inicialización, evaluación y expresión final.
index= 0, a=0;
for( ; ; ){
    if (index>3) break;// pero sí o sí necesita parámetro de comparación se puede poner fuera con la palabra reservada break
                        //no se recomienda hacer esto. Si quiero algo asíes mejor con un while
    console.log (index);
    index++;
}
//El ciclo for podría no tener un curepo (bloque)de instrucciones
let i = 0;
for (; i<100; i++);// este punto y coma cierra las instrucciones. 
console.log(i);

/*
* Sintaxis del ciclo while
* while (condition)
* statement
*/
//while (confirm ("¿Quieres continuar?") ) console.log("Pulsó aceptar");
i=0
while (i<10){
    if (i===5)break;// i<5
    console.log(`valor de i en while ${i}`);//Se imprime del 0 al 4
    i++;// para algo así es mejor un ciclo for.
}
//Este no determina el número de veces que quieres que se realice. A diferencia del for que determinas cúantas veces.
// Se va a detener cuando la instrucción sea falsa
console.log("\n es un salto de línea");

// Hermano de While-> Do-while***********************
/*let numConciertos=1;
do {
console.log(`¿Cuántas veces fui al concierto? ${numConciertos}`);
numConciertos++
}while(confirm("¿Puedo ir al concierto?"));

let numMuseo= 1;
while ( confirm("¿Puedo ir al museo?")){
    console.log(`Veces que fui al museo ${numMuseo}`);
    numMuseo++;
}*/
let resultado =suma(4,3);
/**
 * Suma dos números y devuelve el restultado
 * @param {number} a primer número a sumar 
 * @param {number} b segundo número a sumar
 * @returns suma de a+ b
 */
function suma (a, b){
    return a + b;
}
//Formas de iterar un arreglo************
const carros= ["VW","Audi", "Seat","BMW"];
//Usando estructura for
for (let i=0; i<carros.length; i++) ; console.log("Con for " + carros[i]);
//Usando forEach
carros.forEach((auto)=>console.log("Con for-Each " +auto));
//Usando for in TE dice el índicepor eso pusimo carros[auto]
for (let auto in carros) console.log("Con for-in "+ carros[auto]);
//Con for of te da el dato por eso podemos poner soolo auto
for (let auto of carros) console.log("Con for-of "+ auto);

//Arreglos de dos dimensiones
const cohortes =[ 
    ["Marihán","Adrián",  "Gustavo"], 
    ["Miri",   "Emiliano","Abi"] ]
    //Estamos accediendo a Gustavo porque se encuentra en la fila 0 y Columna 2
    //FC siempre me dará primero la fila y la columna
console.log(cohortes[0][2]);
//Con for in
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log("for-in " + cohortes[fila][columna]);
}
//Con for of
for (let fila of cohortes){
    for (let columna of fila)console.log("for-of "+columna)
}
//Con for
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log("Particpante " +cohortes[i][j]);
    }
}
//con for Each.
cohortes.forEach (fila => fila.forEach (columna => console.log (columna) ) )
// el dato fila no es variable es el índice.
