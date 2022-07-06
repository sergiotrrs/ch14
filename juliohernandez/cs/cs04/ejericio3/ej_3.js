/*Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/
let cantidad=Number(prompt("¿Cuántos números quieres escribir"));
let elementos=[]
let suma=0;
let multiplication=1;
for (let i =0; i<=cantidad-1; i++){
    elementos[i]=Number(prompt(`Introduce el elemento ENTERO ${(i+1)}`));
    suma+=elementos[i];
    multiplication*=elementos[i];
}
console.log(`La suma de los elementos del vector ${elementos} es ${suma} 
y su producto es ${multiplication}`);