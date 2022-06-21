/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let arr = [1, 2, 3, 4];
//let arr = []

function sumAndProduct(anArray) {
    if (anArray.length != 0){
        let sum = 0;
        let product = 1;

        for (let i = 0; i < anArray.length; i++) {
            sum += anArray[i];
            product *= anArray[i]
        }
        console.log(`The sum is ${sum}. The product is ${product}.`)
    }

    else {
        console.log("Your array is empty.")
    }

}

sumAndProduct(arr)