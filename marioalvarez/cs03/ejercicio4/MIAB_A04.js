/*
Problema:
Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3.
*/

let a=150;
/*
a=parseInt(prompt("Ingresa un número entre 100 y 200\nSi está fuera del rango se asignará el valor de 150"));
*/

if(a<100 || a>200)
    a=150;
console.log("Número:"+a);
document.getElementsByTagName("p")[0].innerHTML="Número:"+a;

if(a%3==0){
	console.log("Es múltiplo de 3");
    document.getElementsByTagName("p")[1].innerHTML="Es múltiplo de 3";
    //alert(a+" es multiplo de 3");
}else{
	console.log("No es múltiplo de 3");
    document.getElementsByTagName("p")[1].innerHTML="Es múltiplo de 3";
    //alert(a+" no es multiplo de 3");
}