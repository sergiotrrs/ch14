//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let num1 = parseInt(prompt("Ingresa el primer numero (1 al 100)"));
let num2 = parseInt(prompt("Ingresa el segundo numero (1 al 100)"));
let num3 = parseInt(prompt("Ingresa el tercer numero (1 al 100)"));

if (num2 + num3 == num1) {
    alert(`La suma de ${num2} + ${num3} es igual a ${num1}`);
}
else if (num1 + num3 == num2) {
    alert(`La suma de ${num1} + ${num3} es igual a ${num2}`);
}
else if (num1 + num2 == num3) {
    alert(`La suma de ${num1} + ${num2} es igual a ${num3}`);
}
else {
    alert("Ningun numero es la suma de los dos restantes");
}