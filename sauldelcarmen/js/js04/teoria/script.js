console.log('Sesion JS04');

//Como definir un arreglo**************
const miArreglo = ["dato String",false,23, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el ultimo dato del arreglo y pasarlo a una variable**
const frutas = ["manzana","pera","uva","naranja","sandia","fresa","ciruela"];
let fruta = frutas.pop();//elimina el ultimo dato del arreglo y lo guarda en la variable

console.log(frutas.join(" * "));
console.log("fruta eliminada "+fruta);
//Agregar un dato al final del arreglo

let fruta2 = frutas.push("limon");//agrega un dato al final del arreglo y lo guarda en la variable
//console.log(frutas.push("uvas"));
console.log(frutas.join(" * "));
console.log("fruta agregada "+fruta2);//fruta2 es el numero de elementos del arreglo
//Eliminar el primer elemento del arreglo y pasarlo a una variable
//console.log(frutas.shift());
fruta = frutas.shift();//elimina el primer dato del arreglo y lo guarda en la variable
console.log(frutas.join(" * "));
console.log("fruta eliminada "+fruta);
//Agregar un dato al inicio del arreglo
console.log(frutas.unshift("uvas"));//agrega un dato al inicio del arreglo y lo guarda en la variable
console.log(frutas.join(" * "));
//Metodos que se utilizarian para hacer un FIFO en arreglo
/**
 *FIFO: unshift - shift
 *      [a,b,c,d] -> [e,a,b,c,d] -> [a,b,c,d]
 */

/**
 *FIFO: push - shift
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 *LIFO: push - pop
 *i      0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d]
 *
 *      FIFO extendido: 
 *push: []->[a]->[a,b]->[a,b,c]->a,b,c,d]->[a,b,c,d,e] 
 *shift: [a,b,c,d,e]->[b,c,d,e]->[c,d,e]->[d,e]->[e]->[]
 */
/*
let texto = "";
for(let i = 0; i < cars.length; i++){
	texto += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
*/


for (let index=0 ; index<10 ; index = index+1)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
//no usar var ///var maga=0; maga<5; crea un bucle infinito
for(var maga=0; maga<5; maga=maga+1){
    	console.log(maga);
} 
//var maga=30;
console.log("valor de MAGA "+maga); //no funciona por que maga es una variable local y no se puede acceder a ella fuera del for
// --------------------------------------------------------------
for (let index =10; index>0; index--)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =0; index<10; index++)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =0; index<10; index++)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =0; index<10; index++)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =0; index<10; index++)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =0; index<10; index++)
console.log(index);
//console.log("valor de index: "+index); no funciona por que index es una variable local y no se puede acceder a ella fuera del for
console.log("Introduccion al final del for");
// --------------------------------------------------------------
for (let index =10; index>0; index--) console.log(index);


for (let index = 0, a = 0; index < 3; index++, a+=2) {
	console.log(a,index);
}


const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

//---- Con for-in -----
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
// --------------------------------------------------------------
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

//**************************
//----------------------------
/**
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */                
for (let index = 0; index<10; index = index + 1 ) console.log(index);
//console.log("valor de index " + index); //Esto no está en el alcance de la variable
console.log("Instrucción al final del for");
//---------------------------------------------------------
for (var maga = 0; maga<5; maga = maga + 1 ){
 console.log(maga);
}
console.log("valor de MAGA " + maga); //Esto no está en el alcance de la variable
//---------------------------------------------------------
for (let index = 10; index>0; index = index - 1 ) console.log(index);
//---------------------------------------------------------
// index = index + 1 -> index++;
//Utilizar dos variables en mi ciclo for
let index = 0, a=0;
for (   ; index < 3; index++, a+=2) {
    console.log (a , index);//0 -0 // 2 - 1 //4 - 2 //No cumple 6 - 3
}
console.log(`final index ${a} - ${index}`); // 6 - 3 

//El cliclo for, puede no llevar parámetros de inicialización, evaluación, y expresión final
index = 0;
for (   ;  ; ) {
  if (index>3) break;  
  console.log (index);
  index++;
}
//El ciclo for podría no tener un cuerpo (bloque) de instrucciones.
let i = 0
for (; i<100; i++);
console.log(i);

/**
 * Sintaxis del ciclo While
 * while (condition)
 *  statement
 * 
 */
/*
i=0;
while ( !confirm("¿tu número es "+ i +" ?" )  ) {
  console.log("Su número no es " + i);
  i++;
}
console.log("Su número pensado es " + i);
*/
console.log("\n ------------------");
i=0;
while (i <10 ){
  if (i==5)break; //1<5
  console.log("Valor de i en while " + i);
  i++;
}
/*
let numConciertos=1;
do {
 console.log("Veces que fui al concierto? " + numConciertos);
 numConciertos++
}while( confirm ("¿Puedo ir al concierto? ") );
let numMuseo = 1;
while ( confirm ("¿Puedo ir al museo? ")){
  console.log("Veces que fui al museo " + numMuseo);
  numMuseo++;
}
let resultado = suma(4,3);
*/
/**
 * Suma dos números y devuelve el resultado
 * @param {number} a primer número a sumar
 * @param {number} b segundo número a sumar
 * @returns suma de a + b
 */
function suma(a , b){
  return a +b;
}

//Formas de iterar un arreglo***************************************
const carros = ["VW", "Audi", "Seat", "BMW"];
//Usando estructura for
for (let i=0 ; i<carros.length; i++) console.log("Con for " + carros[i]);
//Usando forEach
carros.forEach( (auto) =>console.log("Con for-each " + auto) );
//Usando for in
for (let auto in carros) console.log("Con for-in " + carros[auto]);
//Usando for of
for (let auto of carros) console.log("Con for-of " + auto);

//Arreglos de dos dimensiones
//const cohortes = [ 
//   ["Marihan", "Adrián"  , "Gustavo"] , 
//   ["Miri"   , "Emiliano", "TuTiaAbi", "ollin"]];
               //  [F]eliz [C]umpleaños
               
console.log(cohortes[0].length);
cohortes.forEach( fila =>fila.forEach(columna=>console.log("for each "+columna)));
for(let fila in cohortes){
  for (let columna in cohortes[fila])console.log("for in "+cohortes[fila][columna]);
}
for(let i=0;i<cohortes.length;i++){
  for(let j=0;j<cohortes[i].length;j++){
      console.log("for " + cohortes[i][j]);
  }
}
for (let fila of cohortes){
  for (let columna of fila)console.log("for of "+ columna)
}



/**
 * Marihan
 * Adrián
 * Gustavo
 * Miri
 * Amiliano
 * TutiaAbi
 */




