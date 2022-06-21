/// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es multiplo de 3.

let numero = prompt("Escribe un número entero entre el 100 y el 200");
numero = parseInt(numero);
   
if ((numero % 3) == 0) {
  console.log(numero + " es multiplo de 3");
} else {
  console.log(numero + " no es multipo de 3");
  }
