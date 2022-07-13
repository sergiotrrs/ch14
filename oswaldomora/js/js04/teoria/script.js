console.log("Sesión JS04")

//Como definir un arreglo**********************

const miArreglo =["dato String", false, 23, null, true];
console.log (miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));
// Eliminar el último dato del arreglo y pasarlo a una variable***********************
const frutas=["mango", "plátano", "Guanabana", "Aguacate", "Melón", "kiwi"];
let fruta = frutas.pop(); //Se elimina el último elemento del arreglo y devuelve el elemento eliminado**********************
console.log (frutas.join(" * "));
console.log("Fruta eliminada "+ fruta);

//Agregar un elemento al final del arreglo********************
console.log(frutas.push("uvas")); 

//Agregamos el elemento al final del arreglo y devuelve la longitud del arreglo********
console.log(frutas.join(" - "))

//Eliminar el primer elemento del arreglo y pasarlo a una variable***********************
fruta = frutas.shift();
console.log(frutas.join(" - "))
console.log("Fruta eliminada "+ fruta);

//Agregar un elemento al inicio del arreglo*************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * FIFO: First in First Out
 * LIFO: Last in First Out
 * 
 * FIFO: push - shift
 *      0,1,2,3
 *     [a,b.c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 * i    0,1,2,3     0,1,2,3,4
 *     [a,b,c,d]-> [a,b.c,d,e]-> [a,b,c,d]
*/

for (let index = 0; index<10;index=index+ 1)
console.log(index);
console.log("Instrucción al final del for");

//Utilizar dos variables en mi ciclo for
let index = 0, a=0;
for (;index< 3; index++, a+=2){
    console.log(a, index);
}
console.log(`Final index ${a} - ${index}` )

//El ciclo for, puede no llevar parámetros de inicialización, evaluación, y expresión final

index = 0;
for( ; ; ){ //Hasta aquí, sería un ciclo infinito
    if (index>3) break;
console.log(index);
index++;
}

//El ciclo for podría no tener un cuerpo (bloque) de instrucciones

let i = 0
for (;i<100; i++);
console.log(i);


/**
 * sintaxis del ciclo while
 * while (condition)
 * statement
 */

//while (confirm("Quieres continuar?"))console.log("Pulsó aceptar");
i=0
while (i<10){
    console.log("Valor de i en while" + i);
    i++;
}

//El hermano de While, se llama Do-While***************
let numConciertos=1;
do{
    console.log("¿Veces que fui al concierto?" + numConciertos);
    numConciertos++;
}while(confirm("¿Puedo ir al concierto?"));

let numMuseo =1;
while (confirm("¿Puedo ir al museo?")){
    console.log("Veces q fui al museo " + numMuseo);
    numMuseo++;
}
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));
