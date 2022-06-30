
/*
Code developed by: FAGUILAR1097  
This is the functional part of my first little calculator
*/


// Funciones de la calculadora: sumar, restar, multiplicar y dividir
function sumar (){ 

    let a =Number(document.getElementById("a").value);
    let b =Number( document.getElementById("b").value);
    //Arrow function de la suma
    /**
 * @param {number} a primer sumando
 * @param {number} b segundo sumando
 * @return sumatoria de a+b
*/    const suma = (a,b) => a + b;
    //Asignación y muestra de resultados
    console.log("la suma de a + b es: ", suma(a,b));
    let sum = suma(a,b)
    document.getElementById("c").value = sum;
   
};
function restar (){ 

    let a =Number(document.getElementById("a").value);
    let b =Number( document.getElementById("b").value);
      //Arrow function de la resta
        /**
        * @param {number} a primer restando
        * @param {number} b segundo restando
        * @return resta de a-b
        */  
    const resta = (a,b) => a - b;
    //Asignación y muestra de resultados
    console.log("la resta de a - b es: ", resta(a,b));
    let res = resta(a,b);
    document.getElementById("c").value = res;

};
function multiplicar (){ 

    let a =Number(document.getElementById("a").value);
    let b =Number( document.getElementById("b").value);
      //Arrow function de la multiplicación
        /**
        * @param {number} a primer restando
        * @param {number} b segundo restando
        * @return resta de a-b
        */  
    const mult = (a,b) => a * b;
    //Asignación y muestra de resultados
    console.log("la multiplicación de a * b es: ", mult(a,b));
    let mul = mult(a,b);
    document.getElementById("c").value = mul;

};
function dividir (){ 

    let a =Number(document.getElementById("a").value);
    let b =Number( document.getElementById("b").value);
      //Arrow function de la división
      /**
        * @param {number} a primer restando
        * @param {number} b segundo restando
        * @return resta de a-b
        */  
    const division = (a,b) => a / b;
    //Asignación y muestra de resultados
    console.log("la división de a / b es: ", division(a,b));
    let divi = division(a,b);
    document.getElementById("c").value = divi;

};

function limpiar(){
  document.getElementById("a").value = " ";
  document.getElementById("b").value = " ";
  document.getElementById("c").value = " ";
}