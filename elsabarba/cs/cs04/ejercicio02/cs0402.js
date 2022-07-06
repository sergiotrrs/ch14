/*
Exercise #2
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

let arr = [1, 2, 3, 4, 5];

function doublesNumbers(anArray) {
    let newArr = [];
    for (let i = 0; i < anArray.length; i++) {
        newArr[i] = anArray[i] * 2;
    }
    return newArr
}

doublesNumbers(arr)