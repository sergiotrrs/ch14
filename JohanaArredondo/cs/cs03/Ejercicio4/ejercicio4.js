let n1;
let div;
let nuevo;

n1 = prompt("Agrega un número entero entre el 100 y 200:");
div=n1%3;

if( div == 0 ) {
    console.log("El numero es multiplo de 3");
}
else{
    console.log("El numero no es multiplo de 3");
}