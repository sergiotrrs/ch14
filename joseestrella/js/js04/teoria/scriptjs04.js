console.log("Sesion js04");

//Como definir un arreglo
/*
const miArreglo = ["dato String", false, 23, null, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));

//Eliminar el ultimo dato del arreglo y pasarlo a una variable
const frutas = ["Mango", "Platano", "Melon", "Guanabana", "Aguacate", "Kiwi"];
let fruta = frutas.pop();
console.log(frutas.join(" * "));
console.log("Fruta eliminada: " + fruta);

console.log(frutas.push("uvas"));
console.log(frutas.join(" - "));

//Eliminar el primer elemento del arreglo y pasarlo a una variable

fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("Fruta eliminada: " + fruta);

//Agregar un elemento al inicio del arreglo

frutas.unshift("Fresa");
console.log(frutas.join(" * "));
*/
//Metodos que se utilizan para hacer FIFO en un arreglo
/* 
    * FIFO: unshift - shift
            [a,b,c,d] -> [e,a,b,c,d] -> [a,b,c,d]
    * LIFO: unshift - pop
            [a,b,c,d] -> [a,b,c,d,e] -> [e,a,b,c]
*/


//Utilizar doso variables en mi ciclo for
/*let index = 0, a = 0;
for (; index <3; index++, a+=2){
        console.log(a, index);
}
console.log(`final index ${index} - ${a}`);*/

//El ciclo for, puede no llevar parametros de inicializacion, evaluacion y exprsion final

/*index = 0;
for ( ; ; ){
}*/

//El ciclo for podria no tener un cuerpo (bloque) de instrucciones
/*let i=0;
for (i=0; i<100; i++);
console.log(i);*/

//Sintaxis del ciclo while
/*
while(condition)
statement
*/

//while (confirm("Quieres continuar?")) console.log("Pulso aceptar";)
/*
i=0;
while(i < 10) {
        console.log("Valor de i en while es: " + i);
        i++;
}

i=0;
while(i<10){
        if (i==5)break;
        console.log("Valor de i en while es: " + i);
        i++;
}*/

//El hermano de while, se llama do-while
/*
let numConciertos = 1;
do {
console.log("Veces que fui al concierto? " + numConciertos);
numConciertos++;
} while (confirm ("Puedo ir al concierto?"));
*/

/