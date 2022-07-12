console.log("Sesion JS04");

//COMO DEFINIR ARREGLOS
const miArreglo = ["dato string", false, 23, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//eliminar el ultimo dato de arreglo "FRUTAS" y pasarlo a una variable "FRUTA" ****
const frutas = ["mango", "platano", "melon", "Guanabana", "aguacate", "kiwi"];
let fruta = frutas.pop();//se elimina el ultimo elemento del arreglo
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);
//agregar un elemento al final del arreglo***************************

console.log(frutas.push("uvas")); //agregamos el elemento al final del arreglo "FRUTAS"*************
// y devuelve la longitud del arreglo

console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable*************
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("fruta eliminada " + fruta);

//Agregar un elemento al inicio del arreglo FRUTAS Y regresa la longitud del arreglo************************************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));


/**
 * FIFO: push - shift
 *       0,1,2,3      0,1,2,3,4    0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e]->[a,b,c,d]
 * 
 * LIFO: push - pop
 *       0,1,2,3    0,1,2,3,4    
 *      [a,b,c,d]->[e,a,b,c,e]->[a,b,c,d]
 */

// for (let index = 0, a=0; index <3;index++,a+=2){
//     console.log(a, index);

// }

// let index=0, a=0;
// for( ; index<3; index++, a+=2){
//     console.log(a,index);
// }
// console.log(`final index ${a} - ${index}`);

// index =0;
// for ( ; ; ){
//     if (index>3) break;
//     console.log(index);
//     index++;
// }
// //el ciclo for podria no tener un cuerpo(bloque) de instrucciones.*************
// let i= 0
// for ( ; i<100; i++); // el ; punto y coma cierra el bloque del for por eso solo imprime el 100
// console.log(i);

// sintaxis del ciclo while
// while(condicion)
// statment

// while(!confirm("tu numweo es" + i + " ? ")){
// console.log("su numero es" + i);
// i++;
// }
// console.log("su numero pensado es" + i);



 i= 0;
while (i<10){
    if (i==5) break;
    console.log("valor de i en while" + i);
    i++;
}

// //El hermano de while, se llama Do-WHILE **********************************
// let numConciertos = 1;
// do{ //DO WHILE SE EJECUTA SI LA CONDICION ES VERDADERA PERO AL MENOS SE EJECUTA UNA VEZ Y DESPUES PREGUNTA
//     console.log("veces que fui al concierto" + numConciertos);
//     numConciertos++
// } while (confirm ("¿puedo ir al concierto"));

// let nuMuseo = 1;
// while(confirm("puedo ir al museo")){// SE EJECUTA MIENTRAS LA CONDICION SEA VERDADERA
// console.log("veces que fui al museo" + nuMuseo);
// nuMuseo++;
// }
/**
 *  FOR IN
 * SIRVE PAR iteRAR UN ARREGLO
 * 
 */
const carros = ["wn", "audi", "seat", "bmw"];
//usando estructura for
for(let i=0 ; i<carros.length; i++) console.log("con for " + carros[1]);
//usando for each
carros.forEach((auto) => console.log("con for each " + auto));
//usando for in
for (let auto in carros) console.log("con for in " + carros[auto]);
//usando for of
for (let auto of carros) console.log("con for-of" + auto)

//arreglos de dos dimensiones
const cohortes = [
    ["marihan", "adrian", "gustavo"], 
    ["miri", "emiliano", "tuTiaAbi"]];

// console.log(cohortes[0] [2]);
// //primer corchete indica la fila y el segundo

// for(let auto in cohortes) console.log(cohortes[auto]);

// cohortes.forEach((d)=>console.log(d));

//for 
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

//- Con for-in -----
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
//for each
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

for (let fila of cohortes){
    for (let columna of fila) console.log(columna);
}
