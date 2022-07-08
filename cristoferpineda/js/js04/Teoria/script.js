console.log("Sesion JS04");

//Como definir un arreglo ****************************************/
const miArreglo =["Dato string" , false , 23 , null , true];
console.log(miArreglo);
console.log(miArreglo.toString());
console.log(miArreglo.join("-"));//cambia las comas por el caracter que marca

//Eliminar el ultimo dato y pasa a una variable**************************/
const frutas =["mango" , "platano" , "melon" , "guanabana" , "aguacate", "kiwi"];
let fruta = frutas.pop();//pop elimina el ultimo elemento 
console.log(frutas.join(" * "));//cambia "," por "*"
console.log("Fruta eliminada " + fruta);//retorna la fruta eliminada por el pop

//Agregar un elemento al final del arreglo*******************************************/
console.log(frutas.push("uvas"));//se agregara al final del arreglo
                    //y devuelve longitud del arreglo
console.log(frutas.join(" - "));

//Elimina el primer elemento del arrreglo y pasarlo a una variable
fruta = frutas.shift(); //elimina ultimo dato
console.log(frutas.join(" - "));
console.log("Fruta eliminada " + fruta);//entrega el dato eliminado

//Agrega un elemento al inicio y retorna longitud del arreglo
console.log(frutas.unshift("fresa"));
console.log(frutas.join(" - "));

//Metodo que se utilizaria para hacer FIFO en un arreglo
/**FIFO:First input firts out
 * FIFO:      push        ->    shift       primero en entrar es primero en salir
 * [a,b,c,d]->[a,b,c,d,e] -> [b,c,d,e]
 * LIFO: Last input first out
 * LIFO:          push    ->    pop         primero en entrar es ultimo en salir
 * [a,b,c,d]  [a,b,c,d,e] -> [a,b,c,d]
 */

//Ciclo for*******************************************************************
for (let index=0 ; index<10 ; index = index+1) 
console.log(index); //ciclo for solo tiene una unica instruccion y por eso puede o no llevar bloques "{}"
console.log("Instruccion al final del for");
//se muestra desde el 0 hasta el 9 

//*************************************************************************************** */
for(let index = 10; index>0; index=index -1) console.log(index);
//Utilizar dos variables en un ciclo for********************************************************************************* */
//index = index +1 -> index++     es lo mismo
for (let index = 0 , a=0; index < 3; index++ , a++) {
    console.log = (a, index); 
}
///********************************************** */
/*let index =0 , a=0;//declaracion fuera del for
for( ; index <3 ; index++, a+=2){
    console.log (a , index); //0-0 // 2-1 // 4-2 //No cumple pero se quedan 6-3
}
console.log(`final index ${a} - ${index}`);//6 -3
*/

/*
//El ciclo for , puede no llevar parametros de inicializacion , evaluacion y expresion final
index=0;
for (    ;  ; ) {
    if (index>3) break;
    console.log(index);
    index++;
}
*/


/*
//El ciclo for podria no tener un cuerpo (bloque) de instrucciones.
let i=0;
for (; i<100; i++); //imprime solo 100 no de 0 -100 porque el ";" cierra el ciclo
console.log(i);
*/


//Sintaxis del ciclo while(condicion)
//while( confirm("Quieres continuar?")) console.log("Pulso aceptar");
i=0;
while(i<10){
    console.log("Valor de i en while " + i);
    i++;
}
i=0;
while(i<10){
    if(i==5)break;//imprime del 0 al 4
    console.log("Valor de i en while " + i);
    i++;
}


//Do - while*************************************************************/
let numConciertos=1;
do{
    console.log("veses que fui al concierto?" + numConciertos);
    numConciertos++
}while(confirm("Puedo ir al concierto?"));
//do while hace una ronda despues continua mientras la condicion sea verdadera y while comprueba la condicion antes de empezar 


//formas de interar un arreglo ***************************************************/
const carros=["Vw" , "Audi" , "Seat", "Bmw"];
//usando estructura for
for (i=0 ; i<carros.length ; i++) console.log("Con for " + carros[i]);
//usando forEach
carros.forEach((auto) =>console.log("Con for each" + auto));
//usando for in
for(let auto in carros)console.log("Con for-in " + carros[auto]);
//usando for of
for (let auto of carros) console.log("Con for-of " + auto);

//Arreglos de dos dimensiones**********************************************************************/
const cohortes = [ ["Marihan" , "Adrian" , "Gustavo"] , ["Miri" , "Emiliano" , "TuTiaAbi"]];
console.log(cohortes[0][2]);//el primer indice es para el arreglo , el segundo para el dato dentro del arreglo
//en el console se imprimiria gustabo 
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));//para imprimir ambos arreglos
/*
//para imprimir ambos arreglos pero usando for in 
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

//para imprimir ambos arreglos pero con for anidados
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

//usando for-of
for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}

*/