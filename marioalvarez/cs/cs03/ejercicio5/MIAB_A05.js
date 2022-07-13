/*
Problema:
Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos.
*/

let a=1;
let b=2;
let c=3;

/*
a=parseInt(prompt("Ingresa el primer número","1"));
b=parseInt(prompt("Ingresa el segundo número","2"));
c=parseInt(prompt("Ingresa el tercer número","3"));
*/
console.log("Números:")
console.log(a+","+b+","+c);
document.getElementsByTagName("p")[0].innerHTML=a+", "+b+", "+c;

if(b+c==a){
	console.log(a+" es la suma de "+b+" y "+c);
    document.getElementsByTagName("p")[1].innerHTML=a+" es la suma de "+b+" y "+c;
    //alert(a+" es la suma de "+b+" y "+c);
}else if(a+c==b){
	console.log(b+" es la suma de "+a+" y "+c);
    document.getElementsByTagName("p")[1].innerHTML=b+" es la suma de "+a+" y "+c;
    //alert(b+" es la suma de "+a+" y "+c);
}else if(b+a==c){
	console.log(c+" es la suma de "+a+" y "+b);
    document.getElementsByTagName("p")[1].innerHTML=c+" es la suma de "+a+" y "+b;
    //alert(c+" es la suma de "+a+" y "+b);
}else{
    document.getElementsByTagName("p")[1].innerHTML="Ni un número es la suma de los otros dos";
	console.log("Ni un número es la suma de los otros dos");
    //alert("Ni un número es la suma de los otros dos.");
}
