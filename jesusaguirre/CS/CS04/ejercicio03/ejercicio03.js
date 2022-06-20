/* Write a program to compute the sum and product (multiplication) of an array of 
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
  let suma =0;
  let producto = 1;
  let arreglo = [1, 2, 3, 4];
  console.log(`arreglo ${arreglo}`);
  arreglo.forEach(valor => {
    suma += valor;
    producto *= valor;
 });
  console.log(`la suma de los valores del arreglo es ${suma}`);
  console.log(`el producto de los valores del arreglo es ${producto}`);
  
  