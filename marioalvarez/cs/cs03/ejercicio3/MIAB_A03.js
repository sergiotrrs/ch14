/*
Problema:
    Realizar un algoritmo para adivinar un número entre el 1 y 
    el 100 en el menor número de pasos posibles.
*/
//Número a encontrar

let num=16;
if(num<1 || num>100)
	num=50;
console.log("Número a encontrar es "+num);
document.getElementsByTagName("p")[0].innerHTML=num;

let msg=document.getElementsByTagName("p")[1];


let limInf=1;
let limSup=100;
let numM=0;
for(;;){
	let numM=Math.round((limInf+limSup-1)/2);
	if(numM==num){
		document.getElementsByTagName("p")[2].innerHTML="Número encontrado, es "+num;
		console.log("Número encontrado, es "+numM);
		break;	
	}else{
		msg.innerHTML=msg.innerHTML+"<br>El número no es "+numM;
		console.log("El número no es "+numM);
		if(num>numM){
			msg.innerHTML=msg.innerHTML+"<br>Número es mayor a "+ numM;
			console.log("Número es mayor a "+ numM);
			limInf=numM;
		}else{
			msg.innerHTML=msg.innerHTML+"<br>Número es menor a "+ numM;
			console.log("Número es menor a "+ numM);
			limSup=numM;
		}
	}
}
