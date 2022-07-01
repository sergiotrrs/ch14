console.log("Sesión JS04");

//Cómo definir un arreglo
const miArreglo=["dato String", false, 23, null, true];
console.log(miArreglo.toString()); // 'dato String,false,23,,true
console.log(miArreglo.join("-")); // 'dato String-falsee-23--true

//Eliminar último dato del arreglo y pasarlo a una variable**
const frutas=["Mango","Plátano","Melón", "Guanábana", "Aguacate","Kiwi"];
let fruta = frutas.pop(); // .pop() es un método
console.log(frutas.join(" * "));
console.log(`Fruta eliminada: ${fruta}`);  //¡¡NO regresa un string!!

//Agregar un elemento al final
let long = frutas.push("uvas"); //Devuelve longitud del arreglo
console.log(long)
console.log(frutas.join(" - ")); 

//Eliminar primer elemento y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log(`Fruta eliminada ${fruta}`);

//Agregar un elemento al inicio del arreglo
console.log(frutas.unshift("fresas"))
console.log(frutas.join(" - "));

//Métodos para hacer un FIFO en un arreglo i(0) es cabeza
/**
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

//Ejercicio for
for (let index = 0, a=0; index<10; index++, a++) console.log(index,a); //se pueden declarar dos variables dentro
console.log("instrucción al ifinal del for");
//Si el valor del index se aleja de la condición NO SE CREA un loop INFINITO.
//La variable se desborda cuando el valor es muy grande y se reinicia su valor.

//Ciclo for con dos variables
let index=0, a=0;
for ( ; index<3; index++,a+=2){
    console.log(a,index)
}
console.log(`final index: ${index}, final a: ${a}`); //6 - 3

// Ciclo for, puede no llevar parámetros de inicialización, evaluación y expresión final
index =0;
for(;;){
    if(index>3) break;
    console.log(index);
    index++;
}

//El ciclo for podría no tener un cuerpo (bloque) de instrucciones
let i=0;
for (;i<100;i++);
console.log(i); //100
