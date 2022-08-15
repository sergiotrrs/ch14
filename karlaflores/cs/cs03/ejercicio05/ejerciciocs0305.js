console.log("Codigo 05 de CS03")

//ejercicio 5  Leer tres números y determinar si uno es la suma de los otros dos.

let A= 1;
let B= 2;
let C= 3;

function suma(a,b){
    return a+b;
}

if (C == suma(A,B)){
  console.log("C es la suma de A y B");
}
else if (B == suma(A,C)){
  console.log("B es la suma de A y C");
}
else if (A == suma(B,C)){
  console.log("A es la suma de B y C");
}
