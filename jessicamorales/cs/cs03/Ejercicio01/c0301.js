let a = prompt("Dame el primer numero (1-100)");
if(a > 100 || a < 1){
        a = alert("Ingrese un número entre 1 y 100");
        a = prompt("Dame el primer numero");
}

let b = prompt("Dame el segundo numero (1-100)");
if(b > 10 || b < 1){
        b = alert("Ingrese un número entre 1 y 100");
        b = prompt("Dame el primer numero");
}

let c = prompt("Dame el tercer numero (1-100)");
if(c > 100 || c < 1){
        c = alert("Ingrese un número entre 1 y 100");
        c = prompt("Dame el primer numero");
}

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