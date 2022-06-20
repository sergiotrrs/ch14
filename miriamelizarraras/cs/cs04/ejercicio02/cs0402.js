/* Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */


let numbers = [1, 2, 4, 5];

numbers.forEach(function(element, index, arreglo){
    console.log(element * 2);
});

