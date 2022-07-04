console.log("Sesion JS04");

//Como definir un arreglo
const miArreglo = ["dato String", false, 23, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el ultimo dato del arreglo y pasarlo a una variable
const frutas=["mango", "platano", "melon", "guanabana", "aguacate", "kiwi"];
let fruta = frutas.pop(); //Se elimina el ultimo elemento del arreglo
//y devuelve el elemneto eliminado
console.log(frutas.join(" *"));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al final del arreglo
console.log(frutas.push("uvas")); //Agregamos el elemento al final del arreglo
//y devuelve la longitud del arreglo
console.log(frutas.join("-"));

//Eliminar el primer elemneto del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join("-"));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al incicio del arreglo
console.log(frutas.unshift("fresa"));
console.log(frutas.join("-"));

//Metodos que se utilizarian para hacer un FIFO en arreglo
//FIFO unshift - shift //segunda op push-shift (esta es)
//LIFO push - pop

/**
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */

for (let index = 0; index<10; index = index + 1)
console.log(index);
console.log("Instruccion al final del for");

//index = index +1 es igual a index++
//Utilizar dos variables en mi ciclo for
/////////para que se muestren de 2 en 2 : , a+2
for (let index = 0, a=0; index <3; index++, a++){
    console.log(a, index)
}

//index=index + 1 => index++;
//Utilizar dos variables en mi ciclo for
let index = 0, a=-0;
for (; index <3; index++, a+2){
    console.log(a, index);//0-0//2-1//4-2//No cumple 6-3
}
console.log(`final index ${index}- ${a}`);

//El ciclo for, puede no llevar parametros de inicializacion, evaluacion y expresion final
index = 0;
for (  ;  ; ){
    if(index>3) break;
    console.log(index);
    index++;
}

//El ciclo for podria no tener un cuerpo (bloque) de instrucciones.
let i = 0
for (; i<100; i++);///se imprime solo el 100 por el ; 
console.log(i);

/**
 * Sintaxis del ciclo while
 * while (condicion
 * statement
 */
//while (confirm ("Quieres continuar?") ) console.log("Pulso aceptar");

//i = 0;
//while (i <10){
  //  console.log("Valor de i en while " + i);
    //i++;
//}

i = 0;
while (i<10){
    if(i==5)break;
    console.log("Valor de i en while " + i);
    i ++;
}

//El hermano de while se llama Do-while
let numConciertos=1;
do {
console.log("Veces que fui al concierto " + numConciertos);
numConciertos++
}while(confirm ("Puedo ir al concierto?"));

let numMuseo = 1;
while (confirm ("Puedo ir al museo?")){
    console.log("Veces que fui al museo " + numMuseo);
    numMuseo++;
}

///Formas de iterar un arreglo
let carros = ["VW", "Audi", "Seat", "BMW"];
//usando estructura for
for (let i=0; i<carros.length; i++) console.log("Con for" + carros [i]);

//usando forEach
carros.forEach( (auto) =>console.log("Con for each " + auto));

//Usando for in
for(let auto in carros) console.log("Con for-in " + carros[auto]);

//Usando for of
for (let auto of carros) console.log("Con for of " + auto);

//Arreglos de dos dimensiones
const cohortes = [ 
    ["MArian","Adrian", "Gustavo"],
     ["Miri", "Emiliano", "Abi"]];
    //[F]eliz [C]umpleanos
console.log(cohortes[0].lenght);
cohortes.forEach( fila =>fila.forEach(columna=>console.log("for each " + columna)));
for (let fila in cohortes){
    for (let columna in cohortes[fila])console.log("for in " + cohortes[fila[columna]]);
}
for(let i=0; i <cohortes.lenght; i++){
    for(let j=0;j<cohortes[i].lenght;j++){
        console.log("for" + cohortes[i][j]);
    }
}
for (let fila of cohortes){
    for(let columna of fila)console.log("for of " + columna)
}















