/*
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

let arr = ["This", "is", "a", "sentence."];
function printOutString(valor, indice, arreglo) {
  let string = [];
  for(let i=0;i<arr.length;i++){
    string = (string + arr[i] + ' ');
  }
  console.log(string);
}

printOutString();
