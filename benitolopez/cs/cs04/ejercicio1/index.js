console.log("ARRAYS");
let frase = ["This", "is", "a", "sentence."];

function printOutString( arreglo ) {
    
    // El metodo join () quita el formato de array y crea un espacio vacio en su lugar
    console.log( arreglo.join(' ') ); 
    alert(arreglo.join(' '));  
}
printOutString(frase);    