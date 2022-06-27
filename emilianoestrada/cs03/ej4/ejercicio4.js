   //ADRIAN EMILIANO ESTRADA PARRA
    //Solicitar 1 numero (entre el 100 y el 200)  y definir si es multiplo de 3

  let numero = prompt("Ingresa un Número (100-200)");

parseInt(numero);

let prueba= numero%3;

console.log("modulo= "+prueba);


if(prueba==0)
{
  alert("Si es multiplo de 3");
}
  else 
{
  alert("NO es multiplo de 3");
}