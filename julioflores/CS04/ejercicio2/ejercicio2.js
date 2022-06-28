/*
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

let arr1 = [5,10,20,40];
let arr2 = [5,10,20,40];
let result = [];
for (i = 0; i < arr1.length; i++) {
    result[i]=arr1[i]+arr2[i];
}
console.log(result);