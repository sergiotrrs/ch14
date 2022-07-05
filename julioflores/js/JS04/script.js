//utilizar dos variables en mi ciclo for

let index = 0, a=0;
for (; index < 3; index++, a+=2) {
    console.log (a, index);
}
//vueltas: 0 - 0/ 2-1/ 4-2/No cumple 6-3
console.log (`final index ${index} -${a}`);//6 - 3

//El cliclo for puede no llevar parámetros de iniciación, evaluación, y expresión final

index =0;
for (; ; ) {
    if (index>3) break;
    console.log ( index);
    index++;
}

//El cliclo podría no tener un cuerpo (bloque) de instrucciones
let i=0;
for (; i<100; i++);
console.log(i);

//Sintaxis del cliclo while
//while (confirm("Quieres continuar?")) console.log("Pulsa aceptar");

i=0;
while (i<10){
    console.log("Valor de 1 en while " + i);
    i++;
}

//El hermano de while se llama Do while
/*let numConciertos=1;
do {
    console.log("Veces que fui al concierto? " + numConciertos);
    numConciertos++
}while(confirm("Puedo ir al concierto? "));
*/
// for in: Sirve para iterar un arreglo
let carros = ["VW", "Audi", "Seat", "BMW"];
for (let i = 0; i < carros.length; i++) console.log ("Con for " + carros[i]);

//Usando forEach
carros.forEach((auto) => console.log("Con for each " + auto));
//con for each se crea la variable sin let

//Usando for in
for (let auto in carros) console.log ("Con for in " + carros[auto]);

//con for of
for (let auto of carros) console.log ("Con for of " + auto);
//Arreglos de dos dimensiones
const cohortes = [
    ["Mariahan", "Adrián", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    //Feliz Cumpleaños = Primer corchete Fila, Segundo corchete Columna
    console.log(cohortes[0][2]);

    //con for each
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

//con for
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

//for in
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

//for of
for(let fila of cohortes){
    for (let columna of fila) console.log(columna);
}