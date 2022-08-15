/**5.	Elaborar un algoritmo para leer 3 números y 
determinar sí uno es la suma de los otros dos.**/
function asigna(nu){
//nu es el valor donde se va asignar unespacio
  nu=prompt("Escribe el número","Número entero");
  nu=parseInt(nu); 
  return nu;
}

let titulo=alert("Programa que determina si 3 numeros ingresados son la suma de uno de ellos");
titulo=alert("Ingresa tres numeros");
let numero1;
let numero2;
let numero3;
let suma;

numero1=asigna(numero1);
numero2=asigna(numero2);
numero3=asigna(numero3);

suma=numero1+numero2
if(suma!=numero3){
  suma=numero2+numero3;
  if(suma!=numero1){
    suma=numero3+numero1;
    if(suma!=numero2){
      console.log("Ningun numero es la suma de los otros ingresados");
      titulo=alert("Ningun numero es la suma de los otros ingresados");
    }else{
      console.log(`El ${numero1} y ${numero3} son la suma de ${numero2}`);
      titulo=alert(`El ${numero1} y ${numero3} son la suma de ${numero2}`);
    }
  }else{
    console.log(`El ${numero2} y ${numero3} son la suma de ${numero1}`);
    titulo=alert(`El ${numero2} y ${numero3} son la suma de ${numero1}`);
  }
}else{
  console.log(`El ${numero1} y ${numero2} son la suma de ${numero3}`);
  titulo=alert(`El ${numero1} y ${numero2} son la suma de ${numero3}`);
}
