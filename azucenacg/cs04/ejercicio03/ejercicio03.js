/*Exercise #3
Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

/*Este código entra con s=0 y toma el primer valor del arreglo que es 8 en este caso, 
por lo que la suma=8 (8+0) en la primera vuelta del for, después ese valor de s=8 entra a la 
segunda vuelta, pero ahora se suma con el segundo valor del arreglo que es 10. Este proceso
se repite*/

sum([8,10,3,2,10]);

function sum(array) {
   let s=0;
   let m=1;
    for (i=0;i<array.length;i++){
        s=s+array[i];
        m=m*array[i];
    }
    console.log("La suma de los números del arreglo es: "+ s);
    console.log("El producto de los números del arreglo es: "+ m);
    alert("La suma de los números del arreglo es: "+ s+ "y el producto de los números del arreglo es: "+ m);
}