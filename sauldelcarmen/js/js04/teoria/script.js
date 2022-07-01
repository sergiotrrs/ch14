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
