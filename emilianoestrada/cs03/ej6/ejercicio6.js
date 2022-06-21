//Elabora un algoritmo para leer un número y determinar si es par o impar

  //ADRIAN EMILIANO ESTRADA PARRA

let numero = prompt("Ingresa un Número (100-200)");

parseInt(numero);

let prueba= numero%2;

console.log("modulo= "+prueba);


if(prueba==0)
{
  alert("par");
}
  else 
{
  alert("impar");
}