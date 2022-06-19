/**Exercise 2
Write a function that:
  •	Takes in an array of numbers.
  •	Doubles the value of each number in the array.
  •	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

Complete the function to print out the string: This is a sentence**/

//Funcion que doplica el valor del arreglo y lo imprime
function arrayDuplica(arreglo){
    let i=0;
    let numero=[];
    for(;i<arreglo.length;i++){
        numero[i]=2*arreglo[i];
    }
  console.log(numero);
}



let numeros=[1,2,3,4,5];
let numerosPorDos=arrayDuplica(numeros);
