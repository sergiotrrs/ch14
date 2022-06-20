/// 3. Algoritmo para adivinar un número entre el 1 y el 100.

let numero = prompt("Escribe un número entero del 1 al 100");
   console.log(numero);

for (let i = 0; i <=100; i++) {
  if (i === numero){
      console.log("El número secreto es "+i);
      break;
  }
}
