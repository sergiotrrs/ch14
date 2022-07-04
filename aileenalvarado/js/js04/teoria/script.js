console.log("Sesion js04");

//Como definir un arreglo ****

const miArreglo = ["dato String", false, 23, null, { a: 12, b: 34 }];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//pop elimia el utimo dato y lo pasaa una variable 
const frutas = ["mango", "platano", "melon", "Guanabana", "aguacate", "kiwi"];
frutas.pop();
console.log(frutas.join());
console.log("fruta eliminada" + frutas);

//Agregar un elemento al final del arreglo 
console.log(frutas.push("uvas")); //Agregamos el elemento al final del arreglo 
// y devuelve la longitud del arreglo
console.log(frutas.join(" - "));

console.log(frutas.join(" - "));
//Eliminar el primer elemento del arreglo y pasarlo a una variable 
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada");
//Agregar un elemento al inicio del arreglo 
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Metodos que se utilizarian para hacer un fifo en arreglo 
//FIFO: shift -> pop
//lifo: unshift - pop 
/**
 * FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */

for (let index = 0; index < 10; index = index + 1)console.log(index);
//console.log("valor de index + index"); Esto no esta e el alcance la de variable
//console.log("Instruccion al final del for"); 


let index = 0; a = 0;
for (; index < 3; index++, a += 2) {
   console.log(a, index);
}
console.log(`final index ${a} - {index}`); //6 - 3

//El ciclo for, puede no llevar parametros de inicializacion, evaluacion y expresion final
index = 0;
/*for (; ;){
   if(index>3){
      break;
   } 
 console.log(index); 
 index++;
} */
//console.log(`final index ${a} - {index}`); //6 - 3 

//El ciclo for podria no tenr un cuerpo (bloque) de instrucciones. 
let i = 0
for (; i < 100; i++)
   console.log(i);

//Sintaxis del ciclo while 
//whie (condition)
//statement 

//devuelve un true o un false
//while(confirm("Quieres continuar?")) 
//console.log("Pulso aceptar");

//i = 0;
//while(i < 10 ){
//console.log("Valor de i en while " + i) 
//i++;
//}

i = 0;
while (i < 10) {
   if (i == 5) break;
   console.log("Valor de i en while " + i);
   i++;
}

//El hermano de while, se llama do while 
/*let numConciertos =1;
do{
console.log("Veces que fui al concierto? " + numConciertos); 
numConciertos++
}while( numConciertos < 5 ); */



//for in 
//sirve para iterar un arreglo  
//Formas de iterar un arreglo
let carros = ["VW", "Audi", "Seat", "BMW"];
//usando estructura for
for (let i = 0; i < carros.length; i++){
   console.log(carros[i])
}
 


//Usando for each, se declara la variable auto, directamente en los parentesis
carros.forEach( auto =>{ 
   console.log("Con for each " + auto)  
});

//usando for in 
for (let auto in carros) console.log("Con for-in " + carros[auto]); //itera y da el indice
for (let auto of carros) console.log("Con for-of " + carros); //itera y da el dato

//const cohortes = [ ["Marihan", "Adrian", "Gustavo"] , 
//["Miri", "Emiliano", "TuTiaAbi"]]; 
//console.log(cohortes[0][2]); //El primer corchete indica la fila, el segundo la columna [F]eliz [C]umpleaños
//Marihan
//Adfrian 
//Gustavo 
//Miri 
//Emiliano 
//TutiaAbi

//let nombres = ["Marihan", "Miri","Adrian", "Gustavo", "Emiliano", "TuTiaAbi"]
//for(let i = 0; i < nombres.length; i++); 
//console.log("") 

//Arreglos de dos dimensiones
const cohortes = [
   ["Marihan", "Adrian", "Gustavo"],
   ["Miri", "Emiliano", "TuTiaAbi"]];

cohortes.forEach(fila => fila.forEach(columna => console.log(columna)));

for (let i = 0; i < cohortes.length; i++) {
   for (let j = 0; j < cohortes[i].length; j++) {
      console.log(cohortes[i][j]);
   }
}
//---- Con for-in -----
for (let fila in cohortes) {
   for (let columna in cohortes[fila]) console.log(cohortes[fila][columna]);
}








