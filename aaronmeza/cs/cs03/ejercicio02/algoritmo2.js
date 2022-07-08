let number1 = parseInt(prompt("Ingresa un primer número:"));

let number2 = parseInt(prompt("Ingresa un segundo número:"));

let number3 = parseInt(prompt("Ingresa un tercer número:"));


if(number1 <= number2){
    if(number1 <= number3){
        console.log("El número mínimo es: "+ number1);
    }
    else{
        console.log("El número mínimo es: "+ number3);
    }
}
else{
    if(number2 <= number3){
        console.log("El número mínimo es: "+ number2);
    }
    else{
        console.log("El número mínimo es: "+ number3);
    }
}

