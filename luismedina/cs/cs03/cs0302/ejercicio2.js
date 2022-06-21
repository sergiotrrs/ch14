console.clear();

console.log(`Este programa solicita 3 numeros y te dice cual es el menor`);

let num1 = parseInt(prompt(`Ingrese el primer número entre el 1 y el 100.`));
let num2 = parseInt(prompt(`Ingrese el segundo número entre el 1 y el 100.`));
let num3 = parseInt(prompt(`Ingrese el tercer número entre el 1 y el 100.`));

if (num1>=1 && num1<=100 && num2>=1 && num2<=100 && num3>=1 && num3<=100){

if(num1<=num2 && num1<=num3){
    console.log(`El número menor es ${num1}`);
}
else if (num2<=num1 && num2<=num3){
    console.log(`El número menor es ${num2}`);
}
else{
    console.log(`El número menor es ${num3}`);
}
}
else{
    console.log(`Algunos de los números ingresados estan fuera del rango establecido`);
}