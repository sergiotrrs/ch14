/*
Problema:
    Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números.
*/

let a=1;
let b=2;
let c=3;

/*
a=parseInt(prompt("Ingresa el primer número entre el 1 y el 100\nSi está fuera del rango se asignará el valor de 1"));
b=parseInt(prompt("Ingresa el segundo número entre el 1 y el 100\nSi está fuera del rango se asignará el valor de 2"));
c=parseInt(prompt("Ingresa el tercer  número entre el 1 y el 100\nSi está fuera del rango se asignará el valor de 3"));
*/

if(a<1 || a>100)
    a=1;
if(b<1 || b>100)
    b=2;
if(c<1 || c>100)
    c=3;

if(a<=b && a<=c){
    console.log(a+" es el menor");
    //alert(a+" es el menor");
}
else if(b<=a && b<=c){
    console.log(b+" es el menor");
    //alert(b+" es el menor");
}
else{
    console.log(c+" es el menor");
    //alert(c+" es el menor");
}
    
