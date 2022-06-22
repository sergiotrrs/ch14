console.clear();
console.log("Este programa solicita 3 numeros y te dice cual es el mayor");
let num1 = parseInt(prompt("Ingresa el primer numero entre el 1 y el 100"));
let num2 = parseInt(prompt("Ingresa el segundo numero entre el 1 y el 100"));
let num3 = parseInt(prompt("Ingresa el tercer numero entre el 1 y el 100"));

if (num1>=1 && num1<=100 && num2>=1 && num2<=100 && num3>=1 && num3<=100){

if(num1>=num2 && num1>=num3){
    console.log(`El numero mas grande es ${num1}`)
}
else{
if(num2>=num1 && num2>=num3){
    console.log(`El numero mas grande es ${num2}`)
}
if(num3>=num1 && num3>=num2){
    console.log(`El numero mas grande es ${num3}`)
}
}
}
else {
    console.log(`Algunos de los números ingresados estan fuera del rango establecido`);
}
