/*Solicitar 3 numeros (entre 1 y el 100) y definir cual es el mayor*/
let num1 = 10;
let num2 = 20;
let num3 = 30;
let mayorEs;

if(num1 >= num2 && num1 >= num3) {
    mayorEs = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    mayorEs = num2;
}
else {
    mayorEs = num3;
}

console.log("El numero mayor es " + mayorEs);