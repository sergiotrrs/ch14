console.log("Fecha 30/06/2022")

//Como definir arreglo

const miArreglo = ["dato string", false, 23 , true];
console.log( miArreglo );

//Metodo toString para pasar de un arreglo a un string**************
console.log (miArreglo.toString());

//Metodo Join tambien para pasar de un arreglo a string pero aqui se puede 
//colocar como separarlo en este caso por el simbolo "-"******
console.log(miArreglo.join("-"));

//Metodo pop() elmina el ultimo dato del arreglo y pasasrlo a una variable****
const frutas = ["mango" , "platano" , "melon" , "guanabana" , "aguacate" , "kiwi"];
let fruta = frutas.pop(); //Se elimina el utimo resultado sin embargo se almacena en una variable
console.log(frutas.join("*"));
console.log("Fruta eliminada" + fruta);

//Agregar un elemento al final del arreglo *********************
console.log(frutas.push("uvas")); //Agregamos el elemento al final del arreglo  y devuelve la longitud del arreglo//
console.log(frutas.join("-"));

//Eliminar el primer elemento del arregloi y pasarlo a una variable******
fruta=frutas.shift();
console.log(frutas.join(" - "));
console.log ("fruta elimnada" + fruta );

//Agregar un elemto al inicio del arreglo y determina la longuitu del arreglo**********************
console.log(frutas.unshift("fresa"));
console.log(frutas.join("-"));

//Metodos que se utilizan para hacer el FIFO en arreglo
//*FIFO: push --- shift
// [a,b,c,d] -> [a,b,c,d,e] ->[b,c,d,e]
//LIFO push ---pop
// [a,b,c,d] -> [a,b,c,d,e] ->[a,b,c,d] 

//Metodos son acciones de los onjetos 
// atributo son las caracteristicas del objeto 
            //1             //2 //5        4//
//for ([inicialización]; [condicion]; [final expresion])
//stament //4

for (let index = 0; index <10 ; index = index + 1 )
console.log (index);
//console.log("valor de index" + index)
console.log("Instruccione al final del for");

//Utilizar dos variable en mi ciclo for
let index=0, a=0
for (;index<3; index++, a+=2){
    console.log(a , index); //0-0 //2-1 // 4-2 //No cumple 6-3
}

console.log (`final index ${index}-${a}`);//6-3

//El ciclo for, puede no llevar parametros de inicialización , evaluacion y expersion final
index =0;
for( ; ;){
    if (index>3) break;
    console.log(index);
    index++;
}

//El ciclo for podria no tener un cuerpo (bloque) de intrucciones
let i =0;
for (; i<100;i++);//Aqui termina la instruccion con el ; cierra nuestro ciclo
console.log(i);//Impirmer el ultimo dato porque no esta en el bloque 

/**
 * Sintaxis del ciclo while
 * while (condition)//mientras sea verdadera va ejecutar
 * statement
*/
//confimr para ventana de cancelar o aceptar
//while(confirm("Quieres continuar?")) console.log("Pulso aceptar");
i=0;
while (i<10 ){
    console.log ("valor de i es", i )
    i++;
}

i=0;
while( !confirm ("¿tu numero es" + i +"?")){
    console.log("su numero es" + i);
    i++;
}
console.log("Su numero pensado es" +i);
console.log("\n------------");

i=0;
while(i<10){
    if(i==5)break;
    console.log ("Valor de i en while"+i)
    i++;
}

//El hermano de while, se llama Do  while +++++++++++++
/**
 * do{
 * }
 * while{
 * }
 */
 console.log("\n------------");
let numConciertos=1
do{
console.log("Veces que fui al concierto"+ numConciertos);
numConciertos++
}while(confirm("¿Puedo ir al concierto"));

let numMuseo = 1
while(confirm("Puedo ir al museo")){
    console.log("veces que fui al museo"+ numMuseo);
}

let resultado= suma(4,3);
//Comnentario de finciones
/**
 * 
 * @param {number} a primer numero a sumar 
 * @param {number} b segundo numero de sumar
 * @returns suma a +b 
 */
function suma(a,b){
    return a+ b;
}
//Formas de interar un arrglo
const carros = ["VW", "Audi" , "seat" , "BMW"];
//Usando estructura for
for (i=0; i<carros.length;i++) console.log("Con for" + carros[i]);
//Usando for weah
carros.forEach ( (auto) => console.log ("Con for-each" +auto) );
//usando for in Nos da el indice
for (let auto in carros) console.log("Con for in" + carros [auto]);
//usando for of
for (let auto of carros) console.log("Con for of" + auto);


//Arreglos de dos dimensiones
const cohortes = [
     ["Mariah" , "Adrian" , "Gustavo"] , 
     [ "Miri", "Emiliano" , "Tutiabi"] ];
console.log(cohortes[0]);// Imprime el los tres elementos "Mariah" , "Adrian" , "Gustavo"
//El pirmer cochorte la fila la segundo columna ,  feliz cumpleaños
console.log(cohortes[0][2]);//Imprime gistavo 

console.log("Tradicional")
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

console.log("for each");
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));
// ---- Con for-in -----
console.log("in")
for(let fila in cohortes){
     for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
 }
 console.log("of")
 for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}
