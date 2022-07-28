/*Exercise #2
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

let num2 = parseInt(prompt("Cuantos datos desea insertar?"));
let ar = [num2];
for (let i = 1; i <= num2; i++) {
    ar[i] = prompt("Escribe los datos enteros");
    console.log("El numero " + ar[i] + " muliplicado por 2 es: " + ar[i] * 2);
} 
