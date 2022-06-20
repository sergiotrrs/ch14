// Usé Desestructuración de arreglos en JavaScript

let arr = ["This", "is", "a", "sentence."];
function printOutString() {
   let This, is, a, sentence = ["This", "is", "a", "sentence."]; 
 
 console.log("This", "is", "a", "sentence.");
}

printOutString();

//usando join

let arr2 = ["This", "is", "a", "sentence."];
function printOutString() {
   let joined= arr.join(' '); 

 console.log(joined);
}

printOutString();