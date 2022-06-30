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
 * FIFO: unshift - shift
 * LIFO: unshift - pop
| */
