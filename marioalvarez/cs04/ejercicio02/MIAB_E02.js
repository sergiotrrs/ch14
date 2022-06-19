/*
Exercise #2
Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

function doubleValue(arr){
    document.getElementsByTagName("p")[0].innerHTML="["+arr+"]";
    for(let i=0; i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    document.getElementsByTagName("p")[1].innerHTML="["+arr+"]";
    console.log(arr);
}
 const array=[1,2,4,5];
 doubleValue(array);
