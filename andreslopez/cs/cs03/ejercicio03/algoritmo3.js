//En mi algoritmo indiqué se escogería al azar, eso sería incluso más ineficiente de lo que ya es ahora al preguntar número por número.
let a = parseInt(prompt("Escriba un número del 1 al 100"));

for (let i=1; i!==(a+1); i++){
     let b = confirm("¿Es este su número? " + i);
     if (b==true){
          alert("Su número es " +i)
     }     
} 

