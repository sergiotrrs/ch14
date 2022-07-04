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
//Utilizar dos variables en mi ciclo for
/*ejemplo 1
for (let index =0, a=0; index < 3; index++, a+=2){
    console.log(a,index);
}*/

let index =0, a=0;
for (; index <3; index++, a+=2){
        console.log (a , index); //0 -0 // 2-1 // 4-2 // No cumple 6-3
}
//se debe poner ";" aunque no haya nada inicializando
console.log(`final index ${index} - ${a}`); //6-3


//El ciclo for puede no llevar parámetros de inicialización , evaluación y expresión final.

index = 0;
for ( ; ; ){
        if (index>3)break;
        console.log(index);
        index++;
}
//El ciclo for podría no tener un cuerpo (bloque) de instrucciones.
let i =0;
for (i=0; i<100; i++); //El ; sirve para que imprima solo el último número 
console.log(i);

/**
 * Sintaxis del ciclo While 
 */

//while( confirm("¿Quieres continuar?")) console.log("Pulsó aceptar");

i=0;
while (i <10){
        console.log("valor de i en while " + i);
        i++;
}


//El hermano de While se llama Do-While*******

//Se usa por ejemplo para menús de llamadas (el primer menú) que no es opcional y es automático al momento en el que realiza la llamada.
// let numConciertos = 1;

// do {
//         console.log("Veces que fui al concierto " + numConciertos);
//         numConciertos++
// }while( confirm("¿Puedo ir al concierto?"));


// let numMuseo = 1

// do {
//         console.log("Veces que fui al museo" + numMuseo);
//         numMuseo++
// }while( confirm("¿Puedo ir al museo?"));

//Formas de iterar un arreglo*****
let carros = ["VM", "Audi","Seat", "BMW"];
//Usando estructura for
for (let i=0 ; i<carros.length; i++) console.log("Con for " + carros[i]);

//Usando forEach
carros.forEach((auto)=>console.log(auto));

//Usando for in 
for (let auto in carros) console.log("Con for-in " + carros[auto]);

//Arreglo de dos dimensiones
//En la primer caja se imprime la caja 0 del arreglo, en el segundo corchete se imprime el número de arreglo del arreglo que se seleccionó .
//También se puede ver como Filas y Coloumnas console.log(cohortes[F][C]);
const cohortes = [ ["Marihan", "Adrián","Gustavo"], ["Miri", "Emiliano", "TuTiaAbi"]];
console.log(cohortes[0][0]); 

//Usando estructura for
// for (let i=0 ; i<cohortes.length; i++) {
//         for (let j=0; i<cohortes.length; j++)
//         break;{
//                 console.log("MiriCon for " + cohortes[i][j]); 
//         }
// }

        

//for in de Julio
for(let fila in cohortes){
        for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
    }
//for each de Julio 
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

//---- Con for-in -----de Julio
for(let fila in cohortes){
        for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
    }

// For de Ollin
for(let i=0;i<cohortes.length;i++){
        for(let j=0;j<cohortes[i].length;j++){
                console.log(cohortes[i][j]);
            }
        }

//For of de Julio 
for (let fila of cohortes){
        for (let columna of fila)console.log(columna)
    }
    
        
    

