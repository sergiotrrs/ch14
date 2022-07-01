console.log("Sesion js04");

//Como definir un arreglo
const miArreglo = ["Dato String", false, 23, true];
console.log(miArreglo);
//Convertir el arreglo en tipo String (texto)
console.log(miArreglo.toString());
//Covertir arreglos en stringo y separarlos por algun caracter
console.log(miArreglo.join(" ♥ "));

//Eliminar el ultimo dato del arreglo y pasarlo a una variable
const frutas = ["Mango", "Platano", "Melon", "Guanabana", "Aguacate", "Kiwi"];
//Elimina el ultimo elemento
//Y devuelve el elemento eliminado
let fruta = frutas.pop(); 
console.log(frutas.join(" * "));
console.log(`Fruta eliminada: ${fruta}`);
//Agrega un elemnto alfinal del arreglo
frutas.push("Uvas");
//Y devuelve la longitud del arreglo
console.log(frutas.push("Uvas"));
console.log(frutas.join(" ♥ "));
//eliminar el primer elemento de un arreglo y aignarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log(`Fruta eliminada: ${fruta}`);
//Agregar un elemento al inicio del arreglo
frutas.unshift("Fresas");
//Retorna la longitud del arreglo
console.log(frutas.unshift("Fresas"));
console.log(frutas.join(" - "));

//Metodos que se utilizan para hacer FIFO en un areglo
/** Primer Intento
 * FIFO:    .unshift(); ---> .shift();
 *       [a, b, c, d] ---> [e, a, b, c,d] ---> [a, b, c, d,]
 * LIFO:    .unshift(); ---> .pop();
 *       [a, b, c, d] --->
 * 
*/


/** Segundo Intento
 * Primero en entrar, primero en salir
 * FIFO:    .push(); ---> .shift();
 *          1  2  3  4
 *         [a, b, c, d,] ---> [a, b, c, d, e] ---> [a, b, c, d, e]
 * 
 * Ultimo en entrar, primero en salir
 * LIFO:    .push(); ---> .pop();
 *          0  1  2  3         0  1  2  3  4
 *         [a, b, c, d,] ---> [a, b, c, d, e] ---> [a, b, c, d]
*/

//Ciclo for
/* for ([inicializacion];[condicion];[expresion final]){
    Cuerpo(si la condicion es verdadera se ejecuta)
}
*/
//Si tiene solo una instruccion no es necesario colocar las llaves {}
for (let index = 0; index <= 10; index = index + 1) console.log(index);
console.log(`Intrucción al final del for`);

//Si utilizamos var al declarar este valor si se podria mostrar fuera de bloque
//PERO NUNCA LO HAGAS
for (var maga = 0; maga < 5; maga = maga + 1) {
    console.log(maga);
}
console.log(`El valor de Maga es: ${maga}`);

for (let index = 10; index > 0; index = index - 1) {
    console.log(index);
    
}

//Puedes declarar mas de una variable al inicio de for
//                                              a=a+2 
for (let index = 0, a = 0; index < 3; index++, a += 2){
    console.log(a, index);
}