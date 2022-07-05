let entero = prompt("Dame ún numero");

entero = parseInt(entero);

let multiplo = entero % 2;

if(multiplo == 0){
        console.log("El número ingresado es par");
}
else{
        console.log("El número ingresado NO es par")
}