console.log("Prueba de conexión, Sesión JS04");


//Cómo definir un arreglo************************************

const miArreglo = ["Dato string", false, 23, null, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable****

const frutas= ["Mango", "Plátano", "Melón", "Guanábana", "Aguacate", "Kiwi"];
let fruta = frutas.pop();  //Con el pop se elimina el último dato del arreglo y lo guardo en una variable
console.log(frutas.join(" * "));
console.log("Fruta eliminada "+ fruta);

// Agrega un elemento al final del arreglo ************************************

frutas.push("uvas"); //Agregamos el elemento al final del arreglo y devuelve la longitud del arreglo

console.log(frutas.join(" - "));

// Eliminar el primer elemento del arreglo y pasarlo a una variable

fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada "+ fruta);

//Métodos que se utilizarían para hacer un FIFO en arreglo:
/**
 * FIFO: push - shift
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push -pop
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 */

/**
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */

for(let index = 0; index<10; index= index+1) console.log(index);
//console.log("valor de index= " + index) Esto no está en el alcance de la variable
console.log("Instrucción al final del for");

//--------------------------------------
for(var maga =0; maga <5; maga= maga + 1){
    console.log(maga);
}
console.log("Valor de MAGA= " + maga); //Esto no está al alcance de la variable
//-------------------------------------------
for(let index = 10; index >0; index = index -1) console.log(index);
//-----------------------------------
// index = index + 1 ---> index ++;

let index = 0, a =0;
for(; index < 3; index ++, a+=2){
console.log(a, index); // 0-0  // 2 - 1 // 4 - 2 // 6 - 3
}
console.log("final index " + a + index);  // 6 - 3

//El ciclo for, puede no llevar parámetros de inicialización, evaluación y expresión final

index = 0;

for ( ; ; ){
    if (index>3) break;
    console.log(index);
    index++;
}

let i= 0;


i=0;
while(i<10){
    if (i == 5) break; //1<5
    console.log("Valor de i en while " + i);
    i++;
}

//El hermano de While se llama Do while ++++++++++++++++++++++++++++++++++++++++++

/*
let numConciertos=1;

do{
    console.log("Veces que fui al concierto? "+numConciertos);
    numConciertos ++;
} while (confirm("Puedo ir al concierto? "));

let numMuseo = 1;
while (confirm("¿Puedo ir al museo? ")){
    console.log("Veces que fui al museo: "); + numMuseo;
    numMuseo ++;
}
*/

// formas de iterar un arreglo ***************************************

const carros = ["VW","Audi","Seat","BMW"];
//Usando estructura for
//for(let i=0; i<carros.length(); i++) console.log("Con for: " + caros[i]);
//usando forEach
//carros.forEach((auto) => console.log("Con forEach: "+ auto));
// usando for in
//for(let auto in carros) console.log("Con for-in: "+ carros[auto]);


//arregos de dos dimensiones

const cohortes= [
    ["Marihan", "Adrián"  ,"Gustavo" ],
    ["Miri"   ,"Emiliano" ,"TuTíaAbi"]];
        //[F]eliz [C]umpleaños
console.log(cohortes[0]);
/**
 * Marihan
 * Adrián
 * Gustavo
 * Miri
 * Emiliano
 * TuTíaAbi
 */

//PAra imprimir


for(let i=0; i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

// con forEach
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

// con for in

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}