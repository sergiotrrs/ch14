/**2.-Solicita 3 numero entre 1 y 100 y define cual es el menor**/
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
   while(nu<1 || nu>100){
   titulo=alert("Ingresa nuevo número entre 1 y 100");
   nu=prompt("Escribe de nuevo número ", "Nuevo número");
   nu=parseInt(nu);
   }
  return nu;   
}

function menor(x,y,z){
/*x,y,z representan los tres numero con los que el algoritmo
decidira cual es el mayor numero*/ 
 let titulo;
  if((x<y)&&(x<z)){
    console.log("El número menor es: ", x);
    titulo=alert("El número menor es: "+x);
  }else if((y<z)&&(y<x)){
    console.log("El número menor es: ", y);
    titulo=alert("El número menor es: "+y);
  }else{
    console.log("El número menor es: ", z);
    titulo=alert("El número menor es: "+z);
  }
}

//Creamos variables
let titulo=alert("Ingresa 3 números entre 1 y 100");
let numero1;
let numero2;
let numero3;

//Llamamos a las funciones
numero1=asigna(numero1);
numero1=rango(numero1);
numero2=asigna(numero2);
numero2=rango(numero2);
numero3=asigna(numero3);
numero3=rango(numero3);

//Imprimo en consola los valores que ingreso el usuario
console.log("El primer valor es: ",numero1);
console.log("El segundo valor es: ",numero2);
console.log("El tercer valor es: ",numero3);

//Llamamos a la funcion que encuentra el numero mayor
let nMenor=menor(numero1,numero2,numero3);