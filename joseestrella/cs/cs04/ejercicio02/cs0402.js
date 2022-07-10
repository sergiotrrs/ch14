console.log("Acá pongo mi código");
/*
Aquí merito, por favor.
*/
/*Exercise #2
Write a function that:
 Takes in an array of numbers.
 Doubles the value of each number in the array.
 Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

const array1 = [1, 2, 4, 5];
const result = [];
console.log(array1);

array1.forEach((x) => {
    result.push (x*2);
});
console.log(result);