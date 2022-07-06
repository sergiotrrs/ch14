/*
3.	Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
*/


let a = parseInt(Math.random() * 100 && 200) + 1;
let numero = parseInt(prompt("Introduce numero entre 1 y 100: ", 0))


for (let i = 0; i <= 4; i++) {
    if (a == numero) {
        console.log("¡Has acertado!");
    }
    if (i == 4) {
        console.log("Lo siento: ¡has perdido!. El número era el: " + a);
    }
    while (numero <= a) {
        let numero = parseInt(prompt("Introduce numero entre 1 y 100: ", 0))
    }