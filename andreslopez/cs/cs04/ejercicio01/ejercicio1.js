//Completar el código para que imprima "This is a sentence"
let arr = ["This", "is", "a", "sentence."];
function printOutString(palabras){
     let s = " "
     arr.forEach(palabras=>(s = s + palabras + " "))
     
     console.log(s)
}

printOutString();