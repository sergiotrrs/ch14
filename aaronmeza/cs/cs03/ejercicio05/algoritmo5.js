/*Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos */
let number1 = parseInt(prompt("Ingresa un primer número:"));

let number2 = parseInt(prompt("Ingresa un segundo número:"));

let number3 = parseInt(prompt("Ingresa un tercer número:"));

if( number1 == number2 + number3){
    console.log("El numero " + number1 + " = " + number2 + " + " + number3);
}
else if( number2 == number1 + number3){
    console.log("El número "+ number2 + " = " + number1 + " + " +  number3);
}
else if( number3 == number1 + number2){
    console.log("El número "+ number3 + " = " + number1 + " +" +  number2);
}
else{
    console.log("Ninguno de los números ingresados puede ser expresado como suma de los restantes ");
}