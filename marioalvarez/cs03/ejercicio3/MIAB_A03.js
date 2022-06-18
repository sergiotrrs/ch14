/*
Problema:
    Realizar un algoritmo para adivinar un número entre el 1 y 
    el 100 en el menor número de pasos posibles.
*/
//Número a encontrar
let num=16;
if(num<1 || numM>100)
	num=50;

let limInf=1;
let limSup=100;
let numM=0;
for(;;){
	let numM=Math.round((limInf+limSup-1)/2);
	if(numM==num){
		console.log("Número encontrado, es "+numM);
		break;	
	}else{
		console.log("El número no es "+numM);
		if(num>numM){
			console.log("Número es mayor a "+ numM);
			limInf=numM;
		}else{
			console.log("Número es menor a "+ numM);
			limSup=numM;
		}
	}
}
