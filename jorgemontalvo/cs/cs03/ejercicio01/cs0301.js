console.log("Acá pongo mi código");

/*PRGOGRAMA PARA LEER 3 NÚMEROS ENTRE EL 1 Y 100 Y DETERMINAR CUÁL ES MAYOR*/
alert("A continuación escriba 3 números entre el 1 y el 100 para determinar cuál es MAYOR.")
let a = prompt("Escriba un número A: ");
let b = prompt("Escriba un número B: ");
let c = prompt("Escriba un número C: ");

if (a == b && a==c && b==c){
        console.warn("Los 3 números son iguales ");  
}
else if (a >= 1 && a <= 100 && b >= 1 && b <= 100 && c >= 1 && c <= 100){
    
if( a > b && a > c || a >= b && b >c || a > b && a >= c){
    console.log("El número " + a + " es el mayor.");    
}
else if (b > c && b > a || b >= c && b >a || b > c && b >= a){
    console.log("El número " + b +  " es el mayor.");    
}
else if (c > a && c > b || c >= a && c >b || c > a && c >= b){
    console.log("El número " + c + " es el mayor.");    
}
}
else {
    console.warn("Uno o más números no estan entre el 1 y 100.");
}