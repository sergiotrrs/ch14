//Solicitar 3 números (entre el 1 y el 100) y definir cuál es el menor// 

let num1;
let num2;
let num3;

num1 = prompt("Ingresa un número");
num2 = prompt("Ingresa un número");
num3 = prompt("Ingresa un número");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
//console.log( num1 < num2);

if( num1 + num2 == num3){
    console.log("num1= " + num1 + " + num2 = "+num2 + " es igual a num3 ="+ num3);
    
}else if( num2 + num3 == num1){
    console.log("num2= " + num2 + " + num3 = "+num3 + " es igual a num1 ="+ num1);
    
}else if( num3 + num1 == num2){
    console.log("num3= " + num3 + " + num1 = "+num1 + " es igual a num2 ="+ num2);
    
}else{
    console.log("No se cumplió");

}


