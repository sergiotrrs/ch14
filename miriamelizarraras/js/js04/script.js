//Como definir un arreglo ****

const miArreglo = ["dato String", false, 23, null, {a:12, b:34}];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el último dato del arreglo y pasarlo a una variable**
const frutas=["mango", "plátano", "melón", "Guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop(); // Se elimina el último elemento del arreglo.//Devuelve el elemento eliminado.
console.log(frutas.join("*"));
console.log("Fruta eliminada " + fruta );

//Agregar un elemento al final del arreglo ****

console.log(frutas.push("uvas")); //Agregamos el elemento al final del arreglo // Devuelve la longitud del arreglo.
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable*****
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);

//Agregar un elemento al inicio del arreglo ****
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Métodos que se utilizarían para hacer un FIFO en arreglo


/**
* FIFO: unshift - shift     **FIFO: First In First Out (PEPS)
        0,1,2,3       0,1,2,3,4      0,1,2,3
*      [a,b,c,d,] -> [a,b,c,d,e] -> [b,c,d,e]   Con unshift quita el primer elemento que ya estaba, en esta ocasión saca a la letra "a".


* LIFO: push - pop       **LIFO: Last In First Out(UEPS)ultimo en entrar, primero en salir.
        0,1,2,3       0,1,2,3,4      0,1,2
*      [a,b,c,d,] -> [a,b,c,d,e] -> [a,b,c,d]  Con unshift quita el último elemento que entra, en esta ocasión saca a la letra "e".
* 
| */

// const cars = ["BMW","Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for(let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }


/**
 * for ([initialization]; [condition]; [final-expression])
 * statement
 */

for (let index = 0; index<10; index = index + 1) 
console.log(index);
console.log("Instrucción al final del for");
//---------------
// index = index + 1 -> index++;

for (let index =0, a=0; index < 3; index++, a+=2){
    console.log(a,index);
}
