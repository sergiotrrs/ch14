/* Algoritmo 1
Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor*/

let num1 = prompt("Escribe 1 número entre 1 y 100");
let num2 = prompt("Escribe 1 número entre 1 y 100");
let num3 = prompt("Escribe 1 número entre 1 y 100");


if (num1 > 100 || num2 > 100 || num3 > 100){
   document.write("Uno de los numeros ingresados es mayor a 100, favor de reintentar")
}
else if (num1 < 1 || num2 < 1 || num3 < 1){
    document.write("Uno de los numeros ingresados es menor a 1, favor de reintentar")
}
 else if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
	document.write(" Favor de ingresar solamente números (entre 1 y 100)");  
 }
else if (num1 > num2 && num1 > num3){
    document.write(num1 + " Es el número es el mayor.");
} 
  
else if (num2 > num1 && num2 > num3){
    document.write(num2 + " Es el número es el mayor.");
   
} else if (num3 > num1 || num3 > num2){
    document.write(num3 + " Es el número es el mayor.");
}