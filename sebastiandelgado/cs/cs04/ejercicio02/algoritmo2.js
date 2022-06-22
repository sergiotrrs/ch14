// 2.- Escribir una funcion que: 1.- Tome un arreglo de números 2.- Doblar el valor en los arreglos 
// 3.- imprima el arreglo acutualizado--------------------------------------

let a= parseInt(prompt("cuántos datos tiene tu arreglo?"));
let ar= [a];

for (let i=0; i<=a; i++){
    ar[i] = prompt("dame el dato de la posición "+i);
    console.log(ar[i]);
    ar[i] = ar[i]*2;
    console.log("El dato actualizado de la posición " + (i +1) +" es = " + ar[i]);
}
