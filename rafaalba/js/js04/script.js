console.log("Sesión JS04");

//Arreglos ***********************************************

const array = ["dato string", false, 23, true];
console.log(array);
console.log(array.toString());
console.log(array.join("-"));

//Pilas (Pop y Push)***************************************
//LIFO: Ultmo en entrar Primero en salir
//FIFO: Primero en entrar Primero en salir

// Pop : Elimina el ultimo dato del arreglo
const frutas = ["mango", "platano", "melón", "guanabana","aguacate", "kiwi"];
let fruta = frutas.pop();
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta );

//Atributo: carácteristicas
//Método:

//Push: Agregar un elemento al arreglo *************************
console.log(frutas.push("uvas")); //agregamos un elemento al final 
                     // y devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Shift: Elimina el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta );

//Agregar un elemento al inicio del arreglo**********************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

/** 
* FIFO: push -> shift : Agrega inicio -> Elimina inicio
*       0,1,2,3
*  [a] [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
*
* LIFO: push -> pop : Agrega inicio -> Elimina final
*       0,1,2,3    
*  [e] [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d]
*/

//Ciclo o Bucle For ******************************************

/* const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text; */

/*for ([inicialización]; [condición]; [expresión final];){
    statement/declaración
}*/

for (let index = 0; index<10; index = index + 1 ) 
console.log(index);
console.log("Instrucción al final del for");

//----------------------------------------------------
let index=0, a=0;
for (;index < 3; index++, a+=2){
    console.log(a , index); // 0 - 0 / 2 - 1  / 4 - 2 / No cumple 6 - 3
}
console.log(`final index ${a} - ${index}`); // 6 - 3

//El ciclo for, puede no llevar parámetros de inicialización, evaluación, y expresión final

index=0;
for ( ; ; ){
    if (index>3)break;
    console.log(index);
    index++;
}
//El ciclo for podría no tener un cuerpo (bloque) de instrucciones
let i=0
for (; i<100; i++); // por el ";" <- completa hasta el 100 y no imprime el console.log de abajo 
console.log(i);

/**
 * sintaxis del ciclo while
 * while (condition)
 *  statement
 * 
 */

//+++Comentamos para que no salga la ventana emergente de confirm
//while ( confirm("¿Quieres continuar?)") ) console.log("Pulsó aceptar");
/* i=0;
while (!confirm("¿tu numero es " + i + "?") ) { // !<-niega y confirm es ventana emergente con aceptar/cancelar
    console.log("tu numero no es "+ i);
    i++;
}
console.log("Su numero pensado es " + i); */
console.log("\n -------------"); //salto de linea con guiones

i=0;
while (i<10){
    if (i==5)break;
    
    console.log("Valor de i en while " + i);
    i++;
}
// for each/in *******************************************************
//Formas de iterar un arreglo
const cars = ["VW", "Audi", "Seat", "BMW"]
for (let i=0; i<cars.length; i++) console.log("Con for " + cars[i]);
//Usando for-each
cars.forEach((auto) =>console.log("Con for-each " + auto));
//Usando for in
for (let auto in cars) console.log("Con for-in " + cars[auto]);


//El hermano de "while" se llama "do-while" **************************
// while pide permiso (hermanito)
// do-while ejecuta y luego pregunta si puede volver a hacerlo (hermano mayor rebelde)

//+++Comentamos para que no salga la ventana emergente de confirm
/* let numConciertos=1;
do {
    console.log("Veces que fui al concierto? " + numConciertos);
    numConciertos++
} while(confirm("¿Puedo ir al concierto" ));

let numMuseo=1;
while(confirm("¿Puedo ir al museo?" ));{
    console.log("Veces que fui al museo? " + numMuseo);
    numMuseo++;
} */

let resultado = suma (4,3);
/**
 * Suma dos números y devuelve el resultado
 * @param {number} a primer número a sumar
 * @param {number} b segundo número a sumar
 * @return suma de a + b
 */
function suma(a,b){
    return a+b;
}


//Arreglos de dos dimensiones ****************************************
const cohortes = [ 
    ["Marihan", "Adrian", "Gustavo",] , 
    ["Miri", "Emiliano", "TuTíaAbi",]];
    //[F]eliz [C]umpleaños = Fila y Columna
console.log(cohortes[0][2]); // primer[] fila, segundo[] posición

//console.log(cohortes[0].length);
//for (let i=0; i<cohortes.length; i++) console.log("Con for " + cohortes[i]);
//Usando for-each
cohortes.forEach(fila => fila.forEach(columna=>console.log("Con for-each: " +columna)));
console.log("\n -------------"); //salto de linea con guiones
//Usando for in -> da indice
for (let fila in cohortes){
 for (let columna in cohortes[fila]) console.log("Con for-in: " + cohortes[fila][columna]);
}
console.log("\n -------------"); //salto de linea con guiones
//Usando for of -> da dato
for (let fila of cohortes){
    for (let columna of fila) console.log("Con for-of: " + columna);
   }