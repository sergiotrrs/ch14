console.log("Sesion JS04");

//Como definir un arreglo ****************************************/
const miArreglo =["Dato string" , false , 23 , null , true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));//cambia las comas por el caracter que marca

//Eliminar el ultimo dato y pasa a una variable**************************/
const frutas =["mango" , "platano" , "melon" , "guanabana" , "aguacate", "kiwi"];
let fruta = frutas.pop();//pop elimina el ultimo elemento 
console.log(frutas.join(" * "));//cambia "," por "*"
console.log("Fruta eliminada " + fruta);//retorna la fruta eliminada por el pop

//Agregar un elemento al final del arreglo*******************************************/
console.log(frutas.push("uvas"));//se agregara al final del arreglo
                    //y devuelve longitud del arreglo
console.log(frutas.join(" - "));

//Elimina el primer elemento del arrreglo y pasarlo a una variable
fruta = frutas.shift(); //elimina ultimo dato
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);//entrega el dato eliminado

//Agrega un elemento al inicio y retorna longitud del arreglo
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Metodo que se utilizaria para hacer FIFO en un arreglo
/**FIFO:First input firts out
 * FIFO:      push        ->    shift       primero en entrar es primero en salir
 * [a,b,c,d]->[a,b,c,d,e] -> [b,c,d,e]
 * LIFO: Last input first out
 * LIFO:          push    ->    pop         primero en entrar es ultimo en salir
 * [a,b,c,d]  [a,b,c,d,e] -> [a,b,c,d]
 */

//Ciclo for*******************************************************************
for (let index=0 ; index<10 ; index = index+1) 
console.log(index); //ciclo for solo tiene una unica instruccion y por eso puede o no llevar bloques "{}"
console.log("Instruccion al final del for");
//se muestra desde el 0 hasta el 9 

//*************************************************************************************** */
for(let index = 10; index>0; index=index -1) console.log(index);
//Utilizar dos variables en un ciclo for********************************************************************************* */
//index = index +1 -> index++     es lo mismo
for (let index = 0 , a=0; index < 3; index++ , a++) {
    console.log = (a, index); 
    
}