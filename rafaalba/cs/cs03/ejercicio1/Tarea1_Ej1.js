//1. Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor.
// ERROR CON PROMT ; SÓLO LEE EL PRIMER DIGITO.
//FUNCIONA SIN PROMT.

let number1 = 50;
/*number1 = prompt("Escribe un número entero del 1 al 100");
   console.log(number1)*/

let number2 = 100;
/*number2 = prompt("Escribe otro número entero del 1 al 100");
   console.log(number2)*/

let number3 = 33;
/*number3 = prompt("Escribe otro número entero diferente del 1 al 100");
   console.log(number3)*/

  if (number1 > number2 && number1 > number3) {
    console.log("Tu numero mayor es " + number1);
  }

 else if (number2 > number1 && number2 > number3) {
    console.log("Tu numero mayor es " + number2);
  }

 else {
    console.log("Tu numero mayor es " + number3);
  }
