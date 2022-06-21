/*Exercise #1
Copy the code below into your workspace:
let arr = [&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence.&quot;];
function printOutString() {
// your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.*/

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
    console.log(arr.join(" "));
}
printOutString();