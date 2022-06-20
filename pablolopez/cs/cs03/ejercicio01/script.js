/*
1. Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el mayor
   -Obtener los tres números.
   -Restar el número 1 al número 2; si el resultado es negativo, el número 1 se guarda como el número mayor, en caso contrario se guarda el número 2.
   -Se resta el número 3 al número mayor; si el resultado es negativo, se guarda el úmero tres como el número mayor, en caso contrario se mantiene el número mayor.
   -Se da el número mayor.
*/    
let mayor;

let num1 = parseInt(prompt("Escribe el primer número del uno al cien."));
let num2 = parseInt(prompt("Escribe el segundo número del uno al cien."));
let num3 = parseInt(prompt("Escribe el tercer número del uno al cien."));

if((num1-num2)==0 && (num2-num3)==0){ 
   console.log("Todos los números son iguales");
}

else{
   if((num1-num2)>0){  
       mayor = num1;
   }
   else{
       mayor = num2;
   }
   
   if((num3-mayor)>0){ 
       mayor = num3;
   }

   console.log("El número más grande es "+mayor);
}
