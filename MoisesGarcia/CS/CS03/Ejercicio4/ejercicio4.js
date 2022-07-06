//Solicitar 1 entero (entre el 100 y el 200) y definir si es impar// 

let num1;

num1 = prompt("Ingresa un número entre el 100 y el 200");

num1 = parseInt(num1);

console.log( num1 % 3);

if( num1 % 3 == 0){
    console.log("Num 1 es multiplo de 3"+num1);
}else {
    console.log("Num 1 no es multiplo de 3"+num1);
}