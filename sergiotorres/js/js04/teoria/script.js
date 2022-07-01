console.log("Sesión JS04");

//Como definir un arreglo ************************
const miArreglo = ["dato String", false, 23, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable**
const frutas=["mango", "plátano", "melón", "Guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop(); // Se elimina el último elemento del arreglo
                            // y devuelve el elemento eliminado.                            
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta );

//Agregar un elemento al final del arreglo *********************
console.log(frutas.push("uvas")); //Agregamos el elemento al final del arreglo
                                //y devuelve la longitud del arreglo
console.log(frutas.join(" - "));
//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada "+ fruta);
//Agregar un elemento al inicio del arreglo *********************
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));
//Métodos que se utilizarían para hacer un FIFO en arreglo
/**
 * FIFO: push - shift
 * []
 * [a]
 * [a,b]
 * [a,b,c]
 *       0,1,2,3
 *      [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]
 * LIFO: push - pop
 *  i    0,1,2,3      0,1,2,3,4
 *      [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d] 
 */
/*
 const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

 let text = "";
 for (let i = 0; i < cars.length; i++) {
   text += cars[i] + "<br>";
 }
 document.getElementById("demo").innerHTML = text;
*/

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
for (let index = 0, a=0; index < 3; index++, a+=2) {
    console.log (a , index);
}



 





