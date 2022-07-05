console.log("sesion js04");

//como definir arreglo

//const miArreglo = ["dato string", false,23, null, true];
const miArreglo = ["dato string", false,23, true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));


//eliminar el ultimo dato del arreglo

const frutas = ["mango", "platano","melon","guanabana","aguacate","kiwi"];
let fruta = frutas.pop();

console.log(frutas.join(" * "));
console.log("eliminada: "+fruta);

//agregar elemento al final
console.log(frutas.join("-"));
console.log (frutas.push("uva"));

console.log(frutas.join("-"));

//eliminar primer elemento
fruta =frutas.shift();
console.log(frutas.join("-"));
console.log("fruta eliminada"+fruta);

//agregar primer elemento
console.log(frutas.unshift("fresa"));
console.log(frutas.join("-"));

/* metodo fifo en miArreglo

FIFO: unshift - shift
[a,b,c,d] -> [e,a,b,c,d] -> [a,b,c,d]
LIFO: push - Pop
0,1,2,3     0,1,2,3,4
[a,b,c,d -> [e,a,b,c,d] -> [e,a,b,c]]
 */

for (let index = 0; index <10; index =index + 1) console.log(index);
//console.log("valor de index "+index); //no esta al alcance de la variable
console.log("instruccion final for");

for(var maga =0; maga<5; maga = maga + 1){
    console.log(maga);
}
console.log("valor de MAGA "+maga); //no esta al alcance de la variable


 //varias variables

for(let index =10; index>0; index = index - 1 ) console.log(index);

for(let index =0, a = 0; index < 3; index ++, a+=2){
    a++,
    console.log(a,index)
}

let index = 0, a=0;
for(; index < 3; index ++, a+=2){
    console.log(a,index);
}
console.log(`final index ${index} - ${a}`);

//el ciclo fro puede no llevar parametros

index = 0;
for(; ; ){
    if(index>3) break;

    console.log(index);
    index++;
}


//el for puede no tener cuerpo (bloque) de instrucciones
let i = 0;
for(; i<100; i++);
console.log(i);

//while

//while (confirm("Quieres continuar?") ) console.log("Pulso aceptar");

i=0;
while(i<10){
    console.log("Valor de i en while " + i );
    i++;
}

console.log("\n");

i=0;
while(i<10){
    if (i==5) break;
    console.log("Valor de i en while " + i );
    i++;
}

/* let numConciertos =1;
do{
    console.log("Veces que fui al concierto: " + numConciertos);
    numConciertos++;
}while(confirm("Puedo ir al concierto?") );

let = numMuseo = 1;
while(confirm("puedo ir al museo?")){
    console.log("Veces que fui al museo "+ numMuseo);
    numMuseo++;
}
 */
/**
 * suma dos numeros y devuelve el resultado
 * @param {number} a
 * @param {number} b
 * @return suma
 */

function suma(a,b){
    return a+b;
}

//for in para iterar un arreglo
let carros = ["vw","audi","seat","bmw"];

for(let i=0; i<carros.length; i++) console.log("Con for "+carros[i]);

carros.forEach(auto => {
    console.log("con for-each "+ auto)
    
});

for( x in carros){
    console.log("con for in "+ carros[x]);
}

//arreglo de dos dimensiones

const cohortes = [["Mari","Adrian","gus"], ["miri","emiliano","abi"]];
console.log(cohortes[0][2]);

for( x in cohortes){
    console.log("Arreglo "+ x+ cohortes[x]);
}

/* for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
} */
/* 
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
 */
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna) ) );
