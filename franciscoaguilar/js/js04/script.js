console.log("js04");

//Como definir un arreglo 
const miArreglo = ["dato String",false,23,true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));
console.log(miArreglo.join("*"));
console.log(miArreglo.join(" "));

// Eliminar ultimo dato del arreglo y pasarlo a una variable

const frutas = ["Mango","plátano","melón","guanábana","aguacate","Kiwi"];
console.log(frutas);
let fruta = frutas.pop();
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);

//Agregar elementos al final del arreglo

console.log(frutas.push("uvas"));
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
console.log(frutas);
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("fruta eliminada: "+ fruta);

//Agregar un elemento al inicio del arreglo 
console.log(frutas);
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

/**MÉTODOS FIFO Y LIFO EN ARREGLOS
/**
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

//Ciclo FOR

for(let index = 0; index<10; index = index +1) console.log(index);
console.log("Instrucción al final del For");

for(let index = 10; index>0; index = index - 1) console.log(index);
console.log("Instrucción al final del For");

for(let index = 0, a=0; index< 3; index++,a++){
    console.log(a,index);
}
console.log("Instrucción al final del For");

for(let index = 0, a=0; index< 3; index++,a+=2){
    console.log(a,index);
}
console.log("Instrucción al final del For");

// Utilizar dos variables en el ciclo for
let index = 0, a=0;
for(; index  < 3; index++, a+=2){
    console.log(a,index); // 0-0 //2-1//4-2//No cumple peeeroo: 6-3
}
console.log(`final index ${a} - ${index}`); // 6-3


//Sin parámetros
index = 0;
for( ; ; ){
    if(index > 3) break;
    console.log(a, index);
    index++;
}

// El ciclo for podría no tener un cuerpo de instrucciones
let i=0;
for(; i<100;i++); 
console.log(i);


// // Ciclo while
// while (condition){
//     statements
// }


//while(confirm("¿Quieres continuar?")) console.log("Pulsó aceptar");
i=0;
while (i < 10){
console.log("El valor de i en while es: "+i);
i++;
}

// i=0;
// while(!confirm("tu número es " + i +" ?")){
// console.log ("Su número no es " + i);
// i++}
// console.log("Su número pensado es " + i);


i=0;
while (i < 10){
    if(i==5)break;
console.log("El valor de i en while es: "+i);
i++;
}

// El hermano de while, se llama Do-While

// let numConciertos = 1;
// do{
//     console.log("Veces que fui al concierto: "+ numConciertos);
//     numConciertos++;

// }while(confirm("¿Puedo ir al concierto? "));



/**
 * Suma de dos números y devuelve el resultado
 * @param {number} a primer numero a sumar
 * @param {number} b segundo numero a sumar
 * @returns suma de a + b
 */
function suma(a,b){return a+b;}


console.log("************************************");
// formas de iterar un arreglo*************************+
console.log("************************************");
let carros =["VW","Audi", "Ferrari","Williams", "Mercedes"];
// Usando estructura for
for(i=0; i<carros.length; i++) console.log("con for " + carros[i]);
// usando foreach
console.log("************************************");
carros.forEach((auto) => console.log("Con foreach " + auto));
//usando for in 
console.log("************************************");
for(let auto in carros) console.log("con for-in " + carros[auto]);
//usando for of
console.log("************************************");
for(let auto of carros) console.log("con for-of " + auto);

// arreglos de dos dimensiones (Matrices)
const cohortes = [
    ["Marihan","Adrián","Gustavo"],
    ["Miri","Emiliano","TuTíaAbi"]
    //[F]eliz [C]umpleaños (F:fila, C: columna)
];
console.log(cohortes[0][2]); // gustavo

let leng = cohortes.length;
console.log(leng);

console.log("For anidado************************************");
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

console.log("ForEach ************************************");   
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

console.log("ForIn ************************************");   
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
console.log("For of ************************************");   
for(let fila of cohortes){
    for (let columna of fila)console.log(columna);
}