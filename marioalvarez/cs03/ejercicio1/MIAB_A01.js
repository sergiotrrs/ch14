/*
	Solicitar 3 números (entre el 1 y el 100) y definir cuál es el mayor.
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

console.log("Números:");    
console.log("a:"+a+", b:"+b+", c:"+c);

document.getElementsByTagName("p")[0].innerHTML="a:"+a;
document.getElementsByTagName("p")[1].innerHTML="b:"+b;
document.getElementsByTagName("p")[2].innerHTML="c:"+c;

let max=0;
if(a>=b && a>=c){
    max=a;
    console.log("a:"+a+" es el mayor");
    //alert("a:"+a+" es el mayor");
}
else if(b>=a && b>=c){
    max=b;
    console.log("b:"+b+" es el mayor");
    //alert("b:"+b+" es el mayor");
}
else{
    max=c;
    console.log("c:"+c+" es el mayor");
    //alert("c:"+c+" es el mayor");
}

document.getElementsByTagName("p")[3].innerHTML=max;
    
