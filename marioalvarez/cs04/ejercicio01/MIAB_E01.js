/*
Exercise #1
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    let msg=arr.join(" ");
    document.getElementsByTagName("p")[1].innerHTML=msg;  
    console.log(msg);
}
printOutString();

