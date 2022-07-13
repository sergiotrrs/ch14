/**Exercise #3
Write a program to compute the sum and product (multiplication) of an
array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
**/
function pideArreglo(vector,n) {
   
    for(let i=0;i<n;i++){
        titulo=prompt(`Escribe tu valor ${i}: `, "Número");
        vector[i]=parseInt(titulo);
    }
    return vector;
}

function sumaArreglo(vector,n){
    let suma=0;
    for(let i=0; i<n; i++){
        suma=suma+vector[i];   
    } 
    console.log("la suma de los valores de sus elementos son: " + suma);
    let titulo=alert("la suma de los valores de sus elementos son: " + suma);
}

function multiArreglo(vector,n) {
    let multi=1;
    for(let i=0; i<n; i++){
        multi=multi*vector[i];
    }
    console.log("la multiplicaciónn de los valores de sus elementos son: " + multi);
    let titulo=alert("la multiplicación de los valores de sus elementos: " + multi);
}

let arreglo=[];
let n=prompt("De que tamaño quieres que sea tu vector","Escribe un número");
n=parseInt(n);

arreglo=pideArreglo(arreglo,n);

sumaArreglo(arreglo,n);

multiArreglo(arreglo,n);


