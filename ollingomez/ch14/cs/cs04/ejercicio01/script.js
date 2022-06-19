/**Exercise 1 
Copy the code below into your workspace:
let arr = ["This", "is", "a","sentence."];
function printOutString(){
  //your code here
}
Complete the function to print out the string: This is a sentence**/

let arr = ["This", "is", "a", "sentence."];
function printOutString(arreglo) {
  console.log( arreglo.join(' ') );
}

printOutString(arr);
