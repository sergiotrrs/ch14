// Write a program to compute the sum and product (multiplication) 
// of an array of numbers. Print out the sum and the product

const sum=[3, 6, 9, 12];
const suma= sum.reduce((a,b) => a + b);
alert("La suma del arreglo es " + suma);

const product= sum.reduce((a,b) => a * b);
alert("El producto del arreglo es " + product);