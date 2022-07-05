console.log("Hola a todos ")


//Cómo definir un arreglo

const myArr = ["dato string", false, 25, true];

console.log(myArr);

console.log(myArr.join(" - "));
console.log(myArr.toString());


//Eliminar el último dato del arreglo y pasarlo a una variable

const frutas = ["mango", "plátano", "melón", "guanabana", "aguacate", "kiwi"];



console.log(frutas.join(" * "))

let fruta = frutas.pop();//Se elimina el ultimo elemento del arreglo
console.log(`Fruta eliminada es: ${fruta}`);

//Agregar un elemento al final del arreglo

frutas.push("uvas");// Aregamos un elemento al final del arreglo
console.log(frutas.join("/"))


//Eliminar el primer elemento del arreglo y pasarlo a una variable
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log(`La fruta eliminada es ${fruta}`);

//Agregar un elemento al final del arreglo



console.log(frutas.unshift("fresas"));// Aregamos un elemento al inicio del arreglo
console.log(frutas.join("."))


/* Método que se utilizarían para hacer un FIFO en arreglo


FIFO: push - shift
    [a,b,c,d] -> [a,b,c,d,e] -> [b,c,d,e]

LIFO: push - pop

     0,1,2,3      0,1,2,3,4
    [a,b,c,d] -> [a,b,c,d,e] -> [a,b,c,d]
    */

for (let i = 0; i < 10; i++){
    console.log(i);
}


let index = 0, a=0;
for ( ;index < 3; index++, a+=2 ) {
    console.log(a, index);
}

console.log(`final index ${a}-${index}`);


//El ciclo for , puede no llevar parámetros de inicialización, evaluación y expresión final

/* index = 0;
for (  ; ;  ) {
    if(index>3)break;
    console.log(index);
    index++;
}

//El cliclo for podría no tener un cuerpo (bloque) de instrucciones.
let i=0;
for (; i <100; i++);
    console.log(i)
 */

//Ciclo while

//while ( confirm ("¿Quiéres continuar?")) console.log("pulsó aceptar");
/* i=0;
while(i<11 ){
    console.log(`valor de i en while ${i}`);
    i++;
} */


//Do while 

/* let numConcierto=1;
do {
    console.log(`Veces que fui al concierto ${numConcierto}`);
    numConcierto++
}while(confirm(`¿Puedo ir al concierto?`)) */


//For  para iterar un arreglo
const  cars = ["WV", "audi", "Seat", "BMW"];
for (let i= 0; i < cars.length; i++) console.log(`Con for ${cars[i]}`);

//forEach

cars.forEach((auto)=>console.log(`Con forEach ${auto}`)); 

//for in 

for (let auto in cars) console.log("Con for-in " + cars[auto]);

// for of
for (let auto of cars) console.log("con for of "+ auto);


//Arreglos de dos dimensions 
const cohortes = [ ["Marian", "Adrian", "Gustavo"], 
                ["Miri", "Emiliano", "TuTíaAbi", "Gerardo"]];
                //[F]eliz [C]umpleaños


              
 cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

 for(let fila of cohortes){
    for (let columna of fila)console.log(`Con for of ${columna}`)
 }


                