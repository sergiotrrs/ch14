console.log("Sesión JS04");

const miArreglo=["dato String", false, 23, null];

/*Imprimir arreglo( ver como me lo da).
*/
console.log(miArreglo);


//toString me imprime los elementos separados por coma
/*null lo imprimira como "", porque es vacio*/
console.log(miArreglo.toString());

//join, me los separa con el simbolo que desee
console.log(miArreglo.join("/"));
console.log(miArreglo.join(" "));

const frutas=["mango","pepino","melón","guanábana","aguacate","kiwi"];

//Eliminar el ultimo dato
let fruta=frutas.pop();
console.log(frutas.join(" * "));
console.log("Fruta eliminada:"+fruta);

//Agregar fruta al final del arreglo
frutas.push("uva"); // Agregamos al final del arreglo
                    // y devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta=frutas.shift();
console.log(frutas.join(" * "));
console.log("Fruta eliminada:"+fruta);

//Agregar un elemento al inicio del arreglo y retorna longitud del nuevo arreglo
frutas.unshift("fresa");
console.log(frutas.join(" * "));



/**
/**
 * FIFO: push (agregar) - shift(sacar)
 *  i    0,1,2,3  <--- direcccion
 *      [a,b,c,d] ---- [a,b,c,d,e] ---- [b,c,d,e]
 * LIFO: push(agregar) - pop(sacar)
 *  i    0,1,2,3      0,1,2,3,4     <----- direccion
 *      [a,b,c,d] ---- [a,b,c,d,e] ----- [a,b,c,d] 
 */
/***************************COLAS ******************************/
console.log("COLA");
const cola=[];
console.log(cola.toString());
cola.push(1);
console.log(cola.toString());
cola.push(2);
console.log(cola.toString());
cola.push(3);
console.log(cola.toString());
cola.shift();
console.log(cola.toString());
cola.shift();
console.log(cola.toString());
cola.shift();
console.log(cola.toString());



/***************************PILAS ******************************/

console.log("PILA");
const pila=[];
console.log(cola.toString());
pila.push(1);
console.log(cola.toString());
pila.push(2);
console.log(cola.toString());
pila.push(3);
console.log(cola.toString());
pila.pop();
console.log(cola.toString());
pila.pop();
console.log(cola.toString());
pila.pop();
console.log(cola.toString());


/***************************FOR********************************* */
console.log("Ejemplo for 1");
for(let i=0;i<10;i++){
    console.log(i);
}

console.log("Ejemplo for 2");
let a=0;
for(let i=0;i<10;i++){
    a++;
    console.log(i);
} 
console.log("Ejemplo for 3");
let b=0;
    for(let i=0;i<10;i++){
    b++;
    console.log(i);
} 
console.log("Ejemplo for 4");
for(let i=0,a=0;i<10;i++){
    a++;
    console.log(i+","+a);
}

console.log("Ejemplo for 5");
for(let i=0,a=0;i<10; i++, a++){
    console.log(i+","+a);
}

//el ciclo for puede no llevar parámetros e inicialización
/*
let i=0;
 for(;i<4;i++){
    console.log(i);
 }

 let index=0;
 for( ; ; ;){
    index++;
    if(index>3)
         break;
 }
 let i=0;
 //No tiene cuerpo de instrucciones
  for(;i<4;i++);

  console.log(i);
 */
/**
a+=2 -> a=a+2;
 * 
 */

/******************************FORMAS DE ITERAR UN ARREGLO************************************* */
//Sirve para iterar todo el arreglo
const carros=["VM", "audi", "Seat", "BMW"];
for(let i=0; i<carros.length;i++) {
    console.log("con for:"+carros[i]);
}

console.log("for each");
carros.forEach((auto)=>console.log("con for each:"+auto));

//Auto me da el indice de cada element
console.log("for in");
for(let auto in carros)
    console.log("Con for in:"+auto+" , "+carros[auto]);

    console.log("for of");
    //Auto me da el dato 
for(let auto of carros)
console.log("Con for of:"+auto);



/************************CICLO WHILE*********************************** */

/*
while(confirm("Quieres continuar?")){
console.log("Pulsó aceptar");
}
*/
console.log("Ejemplo while");
let i=0;
while(i<10){
    console.log(i);
    i++;
}

 //do while
 console.log("do while")
i=0;
do{
    console.log(i);
    i++;
}while(i<10)



/**
 * Realiza la sma
 * @param {number} a Primer numero
 * @param {numer} b  Segundo número
 * @returns  suma de a+b
 */

function suma(a, b){
    return a+b;
}

//Cuando ya  llamo la funcition, sobre ella ya puedo ver la descripción
suma(1,2);

/******************ARREGLOS DE DOS DIMENCIONES***************** */

console.log("Areglos de dos dimensiones")
const numeros=[
                ["1","2","3"],
                ["10","11","12"]
            ];

//Primer corchete fila, segundo corchete columna
console.log(numeros[0]); // Imprime la primera fila
console.log(numeros[0][1]) // Imprime el primer elemento de la matrix

console.log("inicio");

for (let i=0; i<numeros.length;i++) {
    for(let j=0; j<numeros[i].length;j++)
        console.log(numeros[i][j]);
}

const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach((fila)=>fila.forEach((columna)=>console.log(columna)));

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}
