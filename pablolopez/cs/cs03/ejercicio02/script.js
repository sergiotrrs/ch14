/*
2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
   -Obtener los tres números.
   -Restar el número 1 al número 2; si el resultado es positivo, el número 1 se guarda como el número menor, en caso contrario se guarda el número 2.
   -Se resta el número 3 al número menor; si el resultado es positivo, se guarda el úmero tres como el número menor, en caso contrario se mantiene el número menor.
   -Se da el número menor.
*/    

let menor;

let num1 = parseInt(prompt("Escribe el primer número del uno al cien."));
let num2 = parseInt(prompt("Escribe el segundo número del uno al cien."));
let num3 = parseInt(prompt("Escribe el tercer número del uno al cien."));

if((num1-num2)==0 && (num2-num3)==0){ 
   console.log("Todos los números son iguales");
}

else{
   if((num1-num2)<0){ 
       menor = num1;
   }
   else{
       menor = num2;
   }
   
   if((num3-menor)<0){
       menor = num3;
   }

   console.log("El número más chico es "+menor);
}
