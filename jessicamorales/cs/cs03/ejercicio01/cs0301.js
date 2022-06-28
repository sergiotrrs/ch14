let a = prompt("Dame el primer numero (1-100)");
let b = prompt("Dame el segundo numero (1-100)");
let c = prompt("Dame el tercer numero (1-100)");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

console.log("Primer número: ", a);
console.log("Segundo número: ", b);
console.log("Tercer número: ", c);

if (a == b && a == c){
     console.log("Todos los numeros ingresados son iguales");
} else {
     if (a > b){
        if (a > c){
           console.log("El mayor es el primer número: ", a);
        }
        else{
           console.log("El mayor es el tercer número: ", c);
        }
     }
   else{
      if(a < b){         
         if(b > c){
            console.log("El mayor es el segundo número: ", b);
         }
         else{
            console.log("El mayor es el tercer número: ", c);
         }
      }
   }
} 