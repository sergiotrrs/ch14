/* Exercise 2
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

const numbers = [65, 44, 12, 4, 20];


const numbers2 = numbers.map(x=> x*2);


console.log("Array original " + numbers)
console.log("Array nuevo al doble : " +numbers2);

