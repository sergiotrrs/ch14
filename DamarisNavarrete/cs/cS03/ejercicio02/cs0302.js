let num1 = 10;
let num2 = 20;
let num3 = 30;
let menorEs;

if(num1 <= num2 && num1 <= num3) {
    menorEs = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    menorEs = num2;
}
else {
    menorEs = num3;
}

console.log("El numero menor es " + menorEs);