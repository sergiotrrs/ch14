console.log("Código");
//Write a function that:
//•	Takes in an array of numbers.
//•	Doubles the value of each number in the array.
//•	Prints out the new updated array.

function duplica(inputArr){
    let outputArr=[];
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        outputArr[i]=2*inputArr[i];
    }
    return outputArr;
}


duplica([1,2,3,5,7]);