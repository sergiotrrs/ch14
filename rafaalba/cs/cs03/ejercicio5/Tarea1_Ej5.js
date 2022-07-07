//5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos.

let number1 = 7;
let number2 = 5;
let number3 = 2;
let resultado;

  if (number1 > number2 && number1 > number3) {
    console.log("Tu número mayor es " + number1);
  }

 else {
  if (number2 > number1 && number2 > number3) {
    console.log("Tu número mayor es " + number2);
  }

 else {
    console.log("Tu número mayor es " + number3);
  }
 }

 /*function suma(number2, number3){
  return number2 + number3;
 }*/

 function suma(a, b){
  return a + b;
 }

 resultado = suma(number2, number3);

 if (resultado == number1){
  console.log(number1+ " es la suma de "+ number2 + " y " + number3);
 }

 else {
  console.log(number1+ " no es la suma de "+ number2 + " y " + number3);
 }