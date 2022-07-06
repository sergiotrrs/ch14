   //ADRIAN EMILIANO ESTRADA PARRA
    //Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el menor

  let numero1 = prompt("Ingresa 1er Número (1-100)");

  let numero2 = prompt("Ingresa 2do Número (1-100)");

  let numero3 = prompt("Ingresa 3er Número (1-100)");

parseInt(numero1);
parseInt(numero2);
parseInt(numero3);

console.log("El primer numero es " + numero1);
console.log( "El segundo numero es " + numero2);
console.log( "El tercer numero es " + numero3);

let numerote;
if (numero1 < numero2 && numero1< numero3)
{
 numerote=numero1;}
 
 else if (numero2< numero1 && numero2<numero3)
 {
  numerote= numero2;
}
else
 {
  numerote=numero3;
 }

 alert("EL numero menor es: "+ numerote);