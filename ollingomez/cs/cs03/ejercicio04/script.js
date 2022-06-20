/**4.-Solicitar un entero (entre el 100 y el 200) y determinar 
si es múltiplo de 3 Declaro variables.**/

function asigna(nu){
//nu es el valor donde se va asignar unespacio
  nu=prompt("Escribe el número","Número entero");
  nu=parseInt(nu); 
  return nu;
}
function rango(nu){
 /*funcion que verifica que un valor se encuentre en un rango
 /*nu es el numero que va ingresar para verificar si se encuentra 
 en el rango*/
   while(nu<100 || nu>200){
   titulo=alert("Ingresa nuevo número entre 100 y 200");
   nu=prompt("Escribe de nuevo el segundo número ", "Nuevo número");
   nu=parseInt(nu);
   }
  return nu;   
}

//Declaramos variables 
let titulo=alert("Programa que determina que un númeromeroro sea multiplo de 3 en el rango de 100 a 200");
let numero;
numero=asigna(numero);
numero=rango(numero);

if((numero%3)==0){
   console.log(`El número ${numero} es multiplo de 3`);
   titulo=alert(`El número ${numero} es multiplo de 3`);
 
}else{
   console.log(`El número ${numero} no es multiplo de 3`);
   titulo=alert(`El número ${numero} no es multiplo de 3`);
}