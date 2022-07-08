
//6. Elabora un algoritmo para leer un número y determinar si es par o impar.

let isPairNumber = function isPairNumber (A) {
  if ((A % 2 ) == 0) {
   return true;
  }
  return false;
};
//console.log(isPairNumber(4))

if (isPairNumber(2)) {
  console.log("El numero ingresado es par");
} else {
   console.log("El numero ingresado no es par");
}
