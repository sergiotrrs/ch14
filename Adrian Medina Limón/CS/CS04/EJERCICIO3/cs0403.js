/*Exercise #3 Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.*/

let number = [1, 2, 3, 4], suma = 0, multiplication = 1;
for(let i=0; i<number.length; i++){
       suma += number[i] ; 
       multiplication *= number[i] ;
  }   
console.log(" suma " + suma);
console.log(" multiplication " + multiplication);