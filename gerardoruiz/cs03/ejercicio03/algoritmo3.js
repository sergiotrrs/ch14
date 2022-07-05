/*Algoritmo 3
Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles*/

let guess = parseInt(prompt("Ingresa un numero enre 1 y 100"));

for (let i = 0; i < 100; i++) {
    if(guess === i){
        document.write(`Tu número es ${i}`);
    }
}