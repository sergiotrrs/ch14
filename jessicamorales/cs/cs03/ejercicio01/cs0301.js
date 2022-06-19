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
     let result = alert("Todos los numeros ingresados son iguales");
} else {
     if (a > b){
        if (a > c){
           result = alert("El mayor es el primer número");
        }
        else{
            result = alert("El mayor es el tercer número");
        }
     }
   else{
      if(a < b){         
         if(b > c){
            result = alert("El mayor es el segundo número");
         }
         else{
            result = alert("El mayor es el tercer número");
         }
      }
   }
} 