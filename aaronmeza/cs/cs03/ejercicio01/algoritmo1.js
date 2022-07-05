let number1 = parseInt(prompt("Ingresa un primer número:"));

let number2 = parseInt(prompt("Ingresa un segundo número:"));

let number3 = parseInt(prompt("Ingresa un tercer número:"));


if(number1 >= number2 && number1 >= number3){
    console.log("El número " + number1 + " es el mayor");
}
else if( number2 >= number1 && number2 >= number3){
    console.log("El número " + number2 + " es el mayor")
}
else{
    console.log("El número mayor es " + number3);
}
