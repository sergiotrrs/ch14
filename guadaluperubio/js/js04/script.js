console.log("sesion js04");


// como definir un arreglo
const miArreglo = ["dato String", false, 23, true];
console.log(miArreglo)
console.log(miArreglo.toString());   /**Aqui mi arreglo lo cambio a string */

console.log(miArreglo.join(" ,"));  /**Cambio mi arreglo a string, entre las comillas se puede poner un guion o solo un espacio, es ¿como quieres que los separe? */


// ELIMINAR EL ULTIMO DATO DEL ARREGLO Y PASARLO A UNA VARIABLE*****************************************************************

const frutas=["mango","plátano", "melón", "guanábana", "aguacate", "kiwi"];
let fruta = frutas.pop();   //El pop elimina el ultimo elemento del arreglo y me lo devuelve
console.log(frutas.join(" * "));
console.log("Fruta eliminada " + fruta);  //Aqui esta devolviendo el elemento eliminado

// ARREGLAR UN ELEMENTO AL FINAL DEL ARREGLO
console.log(frutas.push("Uvas"));   //agrga el elemento al final del arreglo y devuelve la longitud final del arreglo
console.log(frutas.join(" - "));

//ELIMINAR EL PRIMER ELEMENTO DEL ARREGLO Y PASARLO A UNA VARIABLE
fruta = frutas.shift();
console.log(frutas.join(" - "));
console.log("fruta eliminada " +fruta)

//AGREGA UN ELEMENTO AL INCIO DEL ARREGLO
console.log(fruta = frutas.unshift("fresas"));
console.log(frutas.join(" - "));

//MÉTODOS QUE SE UTILIZARIAN  PARA HACER UN FIFO EN ARREGLO

//***********1**************2****************4 */
//for ([initialization]; [condicion]; [final-expresion])
//esttement **4**
for(let index = 0; index < 10; index = index +1 )  //primero ejecuta, luego 2, pasa a 3, si 3 es true pasa a 4 y regresa a 2 hasta terminar 
console.log(index);
console.log("instrucción al final del for");

//con var
// for(var maga = 0; maga < 5; maga = maga +1 ){
//     console.log(maga);
// }   
// console.log("Valor de Maga" +maga); //esto no esta en el alcance la variable

//----------------------------------------------------------------------
//  for(let index = 0; index < 10; index = index - 1 ) console.log(index);
//---------------------------------------------------------------
//index =index + 1 -> index++;

//UTILIZAR DOS VARIABLES EN MI CICLO*****************************************************************************************************************
let index = 0, a=0;
for( ; index < 3; index++, a+=2) {
    console.log(a, index);
}
console.log(`final index ${a} - ${index}`);
//****************************************************************************************************************************************************** */

// el ciclo for  puede no llevar parametros de inicializacion, condicicion y expresion final(funciona pero no es optimo)}****************************
index =0;
for (  ;  ; ){
if (index < 3)break;
console.log(index);
index++;
}
// *********************************************************************************************************************************************

// el ciclo for podria no tener un cuerpo (bloque) de instrucciones******************************************************************************
// let i=0
// for(; 1<100; i++);
// console.log(i);
// *********************************************************************************************************************************


/******************************C I C L O   W H I L E *****************************************************************************************/
/**SINTAXIS DEL CICLO WHILE
 *while (condicion)  
 statement
 */

// while (confirm ("¿quieres continuar?")) console.log("pulso aceptar")
i=0;
while (i <10 ) {
    if (i==5)break;
    console.log("valor de i en while " + i);
    i++;
}

// i=0;
// while (!confirm("tu numero es " + i + "?" )){
// console.log("su numero no es " + i);
// i++;
// }
// console.log ("su numero pensado es " + i)

//******************************************************************** */

/**El hermano del whiLe es   DO WHILE ***/
// let numConciertos=1;
// do {
//     console.log("veces que fui al concierto " +numConciertos);
//     numConciertos++ 
// }while(confirm ("¿puedo ir al concierto? ") );

// let numMuseo = 1;
// while(confirm ("¿puedo ir al museo? ") ) {
//     console.log("veces que fui al museo " +numMuseo);
//     numMuseo++ ;
// }

// ***************************************************************************************************************************
// for  in, sirve para iterar un arreglo
const carros = ["VW", "Audi", "Seat", "BMW", "Lobo"];
// usando estructura for
for(let i=0; i<carros.lenght; i++) console.log("con for " + carros[i]);

// usando for each
carros.forEach((auto)=> console.log("con for each " +auto));

// usando for in
for(let auto in carros) console.log("con for in " +carros[auto]);

// con for of
for (let auto of carros) console.log("con for of " + auto);

// arreglo de dos dimensiones
// const cohortes = [["Marihan", "Adrián", "Gustavo"], ["Miri", "Emiliano", "Abi"]];
// console.log(cohortes[0][2]);


// ccon for each************************************************************************************************************
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "Abi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

// con for***********************************************************************************
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

// FOR OF*******************************************************************************************
for (let fila of cohortes){
    for (let columna of fila)console.log("con for of " +columna)
}