//Solicitar 1 número y definir si es impar o impar// 

let num1;

num1 = prompt("Ingresa un número");

num1 = parseInt(num1);

console.log( num1 % 2);

if( num1 % 2 == 0){
    console.log("Num 1 es par"+num1);
}else {
    console.log("Num 1 es impar"+num1);
}