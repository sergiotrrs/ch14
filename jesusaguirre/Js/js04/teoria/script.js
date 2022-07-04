console.log("sesion js04");

//como definir arreglo
const miArreglo=["dato string",false, 23,true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//eliminar el ultimo dato del arreglo y pasarlo a una varible
const frutas=["mango","platano","melon","guanabana","aguacate","kiwi"];
let fruta = frutas.pop();//se elimino el ultimo elemento del arreglo
// y devuelve el elmento eliminado
console.log(frutas.join(" * "));
console.log("fruta eliminada"+ fruta);
//agregar elemento al final del arreglo
console.log(frutas.push("uvas"));// agregamos el elemento alfinal del arreglo
// y devuelve la longitud del arreglo
console.log(frutas.join(" - "));
//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta= frutas.shift();
console.log(frutas.join(" - "));
console.log("fruta eliminada"+ fruta);
//agregar un elemento al inicio del arreglo
//frutas.unshift("fresa");//nos retorna la longitud del arreglo
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));
//ciclo for
for(let i=0; i<10;i++)console.log(i);
console.log("instruccion final del for");
//ciclo for , puede no llevar parametros de inicializacion, condicional y expresion

index =0;
for( ; ; ){
    if(index>3)break;
console.log(index)
index++;
}
//el ciclo for podria no tener un cuerpo(bloque) de instrucciones
let i=0;
for(;i<100;i++);
console.log(i);
/* 
*sintaxis del ciclo while
*while(condition)
*statement
*/
//while (confirm("quieres continuar?")) console.log("pulso aceptar");
i=0;
while(i<10){
    console.log("valor de i en while"+i);
    i++;
}
//el hermano de while, se llama do-while
/* let numConciertos=1;
do{
    console.log("veces que fui al concierto?"+ numConciertos);
    numConciertos++
}while(confirm("puedo ir al concierto?"));

let numMuseo=1;
while(confirm("puedo ir al museo?")){
    console.log("veces que fui al museo?"+ numMuseo);
    numMuseo++;
} */
let resultado = suma(4,3)
/**
 * suma de dos numeros y retorna el resultado 
 * @param {*} a primer numero a sumar
 * @param {*} b segundo numero a sumar
 * @returns suma de a+b
 */
function suma(a , b) {
    return a+b;
}
//formas de iterar un arreglo
let carros =["vw","bmw","audi","seat"];
//usando estructura for
for(let i=0; i<carros.length;i++)console.log("con for " +carros[i]);
//usando foech
carros.forEach((auto)=>console.log("con for-each "+auto));
//usando for in
for (let auto in carros)console.log("con for-in "+carros[auto]);
//arreglos de dos dimensiones
const cohortes=[
    ["marihan","adrian","gustavo"],
    ["miri","emiliano","tutiaabi",'jesus'],
];
/* console.log(cohortes[0][2]); */

for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<(cohortes[i].length);j++){
        console.log(cohortes[i][j]);
    }
}
//---- Con for-in -----
for(let fila in cohortes){
    for (let columna in cohortes[fila]){
        console.log(cohortes[fila][columna]);
    }
}
//for each
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));
//con for of
for(let fila of cohortes){
    for (let columna of fila){
        console.log("for of",columna);
    }
}
/* for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
} */

