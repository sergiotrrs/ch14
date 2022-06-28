function adivinarNumero() {
    
const random = Math.floor(Math.random() * 100) + 1;


    let numero = parseInt(prompt('Adivina un numero del 1 al 100: '));

    while(numero !== random) {
        numero = parseInt(prompt('Advina un numero del 1 al 100: '));
    }

    if(numero == random) {
        console.log('Adivinaste el numero correcto');
    }

  
}
adivinarNumero();