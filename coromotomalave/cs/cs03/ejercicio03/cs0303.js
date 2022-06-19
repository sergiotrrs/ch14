
//3. Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

const obtenerNumero = (rango) => {

  let min = 0;
  let max = rango || 100;
  let count = 20;
  const mayorQue = (numero) => confirm(`Es el número mayor que ${numero} ( ${min} - ${max}) ?`);
  const esIgual = (numero) => confirm(`El número es ${numero}?`);
  while(count > 0) {
    console.count('round');
    let midPoint = Math.floor((min + max) / 2);
    console.log(`min: ${min}, max: ${max}, midPoint: ${midPoint}`);
    if(esIgual(midPoint)) {
      alert(`The number is ${midPoint}`);
      count = 0;
    } else if(mayorQue(midPoint)) {
      min = midPoint + 1;
    } else {
      max = midPoint - 1;
    }
    count = count - 1;
  }
};

obtenerNumero(20)
/*
Declare una funcion llamada obtenerNumero con un argumento rango.
Declare variable llamada min para que comience en 0.
Declare variable llamada max para que los valores lleguen maximo a 100.
Declare variable llamada count para se intente maximo 20 veces.
Declara una funcion llamada mayorQue donde coloque un metodo confirm 
Declara una funcion llamada esIgual donde coloque un metodo confirm 

Preguntar si es el punto medio promedio es igual a 50 mayor se suma 1 ahora sera 51 nuevo minimo 51
*/