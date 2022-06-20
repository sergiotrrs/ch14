let entero = prompt("Dame ún numero entre 100 y 200");
if(entero < 100 || entero > 200){
        entero = alert("Ingrese un número entre 100 y 200");
        entero = prompt("Dame ún numero entre 100 y 200");
}

entero = parseInt(entero);

let multiplo = entero % 3;

if(multiplo == 0){
        console.log("El número ingresado es múltiplo de 3");
}
else{
        console.log("El número ingresado NO es un múltiplo de 3")
}