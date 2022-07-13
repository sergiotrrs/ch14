/**
FIFO: First In First Out
LIFO: Last In First Out

 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

/*
for (let index = 0; index < 10; index = index + 1)console.log(index);

console.log("este es un mensaje en consola");

//no se declara con var porque se puede declarar varias veces y con let no se puede volver a declarar 

//index = index + 1 es igual que index++

for (let index = 10; index > 0; index = index - 1) console.log(index);

let as = 0;
for (let index = 0; index < 3; index++) {
    as++;
    console.log(as, index);
}
*/
//Utilizar dos variables en mi ciclo for
let index = 0, a = 0;
for (; index < 3; index++, a += 2) {
    console.log(a, index);
}

console.log(`final index ${index} - ${a}`);

//El ciclo for, puede no llevar parametros de inicializacion, evaluacion

index=0;
for( ; ; ){
    if(index>3)break;
    console.log(index);
    index++;
}

//El ciclo for podria no tener un cuerpo(bloque) de instrucciones.
let i=0
for(; i<100; i++);
console.log(i);
/**
 * Sintaxis del ciclo while
 * while(condition)
 * statement
 */

/*while (confirm("quieres continuar?"))console.log("Pulso aceptar");*/
/*
i=0;
while(!confirm("tu numero es " + i + "?")){
   console.log("Su numero no es " + i); 
   i++;   
}
console.log("su numero pensado es " + i);
*/
i=0;
while(i<10 ){
    if (i == 5)break;
    console.log("Valor de i en while " + i);
    i++
}

//El hermano de while, se llama do-while ++++++++++
//por lo menos se va a ejecutar una vez
// primero lo hace y luego te pregunta 
/*let numCo=1;
do{
console.log("ya me fui, alrato regreso " + numCo);
numCo++
}while(confirm("Puedo ir al concierto?"));

//primero te consulta y luego actua 
let numMu=1;
while(confirm("Puedo ir al museo?")){
console.log("Me encanta salir  " + numMu);
numCo++;
}*/


/* for in **************************/
// Sirve para iterar un arreglo

const carros= ["VW", "Audi", "seat", "BMW"];
//usando estructura for 
for(let i=0; i<carros.length; i++) console.log(carros[i]);
//usando forEach
carros.forEach((auto) => console.log("con for each "+ auto));
//usando for in
for(let auto in carros) console.log("con for in " + carros[auto]);

/************************************************/
console.log("------------------------------");
//arreglos de dos dimensiones
const cohortes=[["maian", "Adrian", "gustavo"], ["miri", "Emiliano", "tutiaAbi"]];
//primer arreglo es el index de arreglo y el segundo es de la posicion de index en ese arreglo seleccionado
console.log(cohortes[0][2]);
console.log("Primero lo primero");
console.log(cohortes[0].length); //imprime cuantos datos tiene el arreglo en posicion 0 

cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));
console.log("------------------------------");
//---- Con for-in -----
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
console.log("------------------------------");
// ---- con for ----
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

console.log("------------------------------");
//----- usando for of -----

for(let fila of cohortes){
    for (let columna of fila)console.log("Los datos son: ", columna);
}



