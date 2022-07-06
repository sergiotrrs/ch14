/*Elaborar un programa quu te diga si el número ingresado es par o impar*/

let numberUser = parseInt(prompt("Ingresa un número: "));

if(numberUser % 2 == 0){
    console.log("El número ingresado es par");
}
else{
    console.log("EL número ingresado es impar");
}