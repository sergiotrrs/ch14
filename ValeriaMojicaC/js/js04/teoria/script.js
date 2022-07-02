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

let = index = 0; a = 0;
for (; index < 3; index++, a += 2){
    console.log(index, a);
}
console.log(`Final index ${index} - ${a}`);

//El ciclo for, puede no llevar parametros
index = 0;
for (; ; ){
    if (index > 3) break;
    console.log(index);
    index++;
}

//El ciclo for, podria no tener cuerpo (bloque de instrucciones)
let i = 0;
for (; i<100;i++); //Al colocar punto y coma hace que solo se cumpla la condicion final
console.log(i);

/**
 * Sintaxis del ciclo While
 * while (condicion)
 * cuerpo del ciclo
*/
//Continua con el ciclo mientras se cumpla la condicion
//Al pulsar "Cancelar" rompe el ciclo
//while(confirm("¿Quieres continuar?")) console.log("Pulso aceptar");

/*i = 0;
while (!confirm(`¿Tu numero es ${i} ?`)) {
    console.log(`Tu numero No es: ${i}`);
    i++
}
console.log(`El numero que pensaste es: ${i}`);*/

//Se utiliza el ciclo while cuando 
//Se ejecuta solo si la condicion es verdadera
i = 0;
while (i < 10) {
    if (i == 5)break;
    console.log(`Valor de i en while: ${i}`);
    i ++;
}

//Ciclo do While
//Hace el ciclo una vez y continua si la condicion es verdadera
/*let numConciertos=1;
do {
    console.log(`Veces que fui al concierto ${numConciertos}`);
    numConciertos++;
} while (confirm("¿Puedo ir al concierto?"));

let numMuseo = 1;
while (confirm("¿Puedo ir al museo?")) {
    console.log(`Veces que fui al museo ${numMuseo}`);
   numMuseo++; 
}*/

//Ejemplo de funciones
/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} a Primer numero a sumar
 * @param {number} b Segundo numero a sumar
 * @returns suma de a + b
 */
let resultado = suma(4,3);
function suma(a, b) {
    return a + b;
}

//For in
//Sirve para iterar un arreglo
const carros = ["VW", "Audi", "Seat", "BMW"];
//Estructura for
for(i = 0; i < carros.length; i++) console.log(`Con for ${carros[i]}`);
//Estructura forEach
carros.forEach((auto) => console.log(`Con forEach ${auto}`));
//Usando for in
for (let auto in carros) console.log(`Con for-in ${carros[auto]}`);
//Usando for of
for (let auto of carros) console.log(`Con for-of ${auto}`);


//Arreglos con dos dimensiones
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
console.log(cohortes[0][2]);

for (let i = 0; i < cohortes.length; i++) {
    for (let j = 0; j < cohortes[i].length; j++) {
        console.log(cohortes[i][j]);   
    } 
}
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

for(let fila of cohortes){
    for (let columna of fila)console.log(columna);
}