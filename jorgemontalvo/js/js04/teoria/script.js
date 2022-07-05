console.log("Teoria 4")

//Como definir un arreglo*****************

const miArreglo = ["dato String", false, 23, null]
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("."));

//Eliminar el ultimo dato del arreglo 

const frutas=["mango","plátano","durazno","melón","aguacate","kiwi"]
let fruta = frutas.pop(); //se elimina el ulrumo elemento del arreglo
console.log(frutas.join(" * "))
console.log("Fruta eliminada " + fruta)
//Agregar un elemento al final del arreglo****************

console.log(frutas.push("uvas"));//Agregamos el elemeneto al final del arreglo.
                                 //y devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable 

fruta = frutas.shift();
console.log(frutas.join(" _ "));
console.log("Fruta eliminada " + fruta);
//Agregar un elemento al inicio del arreglo **************************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" _ "));

/**
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

for (let index = 0; index<20;index=index+1){
console.log(index)
//console.log("valor de index "+ index); // Esto no está al alcance de la variable
}console.log("Instrucción al final de for");
//-----------------------------------------------------------------
//Utilizar dos variables em mi ciclo for
for (let index = 0, a=0; index < 3; index++, a=+2) {
    
    console.log(a, index);
}
let index=0 , a=0;
for (; index < 3; index++, a+=2){
    console.log(a,index); //0-0//2-1//4-2//No cumple 6-3 
}
console.log(`final index ${a}-${index}`) //6-3
//El ciclo for, puede no llevar parametros de inicializacion, evaluacion uy expresion final

index=0
for(;;){
if (index>3) break;
console.log(index);
index ++;}

//El ciclo for podría no tener un cuerpo (bloque) de instrucciones.
let i =0
for(i=0;i<100;i++);
console.log(i);

/**
 * Sintxis del ciclo while
 * while (condition)
 *  statement
 * 
 */
//while(confirm("¿Quieres continuar?")) console.log("Pulso aceptar");
i=0;
while (i <10 ){
    console.log("Valor de i en el while: " + i);
    i++;

}

//El hermano de whilr, se llama Do-while+++++++++++++++++
/*
let numCon=1;
do {
    console.log("Veces que fui al concierto: " + numCon);
    numCon++
}while(confirm("¿Puedo ir al concierto? "))

let numMuseo=1;
while( confirm("¿Puedo ir al museo? ")){
    console.log("Veces que fui al museo " + numMuseo)
    numMuseo++;
}*/

let resultado = suma(4,2)
//para hacer el comentario de funcion necesitamos tener una funcion abajo y poner /** enter
/**
 * Suma dos números y devuelve el resultado
 * @param {number} a primer numero a sumar
 * @param {number} b segundo numero a sumar
 * @returns suma de a + b
 */
function suma(a,b){
    return a+b;
}

////////////////////formas de iterar un arreglo

const carros = ["VW","Audi","Seat","BMW"]
//Usando for
for(let i=0;i<carros.length; i++) console.log("Con for " + carros[i]);
//Usando forEach
carros.forEach((auto) => console.log("Con for each: " + auto))
//Usando for in
for (let auto in carros) console.log("Con for-in 0 " + carros[auto])
//Usando for of
for (let auto of carros) console.log("Con for-in 0 " + auto)

//Arreglos de dos dimensiones
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"] , 
    ["Miri", "Emiliano", "TuTiaAbi"]];
            //[F]eliz [C]umpleaños
console.log(cohortes[0][2])

//con for ciclado
for (i=0;i<cohortes.length;i++){
    for (j=0;j<cohortes[i].length;j++){
    console.log(cohortes[i][j]);
}}

//for each   
cohortes.forEach(fila=>fila.forEach(columna=>console.log("for each" + columna)));

//for in 
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log("for in: " + cohortes[fila][columna]);
}

// for of
for(let fila of cohortes){
    for (let columna of fila)console.log("for of: " + columna);
}


