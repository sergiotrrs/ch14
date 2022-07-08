/*Elaborar un algoritmo para leer 3 números y determinar 
si uno es la suma de los otros dos
*/
console.clear();
let num1 = parseInt(prompt(`Ingresa el primer número`));
let num2 = parseInt(prompt(`Ingresa el segundo número`));
let num3 = parseInt(prompt(`Ingresa el tercer número`));

if(num1 == num2+num3){
    console.log(`La suma del digito ${num2} y ${num3} es igual a ${num1}`);
}
else if (num2==num1+num3){
    console.log(`La suma del digito ${num1} y ${num3} es igual a ${num2}`);
}
else if (num3 == num1+num2){
    console.log(`La suma del digito ${num1} y ${num2} es igual a ${num3}`);
}
else{
    console.log(`Ninguna de las combinaciones tiene resultado favorable`);
}