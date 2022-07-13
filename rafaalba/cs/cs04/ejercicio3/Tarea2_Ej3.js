/*3. Write a program to compute the sum and 
product (multiplication) of an array of numbers. 
Print out the sum and the product.*/

// i en un arreglo inicia con 0 siempre
// i = i+1 = i++ contador se suma de uno en uno
// i = 0 , i=0+1 = 1, i=1+1 = 2, i=2+1 = 3 ...

function sumaArreglo(arrsum){
    let suma=0;
for (let i=0; i<=3; i++){
    suma = suma + arr[i];
    }
    console.log(suma);
}

function multArreglo(arrmul){
    let mult=1;
for (let i=0; i<=3; i++){
    mult = mult * arr[i];
    }
    console.log(mult);
}

let arr =[1, 2, 3, 4];

console.log(sumaArreglo(arr));
console.log(multArreglo(arr));