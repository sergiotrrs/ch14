/*REALIZAR UN ALGORITMO PARA ADIVINAR UN NÚMERO 
ENTRE EL 1 Y EL 100 EN EL MENOR NÚMERO DE PASOS POSIBLES*/

let number = parseInt (prompt("INGRESE NUMERO"))
let numero = 50;
let mayor = 100;
let menor = 1;
for (let i=0;i<100;i++)
    if (numero ==number){
        alert("el numero es:" + numero)
        break;
    }else if (numero>number){
        mayor = numero; 
        numero = parseInt(((mayor)/2)+menor)
   }else if (numero<number){
       menor = numero;
       numero =parseInt(((mayor-menor)/2)+menor)
   }
        
   console.log("intento #: "+i+" numero evaluado: "+numero )