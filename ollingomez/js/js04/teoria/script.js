console.log("Sesión JS04");

//Como definir arreglos
const miArreglo=["dato String",false,23,true];
console.log(miArreglo);
console.log(miArreglo.toString());//convierte un arreglo tipo string 
console.log(miArreglo.join("-"));//convierte un arreglo a tipo string y los separa con un gion

//pilas y colas
//Eliminar el ultimo dato del arreglo y pasarlo a una variable
const frutas=["mango","plátano","melón","Guanábana","aguacate","kiwi"];
let fruta=frutas.pop();//metodo pop elimina el ultimo elemento del arreglo y 
                        //tambien lo puede guardar en una variable
//los objetos tiene atributos y metodos
//atributos: carateristicas del objeto y metodos: es la accion del objeto
console.log(frutas.join(" * "));
console.log("Fruta eliminada es "+fruta);

//agregar un elemento al final del arreglo*********************************************
frutas.push("uvas");//Agregamos el elemento al final del arreglo y
console.log(frutas.push("uvas"));     //devuelve la longitud del arreglo
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift(); //metodo que elimina el primer elemento
                        //y loguarda el elemeto ilimido
console.log(frutas.join(" - "));
console.log("Fruta eliminada "+ fruta);

//Agregar un elemento al inicio del arreglo ***********************

console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Método que se utilizaria para hacer un FIFO en arreglo

/**
 * FIFO: push - shift  //el primer elemento primero en salir
 *  []->[a,b,c,d,e]->[b,c,d,e]
 * LIFO: push - pop    //el ultimo en entra primero en salir
 *  []->[a,b,c,d,e]->[a,b,c,d]
 */ 

/**for([Inicialización];[Condicion];[Expresion final])
 * statement 
 */

//Utilizar dos variables en ciclo for
for (let index = 0; index <10; index=index+1) console.log(index);
    console.log("Instrucción al final del for");
//--------------------------------------------------------
for(let index=0, a=0; index<3; index++, a+=2){
    console.log(a,index);
}

//otra forma de poner metodo for
let index=0, a=0;
for(; index<3; index++, a+=2){
    console.log(a,index);// 0-0//2-1//4-2//No cumple 6-3
}
console.log(`final index ${a} - ${index}`);//6-3

//El ciclo for, puede no llevar parametrod de inicialización, evaluación y expresión final

index=0;
for( ; ; ){
    if(index>3) break;
    console.log(index);// 0-0//2-1//4-2//No cumple 6-3
    index++;
}
//El ciclo for podria no tener un cuerpo (bloque) de instruciones.
let i=0;
for(; i<100; i++);
console.log(i);

//*******for in */
//Sirve para iterar un arreglo
//Formas de iterar un arreglo
const carros=["VW","Audi","Seat","BMW"];
//Usando estructura for
console.log("\n Tradicional----------------------");
for(i=0; i<carros.length;i++) console.log("Con for: " +carros[i]);
//Usando forEach
console.log("\n forEach----------------------");
carros.forEach((auto)=>console.log("Con forEach: "+auto));
//Usando for-in
console.log("\n for-in----------------------");
for(let auto in carros)console.log("Con for-in: " +carros[auto]);
//Usando for-of
console.log("\n for-of----------------------");
for(let auto of carros)console.log("Con for-in: " +auto);

//Arreglos de dos dimensiones
const cohortes = [["Marian","Adrian","Gustavo"]
                ,["Miri","Emiliano","TutiaAbi","Ollin"]];
//[F]eliz [C]umpleños, [F] fila y [C] columna
console.log(cohortes[0]);
console.log(cohortes[0][2]);

//Tradicional
console.log("\n Tradicional ----------------------");
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

//ForEach
console.log("\n ForEach----------------------");
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

//Con for-in 
console.log("\n For-in----------------------");
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

//Con for-of funciona muy bien para string
console.log("\n For-of----------------------");
for(let fila of cohortes){
    for (let columna of fila) console.log(columna);
}



/**
 * Sintaxis del ciclo While
 * while(condition)
 * statement
 */
//El metodo confirm()debuelve un true o folse
//while(confirm("¿Quieres continuar?")) console.log("Pulsó aceptar");
/*i=0;
while(!confirm("¿Tu número es: "+i+"?")){
    console.log("Su número no es: ", i);
    i++;
} console.log("Su número es: ", i);*/

/*
i=0;
while(i<10){
    console.log("Valor de i en while "+ i);
    i++;
}

console.log("\n ----------------------");

i=0;
while(i<10){
    if(i==5)break;//otra forma if(i<5);
    console.log("Valor de i en while "+ i);
    i++;
}

//El hermano de while, se llama Do-while+++++++++++
let numConciertos=1;
do{
    console.log("Veces que fui al concierto "+ numConciertos);
    numConciertos++;
}while(confirm ("¿Puedo ir al concierto? "));

console.log("\n ----------------------");

let numMuseo=1;
while(confirm("¿Puedo ir al museo?")){
    console.log("veces que fui al al museo: " + numMuseo);
    numMuseo++;
}
*/