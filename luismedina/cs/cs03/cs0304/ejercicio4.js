console.clear();
console.log(`Este programa solicita un numero entre el 100 y 200 y determina si es multiplo de 3`);

let numero = parseInt(prompt(`Ingresa un número entre 100 y 200`));
if (numero>=100 && numero <=200){
    
if(numero % 3>0){
    console.log(`El numero ${numero} no es multiplo de 3`);
}
else{
    console.log(`El número ${numero} si es multiplo de 3`);
}
    }
else {
    console.log(`Número fuera del rango establecido`)
}