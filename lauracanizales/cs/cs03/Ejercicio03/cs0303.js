let number = [Math.floor(Math.random()*100)]

let input = prompt ("Escribe un número del 1 al 100");
if(input == number){
    console.log("Adivinaste, numero correcto")
} else if (input < number){
    console.log("Tu número es menor, intenta de nuevo");
}
if (input > number){
    console.log("Tu número es mayor, intenta de nuevo");
}