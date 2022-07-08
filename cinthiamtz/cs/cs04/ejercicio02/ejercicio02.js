/* Ejercicio 2:
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

const array = [ 1, 2, 3, 4]

// El for se va a deterner hasta el numero de elementos usando el length
console.log("Utilizado el ciclo FOR");
for (let i=0; i<array.length; i++){
  console.log (array[i]*2) // Se realiza la multiplicación por dos a todos los elementos
  alert('El doble de ' + array [i] + ' es igual a '+ array [i]*2);
}

console.log ("Utilizando la estructua forEach");
array.forEach ( (valor )=>{
 console.log( valor*2 );
})