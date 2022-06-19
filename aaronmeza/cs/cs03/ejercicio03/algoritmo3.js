numberToGuess  = Math.floor(Math.random() * 100);


do{
    numberUser = parseInt(prompt("Intenta adivinar el número que he pensado: "));

    if( numberToGuess > numberUser){
        console.log("El número que debes adivinar es mayor al que ingresaste :( ")
    }
    else{
        console.log("El número que debes adivinar es menor al que ingresaste :( ")
    }
    
    
}while(numberToGuess != numberUser);

console.log(" Felicidades Adivinaste!!  el número es " + numberToGuess);