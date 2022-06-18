/*
Problema:
Elabora un algoritmo para leer un número y determinar si es par o impar.
*/
let a=1;

/*
a=parseInt(prompt("Ingresa un número,"1"));
*/
console.log("Numero:"+a);
document.getElementsByTagName("p")[0].innerHTML="Numero: "+a;
if(a%2==0){
	console.log("Es par");
    document.getElementsByTagName("p")[0].innerHTML="Es par";
    //alert(a+" es par");
}else{
	console.log("Es impar");
    document.getElementsByTagName("p")[1].innerHTML="Es impar";
    //alert(a+" es impar");
}