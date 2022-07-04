console.log("Sesión JS04");

//como definir un arreglo*****
//OBJETO ENTRE LLAVES{}
const miArreglo = ["Dato String", false, 23, true];
console.log(miArreglo);
//Como convertir este dato en string
console.log(miArreglo.toString);
//Método Join podemos indentificar el caracter que se separe
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo aa una variable****
const frutas = ["mango", "platano", "melón", "Guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop(); //Con .pop se elimina el último elemento del arreglo, pero te da un return con la arreglo eliminado llamando a la función
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al final del arreglo**
console.log(frutas.push("uva")); //Aregamos el elemento al final del arreglo
                    //y devuelve la longitud del arreglo
console.log(frutas.join("-"));
//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join("-"));
console.log("Frutas eliminada " + fruta);
//Agregar un elemento al inicio del arreglo*******
console.log(frutas.unshift("fresa"));
console.log(frutas.join (" - "));
//Metodos que utilizarian para hacer un FIFO en arreglo
//Unshift-----> pop
/**
 * FIFO: unshift - shift
 *     0,1,2,3 ---->4,0,1,2,3       
 *     [a,b,c,d] ---->[a,b,c,d,e]----->[b,c,d,e]
 * LIFO: push- pop
 *   0,1,2,3          0,1,2,3,4
 *   [a,b,c,d]  ---> [a,b,c,d,e] ----> [a,b,c,d]
 */
/** 
const cars = ["BMW", "Volvo"];

let text = "";
for (let i = 0; i< cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
//
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */
/*index = 0;
for (let index = 0; index<10; index = index + 1)
console.log(index);
console.log("Valor de index" + index);
console.log("Instrucción al final del for");

///*********
/*for (var maga = 0; maga<5; maga = maga + 1){
    console.log(maga);
}
var maga = 30;
var maga = 29;
console.log("valor de MAGA " + maga);
//--------------------------------------------------
for (let index = 10; index > 0; index = index -1 ) console.log (index);
//-----------------------------------------
//index = index + 1 -> index++;
//Utilizasr dos variables en mi ciclo for//
/*let index = 0, a =0;
for(; index < 3; index++, a+=2){
    console.log(a , index); //0-0//2 - 2// 4 -2// No cumple 6-3
}
console.log (`final index ${index} - ${a}`); //  6- 3

//El ciclo for, puede no llevar parametro de inicialización, evalación y expresión final
/*index = 0
for(  ; ;  ){
    if (index>3) break;
console.log(index);
index++;
}
//El ciclo for podría no tener un cuerpo (bloque ) de instrucciones. 
let i = 0
for (i=0; i<100; i++);
console.log(i);
/**
 * Sintaxis del ciclo while
 * while (condition)
 * statement
 * 
 */

//while ( confirm ("Quieres continuar") ) console.log("Pulso aceptar");
//i=0;
/*
while (i<10){
    console.log("Valor de i en while " + i);
    i++;
}
while (!confirm (" ¿Tú número es " i " ?") ){

}
*/
//El hermano de while, se llama Do-while
//La diferencia es que primero pregunta y después realiza la condición
//Hace por lo menos una vez el ciclo 
/*let numConciertos
do{
    console.log ("Veces que fui al concierto? " + numConciertos);
    numConciertos++
} while( confirm ("¿Puedo ir al concierto? ") );

let numMuseo = 1;
while ( confirm (" ¿Puedo ir al museo ? ")){
    console.log( "Veces que fui al museo " + numMuseo );
    numMuseo++;
}
*/
//Arreglos de dos dimensiones
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
for (let i= 0; i<cohortes.length; i++){
        for (let j=0; j<cohortes.length;j++){
                console.log(cohortes[i][j]);
        }  
    }

const cohortes1 = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes1.forEach(fila=>fila.forEach(columna=>console.log(columna)));

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

