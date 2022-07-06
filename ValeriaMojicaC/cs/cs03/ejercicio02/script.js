//Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números
let num1 = parseInt(prompt("Ingresa el primer numero (1 al 100)"));
let num2 = parseInt(prompt("Ingresa el segundo numero (1 al 100)"));
let num3 = parseInt(prompt("Ingresa el tercer numero (1 al 100)"));

if (num1 < num2 && num1 < num3) {
    alert("El numero menor es: " + num1);
}
else if (num2 < num1 && num2 < num3) {
    alert("el numero menor es: " + num2);
}
else if (num3 < num1 && num3 < num2) {
    alert("El numero mayor es: " + num3);
}
else {
    alert("Ingresa un numero correcto");
}