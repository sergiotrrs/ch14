
alert("Este programa adivina tu numero")
//En esta parte establesco el rango de 1-100//

let numMin=1
let numMax=100
let secreto= Math.floor(Math.random()*numMax- numMin + 1) + numMin

/*Aqui establezco un ciclo sin expresion final y lo cierro con break para
que se repita hasta acertar el numero*/

for(i=0; i<1; ){
    let num = prompt("Ingresa un numero entre 1-100")
    if (num >= numMin && num <= numMax){
     if(num < secreto){
      alert("Ingresa un numero mayor")
     }
     else if (num > secreto){
      alert("Ingresa un numero menor")
     }
     else if( num == secreto){
      alert("Felicidades adiviniaste el numero")
      break
      }
    }
else{
    alert("Ingresa un numero entre 1-100")
    }
 }